import {useRef} from 'react';
import {motion,useInView,useReducedMotion} from 'motion/react';
const lines=['Training builds skills. Consulting delivers outcomes.','Systems make them repeatable. ADC makes them one engine.'];
export default function CinematicStatement({scrollDriven=false}:{scrollDriven?:boolean}){
 const ref=useRef<HTMLDivElement>(null);const seen=useInView(ref,{once:true,amount:.85,margin:'0px 0px -25% 0px'});const reduced=useReducedMotion();
 return <div ref={ref} className="cinematic-statement" data-motion-native>{lines.map((text,index)=><p key={text}>{scrollDriven?<span data-cinematic-sentence={index}>{text}</span>:<motion.span initial={reduced?false:{opacity:0,y:20,filter:'blur(6px)'}} animate={{opacity:seen||reduced?1:0,y:seen||reduced?0:20,filter:seen||reduced?'blur(0px)':'blur(6px)'}} transition={{duration:reduced?0:1.1,delay:reduced?0:index*1.05,ease:[.22,1,.36,1]}}>{text}</motion.span>}</p>)}</div>
}
