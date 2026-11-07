import {playCardLanding} from './brandAudio';
import {useEffect,type RefObject} from 'react';
import {useReducedMotion} from 'motion/react';
import {useSceneProgress} from './ScrollScene';
const clamp=(n:number)=>Math.max(0,Math.min(1,n));
/** Four small bodies: gravity, restitution, angular settling and floor friction. */
export function useFallingPills(ref:RefObject<HTMLDivElement|null>){
 const progress=useSceneProgress();const reduced=useReducedMotion();
 useEffect(()=>{const root=ref.current;if(!root||!progress||reduced||!matchMedia('(min-width:1200px)').matches)return;
 const tray=root.querySelector<HTMLElement>('[data-node-id="8429:28114"]');if(!tray)return;const pills=Array.from(tray.children) as HTMLElement[];const originals=pills.map(e=>e.getAttribute('style')||'');
 const offsets=[-60,50,-40,60],velocities=[75,-65,60,-70],tilts=[-14,11,-13,16],rests=[-12,18,-18,14];
 const makeBodies=()=>pills.map((_,i)=>({x:offsets[i],y:-210,vy:0,vx:velocities[i],angle:tilts[i],spin:0,bounces:0,grounded:false}));
 let bodies=makeBodies(),frame=0,last=0,elapsed=0,started=false,hasPlayed=false,latest=progress.get();
 const paint=(i:number,opacity:number)=>{const body=bodies[i],pill=pills[i];pill.style.transform=`translate3d(${body.x}px,${body.y}px,0) rotate(${body.angle}deg)`;pill.style.opacity=String(opacity);pill.dataset.bounces=String(body.bounces)};
 const tick=(now:number)=>{frame=0;if(!started)return;const dt=Math.min((now-(last||now))/1000,1/30);last=now;if(document.hidden){frame=requestAnimationFrame(tick);return}elapsed+=dt;let moving=false;
  bodies.forEach((body,i)=>{const floor=clamp((latest-.72)/.26),floorY=60*(1-floor);const time=elapsed-i*.24;if(time<0){paint(i,0);moving=true;return}
   if(!body.grounded){body.vy+=1300*dt;body.y+=body.vy*dt;body.x+=body.vx*dt;body.angle+=body.spin*dt;
    if(body.y>=floorY){const impactSpeed=Math.abs(body.vy);const bounds=root.getBoundingClientRect();if(impactSpeed>24&&bounds.top<innerHeight&&bounds.bottom>0)playCardLanding(i,impactSpeed);body.y=floorY;body.vy=-body.vy*.38;body.vx*=.65;body.spin+=(i%2?1:-1)*55;body.bounces++;if(Math.abs(body.vy)<18){body.grounded=true;body.vy=0}}
   }
   if(body.grounded)body.y=floorY;const target=rests[i]*floor;
   if(body.bounces){body.vx+=((target-body.x)*24-body.vx*7)*dt;body.x+=body.vx*dt;body.spin+=((-body.angle+(i%2?3:-3))*65-body.spin*12)*dt;body.angle+=body.spin*dt}
   paint(i,clamp(time/.12));if(!body.grounded||Math.abs(body.vx)>.1||Math.abs(body.spin)>.2)moving=true;
  });if(moving&&elapsed<6)frame=requestAnimationFrame(tick);
 };
 const update=(p:number)=>{latest=p;if(root.closest<HTMLElement>('.scroll-scene')?.dataset.scrollEnabled!=='true')return;
  if(p>=.8){if(!started){started=true;hasPlayed=true;elapsed=0;last=0;bodies=makeBodies()}if(!frame){last=0;frame=requestAnimationFrame(tick)}}
  else{cancelAnimationFrame(frame);frame=0;const wasStarted=started;started=false;const t=hasPlayed?clamp((p-.68)/.12):0;if(p<=.68)hasPlayed=false;pills.forEach((pill,i)=>{pill.style.transform=`translate3d(${offsets[i]*(1-t)}px,${-210*(1-t)}px,0) rotate(${tilts[i]*(1-t)}deg)`;pill.style.opacity=String(wasStarted||p>.68?t:0)})}
 };
 update(progress.get());const stop=progress.on('change',update);return()=>{stop();cancelAnimationFrame(frame);pills.forEach((pill,i)=>{pill.setAttribute('style',originals[i]);delete pill.dataset.bounces})};
 },[ref,progress,reduced]);
}
