import {playMergeWhoosh,playWheelDetent} from "./brandAudio";
import {useEffect,useRef} from 'react';
import {useSceneProgress} from './ScrollScene';
const clamp=(n:number)=>Math.max(0,Math.min(1,n));
const phase=(p:number,a:number,b:number)=>{const n=clamp((p-a)/(b-a));return n*n*(3-2*n)};
/** Animate only explicit design layers; React retains ownership of the markup and controls. */
export function useScrollChoreography(kind:'dial'|'merge'|'programmes'|'assessment'|'chevron'){
 const ref=useRef<HTMLDivElement>(null);const progress=useSceneProgress();
 useEffect(()=>{const root=ref.current;if(!root||!progress)return;const $=(id:string)=>root.querySelector<HTMLElement>(`[data-node-id="${id}"]`);const originals=new Map<HTMLElement,string>();const save=(el:HTMLElement|null)=>{if(el&&!originals.has(el))originals.set(el,el.getAttribute('style')||'');return el};const set=(el:HTMLElement|null,props:Partial<CSSStyleDeclaration>)=>{if(el){save(el);Object.assign(el.style,props)}};
 let mergeSoundArmed=true,lastMergeProgress=0;let wheelAngle:number|null=null;
 const render=(p:number)=>{
  if(root.closest<HTMLElement>(".scroll-scene")?.dataset.scrollEnabled!=="true"){originals.forEach((style,node)=>node.setAttribute("style",style));return}

  if(kind==='dial'){
   const turns=[0,90,180,270];let angle=0;for(let i=0;i<3;i++)angle+=90*phase(p,.08+i*.28,.36+i*.28);const active=turns.reduce((best,v,i)=>Math.abs(v-angle)<Math.abs(turns[best]-angle)?i:best,0);root.dataset.activeCapability=String(active);
   const viewport=root.getBoundingClientRect();const visible=viewport.top<innerHeight&&viewport.bottom>72;if(wheelAngle===null||!visible)wheelAngle=angle;else if(Math.abs(angle-wheelAngle)>=8){playWheelDetent(Math.sign(angle-wheelAngle),Math.min(1,Math.abs(angle-wheelAngle)/20));wheelAngle=angle;}
   set($('8404:26636'),{rotate:`${angle}deg`});set($('8404:26641'),{rotate:`${angle}deg`,transformOrigin:'50% 55.5%'});
   const weight=(i:number)=>Math.max(0,1-Math.abs(angle/90-i));
   const track=$('8404:26606');const item=$('8404:26607');const step=item?.offsetHeight||236;
   set(track,{transform:`translate3d(0,${-angle/90*step}px,0)`});
   [26607,26614,26621,26628].forEach((id,i)=>{const row=$(`8404:${id}`),w=weight(i);set(row,{opacity:String(.16+.84*w),filter:`blur(${2.2*(1-w)}px)`,transition:'none'});if(row){row.setAttribute('aria-current',String(i===active));}});
   [26645,26646,26647,26648].forEach((id,i)=>{const icon=$(`8404:${id}`);set(icon,{opacity:'1',filter:'none',transition:'none'});set(icon?.querySelector('img')??null,{filter:i===active?'brightness(0) invert(1)':'none'})});
  }
  if(kind==='merge'){
   const enter=phase(p,0,.28),merge=phase(p,.48,.88);const result=$('8404:26667');const target=result?.offsetTop||650;
   set(result,{transform:`translate3d(0,${-Math.max(0,target-140)*merge}px,0)`,opacity:String(.6+.4*phase(p,.25,.75))});
   if(p<.43)mergeSoundArmed=true;
   const photos=$('8404:26651');if(result&&photos){const zoom=root.getBoundingClientRect().width/root.offsetWidth||1;const edge=(result.getBoundingClientRect().top-photos.getBoundingClientRect().top)/zoom;set(photos,{clipPath:`polygon(-200px -200px,calc(100% + 200px) -200px,calc(100% + 200px) ${edge}px,-200px ${edge}px)`})}
   [26652,26660].forEach((id,i)=>{const el=$(`8404:${id}`);set(el,{transform:`translate3d(${(i?1:-1)*(140*(1-enter)-110*merge)}px,${(target-150)*merge}px,0) scale(${1-merge*.38})`,opacity:String(enter),visibility:'visible',pointerEvents:merge>0?'none':'auto'});if(el&&result&&merge>0&&el.getBoundingClientRect().top>=result.getBoundingClientRect().top){set(el,{opacity:'0',visibility:'hidden',pointerEvents:'none'})}});
   const entering=$('8404:26652');if(mergeSoundArmed&&p>lastMergeProgress&&merge>0&&result&&entering){const panel=result.getBoundingClientRect(),card=entering.getBoundingClientRect();if(card.bottom>=panel.top&&panel.top<innerHeight&&panel.bottom>0){playMergeWhoosh();mergeSoundArmed=false}}lastMergeProgress=p;
   set($('8404:26659'),{opacity:String(enter*(1-phase(p,.45,.7)))});set($('8404:26666'),{opacity:String(enter*(1-phase(p,.55,.76)))});
   set(result,{transform:`translate3d(0,${-Math.max(0,target-140)*merge}px,0)`,opacity:String(.6+.4*phase(p,.25,.75))});
  }
  if(kind==='programmes'){
   set($('8404:26728'),{opacity:String(phase(p,.31,.45))});
   const row=$('8404:26733');if(row){const cards=Array.from(row.children) as HTMLElement[];const overflow=Math.max(0,cards.reduce((n,c)=>n+c.offsetWidth,0)+30*(cards.length-1)-row.clientWidth);cards.forEach((card,i)=>{const entry=phase(p,i*.045,.16+i*.045);set(card,{transform:`translate3d(${-overflow*phase(p,.48,.92)}px,${30*(1-entry)}px,0)`,opacity:String(entry)})})}
  }
  if(kind==='assessment'){
   const browser=root.querySelector<HTMLElement>('.assessment-browser');const stack=root.querySelector<HTMLElement>('.assessment-stack');const expansion=phase(p,.28,.69);const gutter=parseFloat(getComputedStyle(root).getPropertyValue('--page-gutter'))||84;const full=Math.min(1200,root.clientWidth-2*gutter);if(browser&&stack){set(stack,{width:`${716+(full-716)*expansion}px`,position:'relative',zIndex:'3'});set(browser,{width:'100%'});browser.style.setProperty('--assessment-support-width',`${full*.4*expansion}px`);browser.style.setProperty('--assessment-support-opacity',String(phase(p,.43,.69)));browser.style.setProperty('--assessment-support-shift',`${24*(1-phase(p,.43,.69))}px`);const zoom=root.getBoundingClientRect().width/root.offsetWidth||1;const nav=document.querySelector('.desktop-nav-surface')?.getBoundingClientRect().height||72;const available=(innerHeight-nav)/zoom;const centredTop=Math.max(24,(available-stack.offsetHeight)/2);set(stack,{transform:`translate3d(0,${(centredTop-stack.offsetTop)*expansion}px,0)`});set(browser,{boxShadow:`0 ${12+20*expansion}px ${30+50*expansion}px #002b7914`,zIndex:'3',position:'relative'})}
   root.querySelectorAll<HTMLElement>(':scope>h2,:scope>p,:scope>.assessment-label').forEach(el=>set(el,{opacity:String(1-phase(p,.25,.48)),transform:`translateY(${-30*expansion}px)`}));
  }
  if(kind==='chevron'){
   const opening=phase(p,.72,.98);const shape=$('8404:26806');set(shape,{clipPath:`polygon(0 0,100% 0,100% 100%,50% ${100-22*opening}%,0 100%)`});
   const heading=$('8404:26807');set(heading,{opacity:'1',transform:'none'});root.querySelectorAll<HTMLElement>('[data-cinematic-sentence]').forEach((sentence,i)=>{const t=phase(p,.03+i*.28,.23+i*.28);set(sentence,{opacity:String(t),transform:`translate3d(0,${24*(1-t)}px,0)`,filter:`blur(${6*(1-t)}px)`})});

  }
 };
 render(progress.get());const stop=progress.on('change',render);const observer=kind==='assessment'?new ResizeObserver(()=>render(progress.get())):null;const stack=root.querySelector('.assessment-stack');if(observer&&stack)observer.observe(stack);return()=>{stop();observer?.disconnect();originals.forEach((style,node)=>node.setAttribute('style',style));delete root.dataset.activeCapability};
 },[kind,progress]);return ref;
}
