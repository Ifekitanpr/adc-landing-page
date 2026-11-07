import {Fragment,useRef} from 'react';
import {motion,useInView,useReducedMotion} from 'motion/react';
export default function RevealWords({text,pace=.025,cinematic=false,highlight}:{text:string;pace?:number;cinematic?:boolean;highlight?:string}){
 const ref=useRef<HTMLSpanElement>(null);const seen=useInView(ref,{once:true,amount:.2});const reduced=useReducedMotion();const words=(highlight?text.replace(highlight,highlight.replaceAll(' ','\u00a0')):text).split(' ');
 return <span ref={ref} className="word-reveal" style={cinematic?{perspective:800}:undefined}>{words.map((word,i)=><Fragment key={i}><span className="reveal-word-clip"><motion.span className={highlight&&word.replaceAll('\u00a0',' ')===highlight?'hero-top-highlight':undefined} initial={reduced?false:cinematic?{y:25,rotateX:-90,rotateZ:3,opacity:0}:{y:'110%'}} animate={cinematic?{y:seen||reduced?0:25,rotateX:seen||reduced?0:-90,rotateZ:seen||reduced?0:3,opacity:seen||reduced?1:0}:{y:seen||reduced?'0%':'110%'}} transition={{duration:reduced?0:cinematic?1.3:.8,delay:reduced?0:i*pace,ease:[.22,1,.36,1]}}>{word}</motion.span></span>{i<words.length-1?' ':null}</Fragment>)}</span>
}
