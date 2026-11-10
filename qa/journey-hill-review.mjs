import {chromium} from 'playwright';import fs from 'node:fs';
const browser=await chromium.launch({channel:'chrome',headless:true});const results=[];
for(const width of [1440,390]){
 const p=await browser.newPage({viewport:{width,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto('http://localhost:4176/',{waitUntil:'networkidle'});const target=p.locator(width===1440?'.desktop-page .journey-continuation':'.mobile-page .m-journey-continuation');await target.scrollIntoViewIfNeeded();await p.waitForTimeout(1500);
 const position=async top=>{const y=await target.evaluate(n=>n.getBoundingClientRect().top+scrollY);await p.evaluate(({y,top})=>window.scrollTo({top:y-top,behavior:'instant'}),{y,top});await p.waitForTimeout(900);return target.locator('svg>path').getAttribute('d')};
 const flat=await position(720);await p.screenshot({path:`qa/hill-flat-${width}.png`});const raised=await position(140);await p.screenshot({path:`qa/hill-raised-${width}.png`});const reverse=await position(720);
 results.push({width,flat,raised,reverse,changes:flat!==raised,reverses:Math.abs(+flat.match(/Q720 ([\d.]+)/)[1]-+reverse.match(/Q720 ([\d.]+)/)[1])<3,errors,overflow:await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth)});await p.close();
}
const p=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});await p.goto('http://localhost:4176/');await p.locator('.mobile-page .m-journey-continuation').scrollIntoViewIfNeeded();await p.waitForTimeout(100);results.push({reducedMotion:await p.locator('.mobile-page .m-journey-continuation svg>path').getAttribute('d')});await browser.close();fs.writeFileSync('qa/journey-hill-results.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
