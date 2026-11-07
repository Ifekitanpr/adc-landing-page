import {useEffect,useRef,useState} from 'react';
import {motion,AnimatePresence,useInView,useReducedMotion} from 'motion/react';

export function Gauge({value}:{value:number}){
 const ref=useRef<SVGSVGElement>(null);
 const shown=useInView(ref,{once:true,amount:.4});
 const reduced=useReducedMotion();
 return <svg ref={ref} viewBox="0 0 180 100" className="gauge" aria-label={`${value}%`} role="img">
  <path d="M15 90 A75 75 0 0 1 165 90" fill="none" stroke="#e6f2eb" strokeWidth="12" strokeLinecap="round"/>
  <motion.path d="M15 90 A75 75 0 0 1 165 90" pathLength="100" fill="none" stroke="#27945c" strokeWidth="12" strokeLinecap="round" strokeDasharray="100" initial={false} animate={{strokeDashoffset:shown||reduced?100-value:100}} transition={{duration:reduced?0:1.5,ease:[.22,1,.36,1]}}/>
 </svg>
}
const previews=[['/assets/figma/platforms-imgStrategyPreview.webp','Padiworks strategy overview'],['/assets/figma/imgPeopleAndPerformancePreview.webp','Padiworks people and performance overview'],['/assets/figma/imgWorkManagementPreview.webp','Padiworks work management overview']];
export function PadiPreview(){
 const[slide,setSlide]=useState(0);const[paused,setPaused]=useState(false);
 const ref=useRef<HTMLDivElement>(null);const visible=useInView(ref,{amount:.2});const reduced=useReducedMotion();
 useEffect(()=>{if(paused||reduced||!visible)return;const timer=setInterval(()=>setSlide(s=>(s+1)%3),4200);return()=>clearInterval(timer)},[paused,reduced,visible]);
 return <div ref={ref} className="padi-preview" data-motion-native onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)}>
  <AnimatePresence initial={false}><motion.div className="padi-content" key={slide} initial={reduced?false:{opacity:0,y:10,scale:.985}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:reduced?0:-8,scale:1.01}} transition={{duration:reduced?.1:.55,ease:[.22,1,.36,1]}}><img src={previews[slide][0]} alt={previews[slide][1]}/></motion.div></AnimatePresence>
  <div className="product-dots">{['Strategy','People','Work'].map((s,i)=><button key={s} aria-label={`Show ${s} preview`} aria-pressed={slide===i} className={slide===i?'active':''} onClick={()=>setSlide(i)}/>)}</div>
 </div>
}
