import {useEffect,useRef,useState} from 'react';
import {motion,useReducedMotion} from 'motion/react';
import HeroBackgroundVideo from './HeroBackgroundVideo';
import {unlockBrandAudio} from './motion/brandAudio';
const workshop='/assets/figma/8404-26515-imgImageProfessionalLearningWorkshop.webp';
export default function EntryExperience({onEntered}:{onEntered:()=>void}){
 const reduced=useReducedMotion(),button=useRef<HTMLButtonElement>(null),photo=useRef<HTMLImageElement>(null);
 const[leaving,setLeaving]=useState(false);
 useEffect(()=>{const overflow=document.body.style.overflow;document.body.style.overflow='hidden';button.current?.focus({preventScroll:true});return()=>{document.body.style.overflow=overflow}},[]);
 useEffect(()=>{const overlay=button.current?.closest<HTMLElement>('.entry-experience');const copy=overlay?.querySelector<HTMLElement>('.entry-copy');if(!overlay||!copy)return;const measure=()=>overlay.style.setProperty('--entry-art-top',`${copy.offsetTop+copy.offsetHeight+28}px`);const observer=new ResizeObserver(measure);observer.observe(copy);window.addEventListener('resize',measure);measure();return()=>{observer.disconnect();window.removeEventListener('resize',measure)}},[]);
 const enter=()=>{
  if(leaving)return;setLeaving(true);unlockBrandAudio();window.scrollTo({top:0,behavior:'instant'});
  const desktop=innerWidth>=1200,overlay=button.current?.closest<HTMLElement>('.entry-experience');
  if(!overlay)return;
  const duration=reduced?180:1500,easing='cubic-bezier(.4,0,.2,1)';
  const targetPhoto=document.querySelector<HTMLElement>(desktop?'[data-node-id="8404:27057"]':'.m-workshop');
  const targetVideo=document.querySelector<HTMLVideoElement>(desktop?'#home video':'.m-hero video');
  const sourceVideo=overlay.querySelector<HTMLVideoElement>('video');
  if(sourceVideo&&targetVideo&&targetVideo.readyState>=1){try{targetVideo.currentTime=sourceVideo.currentTime;void targetVideo.play().catch(()=>{})}catch{/* Keep the poster fallback. */}}
  const animations:Animation[]=[],restore:(()=>void)[]=[];
  const run=(node:HTMLElement,frames:Keyframe[],options:KeyframeAnimationOptions)=>{const animation=node.animate(frames,{fill:'both',...options});animations.push(animation);return animation};
  // Finish only intro entrances; do not snapshot or pause the playing video.
  overlay.getAnimations({subtree:true}).forEach(animation=>{try{animation.finish()}catch{/* Infinite media enhancement stays live. */}});
  overlay.style.background='transparent';
  const backdrop=overlay.querySelector<HTMLElement>('.entry-backdrop');
  if(backdrop)run(backdrop,[{opacity:1},{opacity:0}],{duration,easing});
  for(const selector of['.entry-copy','.entry-pixel-frame','.entry-signature']){const node=overlay.querySelector<HTMLElement>(selector);if(node)run(node,[{opacity:1},{opacity:0}],{duration:reduced?180:450,easing:'ease-out'})}
  if(photo.current&&targetPhoto&&!reduced){
   const node=photo.current,from=node.getBoundingClientRect(),to=targetPhoto.getBoundingClientRect();
   node.getAnimations().forEach(animation=>animation.cancel());
   Object.assign(node.style,{position:'fixed',left:`${from.left}px`,top:`${from.top}px`,right:'auto',bottom:'auto',width:`${from.width}px`,height:`${from.height}px`,margin:'0',transform:'none',animation:'none',objectFit:'cover'});
   const oldOpacity=targetPhoto.style.opacity;targetPhoto.style.opacity='0';restore.push(()=>{targetPhoto.style.opacity=oldOpacity});
   run(node,[{left:`${from.left}px`,top:`${from.top}px`,width:`${from.width}px`,height:`${from.height}px`,borderRadius:'0px'},{left:`${to.left}px`,top:`${to.top}px`,width:`${to.width}px`,height:`${to.height}px`,borderRadius:getComputedStyle(targetPhoto).borderRadius}],{duration,easing});
  }else if(photo.current)run(photo.current,[{opacity:1},{opacity:0}],{duration});
  const targets=desktop?['[data-node-id="8404:27052"]','[data-node-id="8404:27053"]','.desktop-sticky-header','[data-node-id="8404:27054"]','[data-node-id="8404:27058"]']:['.m-hero h1','.m-hero>p','.m-header','.m-hero>.m-actions','.m-free-course'];
  targets.forEach((selector,index)=>{const node=document.querySelector<HTMLElement>(selector);if(!node)return;node.getAnimations().forEach(animation=>{try{animation.finish()}catch{}});const opacity=getComputedStyle(node).opacity;run(node,[{opacity:0,translate:reduced?'none':'0 14px'},{opacity,translate:'0 0'}],{duration:reduced?180:850,delay:reduced?0:350+index*60,easing:'cubic-bezier(.22,1,.36,1)'})});
  void Promise.all(animations.map(animation=>animation.finished.catch(()=>{}))).then(()=>{
   restore.forEach(reset=>reset());animations.forEach(animation=>animation.cancel());
   onEntered();requestAnimationFrame(()=>document.querySelector<HTMLElement>(desktop?'.desktop-sticky-header a':'.m-header a')?.focus({preventScroll:true}));
  });
 };

 return <motion.div className="entry-experience entry-pixel-intro" data-node-id="8560:31045" role="dialog" aria-modal="true" aria-labelledby="entry-title" initial={false}  transition={{duration:reduced?.2:1}}>
  <motion.div className="entry-backdrop"  transition={{duration:reduced?.2:1}}><HeroBackgroundVideo/><div className="entry-shade"/></motion.div>
  <motion.div className="entry-copy"  transition={{duration:reduced?.15:.4}}>
   <div className="entry-logo" ><img src="/assets/figma/8404-26515-imgGroup1.svg" alt="ADC"/><span>Agile Digital<br/>College</span></div>
   <h1 id="entry-title" >Join the <span className="hero-top-highlight">Top 1%</span> of your industry and thrive in an AI-driven world.</h1>
   <p >For 15+ years, ADC has helped organizations innovate, transform intelligently, adapt rapidly, execute exceptionally and make progress visible.</p>
   <button ref={button} type="button" disabled={leaving} onClick={enter}>Click here to get started</button>
  </motion.div>
  <div className="entry-pixel-frame" aria-hidden="true"><i/><i/><i/><i/><i/></div>
  <div className="entry-signature" aria-hidden="true">Agile Digital College</div>
  <motion.img ref={photo} className="entry-workshop"  src={workshop} alt="An international group learning together" initial={false}  transition={{duration:reduced?.2:1.05,ease:[.22,1,.36,1]}}/>
 </motion.div>
}
