import {useRef} from 'react';
import {motion,useReducedMotion,useTransform,type MotionValue} from 'motion/react';
import CinematicStatement from '../motion/CinematicStatement';
import {playCardLanding} from '../motion/brandAudio';
import {useJourneyHill} from '../motion/useJourneyHill';
const labels=['Applied','Measured','Credentialed','Connected'];
function TerrainPill({index,rise}:{index:number;rise:MotionValue<number>}){
 const reduced=useReducedMotion();
 // Normalized contact points on the two slopes, with the inner pills nearer the crest.
 const factor=[.55,.86,.86,.55][index],side=index<2?-1:1;
 const y=useTransform(rise,h=>-14-h*factor);
 const rotate=useTransform(rise,h=>side*Math.atan(h/720)*180/Math.PI);
 const x=useTransform(rise,h=>side*(1-h/144)*14);
 return <motion.div className="journey-terrain-pill" style={{x,y,rotate}}><motion.div initial={reduced?false:{opacity:0,y:-80,rotate:side*10}} whileInView={{opacity:1,y:0,rotate:0}} viewport={{once:true,amount:.2}} transition={{type:'spring',stiffness:105,damping:11,mass:1,delay:index*.18}} onAnimationComplete={()=>{if(!reduced)playCardLanding(index,180)}}><span>{labels[index]}</span></motion.div></motion.div>
}
export default function JourneyContinuation(){
 const ref=useRef<HTMLDivElement>(null);const {rise,path,viewBox}=useJourneyHill(ref);
 return <div ref={ref} className="journey-continuation" data-node-id="8404:26805" data-motion-native><svg className="journey-chevron journey-hill-surface" viewBox={viewBox} preserveAspectRatio="none" data-node-id="8404:26806" aria-hidden="true"><motion.path d={path} fill="white"/></svg><div className="journey-statement" data-node-id="8404:26807"><CinematicStatement/></div><div className="journey-pills" data-node-id="8429:28114">{labels.map((text,i)=><TerrainPill key={text} index={i} rise={rise}/>)}</div></div>
}
export function MobileJourneyContinuation(){
 const ref=useRef<HTMLElement>(null);const {rise,path,viewBox}=useJourneyHill(ref,64);
 const drift=useTransform(rise,h=>-h*.12);
 return <section ref={ref} className="m-section m-connected m-journey-continuation" data-motion-native><svg className="journey-chevron journey-hill-surface" viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true"><motion.path d={path} fill="white"/></svg><div className="m-connected-copy"><CinematicStatement/></div><motion.div className="m-pills" style={{y:drift}}>{labels.map((text,i)=><motion.span key={text} initial={{opacity:0,y:-42,rotate:i%2?8:-8}} whileInView={{opacity:1,y:0,rotate:0}} viewport={{once:true,amount:.4}} transition={{type:"spring",stiffness:110,damping:12,delay:i*.14}}>{text}</motion.span>)}</motion.div></section>
}
