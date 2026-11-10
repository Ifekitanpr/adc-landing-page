import {chromium} from 'playwright';
import fs from 'node:fs';
const browser=await chromium.launch({headless:true,channel:"chrome"});const reports=[];
for(const width of [1440,768,390,320]){
 const page=await browser.newPage({viewport:{width,height:width>=1200?1000:844},reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));const failed=[];page.on('response',r=>{if(r.status()>=400)failed.push([r.status(),r.url()])});
 await page.goto('http://127.0.0.1:4176/',{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 const root=page.locator(width>=1200?'.desktop-page':'.mobile-page');
 await page.screenshot({path:`qa/review-home-${width}.png`});
 const programme=root.locator('.programme-explorer');await programme.scrollIntoViewIfNeeded();const categories=[];
 for(const name of ['Popular','Innovation Practice','Innovation Leadership','Workshops','Executive Academy','Bootcamps']){await programme.getByRole('tab',{name,exact:true}).click();await page.waitForTimeout(120);categories.push({name,count:await programme.locator('.programme-card').count(),width:await programme.locator('.programme-card').first().evaluate(n=>n.getBoundingClientRect().width)});}
 await programme.screenshot({path:`qa/review-programmes-${width}.png`});
 await programme.getByRole('tab',{name:'Popular',exact:true}).click();
 const platformTab=root.getByRole('tab',{name:'ADC Platforms',exact:true});await platformTab.scrollIntoViewIfNeeded();await platformTab.click();await page.waitForTimeout(150);
 const platforms=await root.locator(width>=1200?'#node-8436_25419>div':'.m-platforms>article').count();
 if(width>=1200){await root.locator('#services').screenshot({path:'qa/review-platforms-1440.png'});await root.locator('#capability').screenshot({path:'qa/review-balance-1440.png'});await root.locator('#experience').screenshot({path:'qa/review-journey-1440.png'});await root.locator('#assessments').screenshot({path:'qa/review-assessments-1440.png'});}else if(width===390){await root.locator('#m-assessments').screenshot({path:'qa/review-assessments-390.png'});await root.locator('.m-balance').screenshot({path:'qa/review-balance-390.png'});await root.locator('.m-journey-continuation').screenshot({path:'qa/review-journey-390.png'});}
 const data=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,entry:!!document.querySelector('.entry-experience'),inert:document.querySelector('main').inert}));reports.push({width,...data,categories,platforms,errors,failed});await page.close();
}
await browser.close();fs.writeFileSync('qa/homepage-review-results.json',JSON.stringify(reports,null,2));console.log(JSON.stringify(reports,null,2));
