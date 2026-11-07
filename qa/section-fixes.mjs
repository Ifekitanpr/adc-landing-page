import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-webgl','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const page=await browser.newPage();const errors=[];
page.on('pageerror',e=>errors.push(e.message));
for(const width of [1920,1440,1280,390]){
  await page.setViewportSize({width,height:1000});
  await page.goto('http://127.0.0.1:4174');
  await page.evaluate(()=>document.fonts.ready);
  await page.waitForTimeout(400);
  assert.equal(await page.locator('[data-node-id="8417:27848"]').count(),0);
  assert.equal(await page.evaluate(()=>document.body.scrollWidth),width);
  if(width>=1024){
    for(const name of ['Editorial section heading','Proof heading']){
      const r=await page.locator(`[data-name="${name}"]`).boundingBox();
      assert.ok(Math.abs(r.x-84)<1,`${name} left ${r.x}`);
      assert.ok(Math.abs(width-r.x-r.width-84)<1,`${name} right ${width-r.x-r.width}`);
    }
    const blue=await page.locator('[data-name="ADC blue / track record panel"]').boundingBox();
    assert.ok(Math.abs(blue.x+blue.width-width)<1);
    const course=await page.locator('[data-name="Courses / Rounded blue panel"]').boundingBox();
    assert.ok(course.x>=0);assert.ok(course.width>width*.9);
    const last=await page.locator('[data-node-id="8404:26733"]>div').last().boundingBox();
    assert.ok(last.x+last.width>width);
    if(width===1920){
      for(const id of ['courses','track-record','testimonials','insights','experience','programmes'])
        await page.locator('#'+id).screenshot({path:`qa/fixed-${id}.png`});
    }
  }
  console.log(width,'margins, clipping, and full section checks passed');
}
console.log({errors});assert.equal(errors.length,0);
await page.setViewportSize({width:1440,height:1100});await page.goto('http://127.0.0.1:4174');
await page.waitForTimeout(1500);
console.log('liquid',await page.locator('.desktop-page .hero-liquid').evaluate(e=>({opacity:getComputedStyle(e).opacity,width:e.width,height:e.height,webgl:!!e.getContext('webgl')})));
await page.screenshot({path:'qa/liquid-hero.png'});
await page.emulateMedia({reducedMotion:'reduce'});
assert.equal(await page.locator('.desktop-page .hero-liquid').evaluate(e=>getComputedStyle(e).display),'none');
await browser.close();
