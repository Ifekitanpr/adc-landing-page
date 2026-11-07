// Small, locally synthesized brand sounds: no downloads, autoplay UI or media weight.
let context:AudioContext|null=null;let output:AudioNode|null=null;
let resuming:Promise<void>|null=null;let activated=false;
const noiseBuffers=new Map<number,AudioBuffer>();
function resumeAudio(){
 const current=context;if(!current||current.state==='closed')return Promise.resolve();
 if(current.state==='running')return Promise.resolve();
 if(!resuming){const pending=current.resume().catch(()=>{});resuming=pending;void pending.finally(()=>{if(resuming===pending)resuming=null})}
 return resuming;
}
export function unlockBrandAudio(){
 activated=true;
 if(!context||context.state==='closed'){
  context=new AudioContext({latencyHint:'interactive'});noiseBuffers.clear();
  const compressor=context.createDynamicsCompressor();compressor.threshold.value=-16;compressor.knee.value=12;compressor.ratio.value=3;compressor.attack.value=.003;compressor.release.value=.15;compressor.connect(context.destination);output=compressor;
  // Warm reusable noise before the first visible collision.
  [.12,.15,.72].forEach(duration=>noise(context!,duration));
 }
 void resumeAudio();
}
export function recoverBrandAudio(){if(activated&&!document.hidden)unlockBrandAudio()}
export function closeBrandAudio(){const current=context;context=null;output=null;resuming=null;activated=false;noiseBuffers.clear();lastWheelSound=-1;if(current&&current.state!=='closed')void current.close().catch(()=>{});}
/** Retry a fresh collision after resume, never replay a backlog of old impacts. */
function whenAudioReady(play:()=>void){
 if(document.hidden||!context||!output)return;
 if(context.state==='running'){play();return}
 const requested=performance.now(),current=context;
 void resumeAudio().then(()=>{if(context===current&&current.state==='running'&&!document.hidden&&performance.now()-requested<180)play()});
}
function channel(pan:number){if(!context||!output||document.hidden||context.state!=='running')return null;const stereo=context.createStereoPanner();stereo.pan.value=pan;stereo.connect(output);return{ctx:context,destination:stereo,time:context.currentTime+.005};}
function noise(ctx:AudioContext,duration:number){const length=Math.ceil(ctx.sampleRate*duration);let buffer=noiseBuffers.get(length);if(!buffer){buffer=ctx.createBuffer(1,length,ctx.sampleRate);const samples=buffer.getChannelData(0);for(let i=0;i<samples.length;i++)samples[i]=Math.random()*2-1;noiseBuffers.set(length,buffer)}const source=ctx.createBufferSource();source.buffer=buffer;return source;}
export const playPendulumImpact=(side:number)=>whenAudioReady(()=>pendulumImpact(side));
export const playMergeWhoosh=()=>whenAudioReady(mergeWhoosh);
export const playWheelDetent=(direction:number,strength:number)=>whenAudioReady(()=>wheelDetent(direction,strength));
export const playCardLanding=(index:number,impactSpeed:number)=>whenAudioReady(()=>cardLanding(index,impactSpeed));
/** A warm body with a short, airy glass accent, rather than a metallic bell. */
function pendulumImpact(side:number){const voice=channel(side*.18);if(!voice)return;const{ctx,destination,time:t}=voice;
 const body=ctx.createOscillator(),bodyGain=ctx.createGain();body.frequency.setValueAtTime(210,t);body.frequency.exponentialRampToValueAtTime(115,t+.17);bodyGain.gain.setValueAtTime(.00001,t);bodyGain.gain.exponentialRampToValueAtTime(.11,t+.004);bodyGain.gain.exponentialRampToValueAtTime(.00001,t+.26);body.connect(bodyGain);bodyGain.connect(destination);body.start(t);body.stop(t+.28);body.onended=()=>{body.disconnect();bodyGain.disconnect()};
 [740,1106].forEach((frequency,i)=>{const tone=ctx.createOscillator(),gain=ctx.createGain();tone.frequency.setValueAtTime(frequency,t);tone.frequency.exponentialRampToValueAtTime(frequency*.985,t+.3);gain.gain.setValueAtTime(.00001,t);gain.gain.exponentialRampToValueAtTime(.025/(i+1),t+.007);gain.gain.exponentialRampToValueAtTime(.00001,t+.42);tone.connect(gain);gain.connect(destination);tone.start(t);tone.stop(t+.45);tone.onended=()=>{tone.disconnect();gain.disconnect()}});
 const brush=noise(ctx,.12),filter=ctx.createBiquadFilter(),gain=ctx.createGain();filter.type='bandpass';filter.frequency.value=1250;filter.Q.value=.65;gain.gain.setValueAtTime(.035,t);gain.gain.exponentialRampToValueAtTime(.00001,t+.12);brush.connect(filter);filter.connect(gain);gain.connect(destination);brush.start(t);brush.onended=()=>{brush.disconnect();filter.disconnect();gain.disconnect()};setTimeout(()=>destination.disconnect(),550);
}
/** A single soft air sweep as the two inputs join the outcome panel. */
function mergeWhoosh(){const voice=channel(0);if(!voice)return;const{ctx,destination,time:t}=voice;const source=noise(ctx,.72),filter=ctx.createBiquadFilter(),gain=ctx.createGain();filter.type='bandpass';filter.Q.value=.55;filter.frequency.setValueAtTime(300,t);filter.frequency.exponentialRampToValueAtTime(1700,t+.32);filter.frequency.exponentialRampToValueAtTime(500,t+.7);gain.gain.setValueAtTime(.00001,t);gain.gain.exponentialRampToValueAtTime(.075,t+.25);gain.gain.exponentialRampToValueAtTime(.00001,t+.7);source.connect(filter);filter.connect(gain);gain.connect(destination);source.start(t);source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();destination.disconnect()};}
let lastWheelSound=-1;
/** A restrained wooden/mechanical detent, like a weighted helm turning. */
function wheelDetent(direction:number,strength:number){
 const voice=channel(direction*.08);if(!voice)return;const{ctx,destination,time:t}=voice;if(t-lastWheelSound<.09){destination.disconnect();return}lastWheelSound=t;const level=.55+.45*Math.max(0,Math.min(1,strength));
 const friction=noise(ctx,.15),filter=ctx.createBiquadFilter(),gain=ctx.createGain();filter.type='bandpass';filter.Q.value=1.15;filter.frequency.setValueAtTime(direction>0?310:270,t);filter.frequency.exponentialRampToValueAtTime(190,t+.14);gain.gain.setValueAtTime(.00001,t);gain.gain.exponentialRampToValueAtTime(.055*level,t+.012);gain.gain.exponentialRampToValueAtTime(.00001,t+.15);friction.connect(filter);filter.connect(gain);gain.connect(destination);friction.start(t);friction.onended=()=>{friction.disconnect();filter.disconnect();gain.disconnect()};
 const tick=ctx.createOscillator(),tickGain=ctx.createGain();tick.type='triangle';tick.frequency.setValueAtTime(direction>0?180:165,t);tick.frequency.exponentialRampToValueAtTime(85,t+.065);tickGain.gain.setValueAtTime(.034*level,t);tickGain.gain.exponentialRampToValueAtTime(.00001,t+.075);tick.connect(tickGain);tickGain.connect(destination);tick.start(t);tick.stop(t+.09);tick.onended=()=>{tick.disconnect();tickGain.disconnect()};setTimeout(()=>destination.disconnect(),190);
}

/** Dry stone-like contact: low body, granular edge, softer with each real bounce. */
function cardLanding(index:number,impactSpeed:number){
 const strength=Math.min(1,Math.max(0,impactSpeed/760));
 if(strength<.03)return;
 const voice=channel((index-1.5)*.18);if(!voice)return;
 const{ctx,destination,time:t}=voice;
 const level=Math.pow(strength,.85),duration=.09+.12*strength;
 const body=ctx.createOscillator(),bodyGain=ctx.createGain();
 body.type='sine';body.frequency.setValueAtTime(158+index*11,t);body.frequency.exponentialRampToValueAtTime(72+index*5,t+.085);
 bodyGain.gain.setValueAtTime(.00001,t);bodyGain.gain.exponentialRampToValueAtTime(.105*level,t+.002);bodyGain.gain.exponentialRampToValueAtTime(.00001,t+duration);
 body.connect(bodyGain);bodyGain.connect(destination);body.start(t);body.stop(t+duration+.02);body.onended=()=>{body.disconnect();bodyGain.disconnect()};
 const contact=noise(ctx,duration),filter=ctx.createBiquadFilter(),gain=ctx.createGain();
 filter.type='bandpass';filter.Q.value=.8;filter.frequency.setValueAtTime(1050+index*135,t);filter.frequency.exponentialRampToValueAtTime(420,t+duration);
 gain.gain.setValueAtTime(.00001,t);gain.gain.exponentialRampToValueAtTime(.13*level,t+.0015);gain.gain.exponentialRampToValueAtTime(.00001,t+duration);
 contact.connect(filter);filter.connect(gain);gain.connect(destination);contact.start(t);contact.onended=()=>{contact.disconnect();filter.disconnect();gain.disconnect();destination.disconnect()};
}
