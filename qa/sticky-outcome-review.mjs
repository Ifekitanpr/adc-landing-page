import {chromium} from 'playwright';
import fs from 'node:fs';
const b=await chromium.launch({headless:true,channel:'chrome'});const report=[];
for(const width of [1440,390]){
 const p=await b.newPage({viewport:{width,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto('http://localhost:4176/',{waitUntil:'networkidle'});
 await p.evaluate(()=>window.scrollTo({top:200,behavior:'instant'}));await p.waitForTimeout(500);
 const root=width===1440?'.desktop-page':'.mobile-page';
 const sticky=await p.locator(root).evaluate(n=>{const a=n.querySelector('.course-announcement').getBoundingClientRect(),nav=n.querySelector('.desktop-nav-surface,.m-header').getBoundingClientRect();return{announcementTop:a.top,announcementBottom:a.bottom,navTop:nav.top,gap:nav.top-a.bottom}});
 await p.screenshot({path:`qa/sticky-stack-${width}.png`});
 const outcome=p.locator(root+' .balance-result');const contributor=p.locator(width===1440?'[data-node-id="8417:27851"]':'.m-columns');const y=await contributor.evaluate(n=>n.getBoundingClientRect().top+scrollY-650);await p.evaluate(y=>window.scrollTo({top:y,behavior:'instant'}),y);await p.waitForTimeout(150);
 const first=await outcome.evaluate(n=>({state:n.dataset.outcomeState,opacity:+getComputedStyle(n).opacity,transform:getComputedStyle(n).transform}));
 await outcome.scrollIntoViewIfNeeded();await p.waitForTimeout(2500);const final=await outcome.evaluate(n=>({state:n.dataset.outcomeState,opacity:+getComputedStyle(n).opacity,transform:getComputedStyle(n).transform}));await p.screenshot({path:`qa/outcome-reveal-${width}.png`});
 await p.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await p.waitForTimeout(300);const retained=await outcome.evaluate(n=>+getComputedStyle(n).opacity);
 report.push({width,sticky,first,final,retained,errors,overflow:await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth)});await p.close();
}
await b.close();fs.writeFileSync('qa/sticky-outcome-results.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
