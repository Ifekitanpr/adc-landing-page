import {useEffect} from 'react';
import {unlockBrandAudio,recoverBrandAudio,closeBrandAudio} from './brandAudio';
export default function Soundscape(){
 useEffect(()=>{
  // Create/resume synchronously inside a trusted interaction, not during mount.
  const events=['pointerdown','pointerup','touchend','click','keydown'] as const;
  events.forEach(event=>window.addEventListener(event,unlockBrandAudio,{capture:true,passive:true}));
  window.addEventListener('focus',recoverBrandAudio);
  window.addEventListener('pageshow',recoverBrandAudio);
  document.addEventListener('visibilitychange',recoverBrandAudio);
  return()=>{events.forEach(event=>window.removeEventListener(event,unlockBrandAudio,{capture:true}));window.removeEventListener('focus',recoverBrandAudio);window.removeEventListener('pageshow',recoverBrandAudio);document.removeEventListener('visibilitychange',recoverBrandAudio);closeBrandAudio()};
 },[]);return null;
}
