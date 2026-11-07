import { chromium } from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'chrome',headless:true});
async function contextFor({mobile=false,reduce=false,saveData=false,effectiveType='4g',blocked=false,denyPlay=false}={}){
 const context=await browser.newContext({viewport:{width:mobile?390:1440,height:1000},reducedMotion:reduce?'reduce':'no-preference'});
 await context.addInitScript(({saveData,effectiveType,denyPlay})=>{const connection=new EventTarget();Object.assign(connection,{saveData,effectiveType,downlink:10});Object.defineProperty(navigator,'connection',{value:connection,configurable:true});if(denyPlay)HTMLMediaElement.prototype.play=()=>Promise.reject(new DOMException('Playback disabled','NotAllowedError'))},{saveData,effectiveType,denyPlay});
 const page=await context.newPage();const requests=[];page.on('request',r=>{if(r.url().includes('/assets/video/'))requests.push(r.url())});
 if(blocked)await page.route('**/assets/video/**',r=>r.abort());
 await page.goto('http://127.0.0.1:4174');return {context,page,requests};
}
for(const mode of [{saveData:true},{reduce:true},{effectiveType:'3g'}]){
 const {context,page,requests}=await contextFor(mode);await page.waitForTimeout(1800);assert.equal(requests.length,0);assert.equal(await page.locator('.desktop-page video').getAttribute('src'),null);console.log('No video download:',mode);await context.close();
}
for(const mobile of [false,true]){
 const {context,page,requests}=await contextFor({mobile});const video=page.locator(mobile?'.mobile-page video':'.desktop-page video');await page.waitForFunction(sel=>document.querySelector(sel)?.dataset.videoState==='playing',mobile?'.mobile-page video':'.desktop-page video');
 const props=await video.evaluate(v=>({muted:v.muted,loop:v.loop,inline:v.playsInline,paused:v.paused,duration:v.duration,src:v.currentSrc,ready:v.readyState}));assert.equal(props.muted,true);assert.equal(props.loop,true);assert.equal(props.inline,true);assert.equal(props.paused,false);assert.ok(props.src.includes(mobile?'540p':'1080p'));assert.ok(requests.every(r=>r.includes(mobile?'540p':'1080p')));
 await video.evaluate(v=>{v.currentTime=v.duration-.3});await page.waitForTimeout(1000);assert.ok(await video.evaluate(v=>v.currentTime<2&&!v.paused));console.log('Autoplay, muted, loop seam, correct resolution:',mobile?'mobile':'desktop',props);
 await page.screenshot({path:`qa/hero-video-${mobile?'mobile':'desktop'}.png`});await page.evaluate(()=>scrollTo({top:2000,behavior:'instant'}));await page.waitForTimeout(300);assert.ok(await video.evaluate(v=>v.paused));console.log('Pauses off screen');await context.close();
}
for(const opts of [{blocked:true},{denyPlay:true}]){
 const {context,page}=await contextFor(opts);await page.waitForTimeout(1800);const v=page.locator('.desktop-page video');assert.equal(await v.getAttribute('data-video-state'),'fallback');assert.equal(await v.getAttribute('src'),null);assert.equal(await v.evaluate(e=>e.classList.contains('is-playing')),false);console.log('Poster fallback:',opts);await context.close();
}
await browser.close();
