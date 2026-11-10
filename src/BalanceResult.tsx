import {useRef} from 'react';
import {motion,useInView,useReducedMotion} from 'motion/react';
/** The outcome follows the arrival of its people and systems contributors. */
export default function BalanceResult({ready=true,delay=.18,nodeId}:{ready?:boolean;delay?:number;nodeId?:string}){
 const ref=useRef<HTMLDivElement>(null);const seen=useInView(ref,{once:true,amount:.3});const reduced=useReducedMotion();
 return <motion.div ref={ref} className="balance-result" data-node-id={nodeId} data-motion-native data-outcome-state={ready&&seen?'revealed':'waiting'} initial={reduced?false:'hidden'} animate={reduced||ready&&seen?'visible':'hidden'} variants={{hidden:{opacity:0,y:26,filter:'blur(3px)'},visible:{opacity:1,y:0,filter:'blur(0px)',transition:{duration:.9,delay:reduced?0:delay,ease:[.22,1,.36,1],delayChildren:reduced?0:delay+.08,staggerChildren:reduced?0:.14}}}}>
  <motion.small variants={{hidden:{opacity:0,y:6},visible:{opacity:.65,y:0,transition:{duration:.5}}}}>THE RESULT</motion.small>
  <motion.h3 variants={{hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.75,ease:[.22,1,.36,1]}}}}>Measurable Breakthrough<br/>Performance</motion.h3>
  <motion.p variants={{hidden:{opacity:0,y:8},visible:{opacity:.75,y:0,transition:{duration:.7,ease:[.22,1,.36,1]}}}}>New value · AI-enabled productivity<br/>Faster delivery · Sustainable results</motion.p>
 </motion.div>
}
