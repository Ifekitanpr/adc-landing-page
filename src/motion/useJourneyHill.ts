import {useLayoutEffect,useState,type RefObject} from 'react';
import {useMotionValue,useReducedMotion,useScroll,useSpring,useTransform} from 'motion/react';
/** Reversible terrain motion driven by native scrolling, without pinning the section. */
export function useJourneyHill(target:RefObject<HTMLElement|null>,height=144){
 const reduced=useReducedMotion();
 const [surfaceHeight,setSurfaceHeight]=useState(380);
 useLayoutEffect(()=>{const node=target.current;if(!node)return;const update=()=>setSurfaceHeight(node.offsetHeight);const observer=new ResizeObserver(update);observer.observe(node);update();return()=>observer.disconnect()},[target]);
 const {scrollYProgress}=useScroll({target,offset:['start 90%','end 15%']});
 const smooth=useSpring(scrollYProgress,{stiffness:90,damping:27,mass:.65});
 const staticRise=useMotionValue(height);
 const animatedRise=useTransform(smooth,[.12,.82],[0,height]);
 const rise=reduced?staticRise:animatedRise;
 const path=useTransform(rise,h=>`M0 0H1440V${surfaceHeight}L800 ${surfaceHeight-h+h*.12}Q720 ${surfaceHeight-h-h*.12} 640 ${surfaceHeight-h+h*.12}L0 ${surfaceHeight}Z`);
 return{rise,path,viewBox:`0 0 1440 ${surfaceHeight}`};
}
