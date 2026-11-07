import{chromium}from'playwright';import assert from'node:assert/strict';
const browser=await chromium.launch({channel:'chrome',headless:true});const page=await browser.newPage({reducedMotion:'reduce'});const failures=[];page.on('pageerror',e=>failures.push(e.message));
for(const width of [1920,1440,1280,390]){
 await page.setViewportSize({width,height:1000});await page.goto('http://127.0.0.1:4174');await page.evaluate(()=>document.fonts.ready);
 assert.equal(await page.evaluate(()=>document.body.scrollWidth),width);
 if(width>=1024){
  for(const id of ['#connected','#work-with-us']){const rect=await page.locator(id).boundingBox();assert.equal(Math.round(rect.width),width);assert.equal(Math.round(rect.x),0)}
  const connected=await page.locator('#connected').boundingBox();const labels=await page.locator('[data-node-id="8429:28114"]').boundingBox();assert.ok(labels.y+labels.height<=connected.y+connected.height);assert.ok(Math.abs((labels.x+labels.width/2)-width/2)<1);
  const title=await page.locator('[data-name="Title / Capability in balance"]').boundingBox();assert.ok(Math.abs(title.x+title.width/2-width/2)<1);
  const track=await page.locator('[data-name="Horizontal insights carousel"]').boundingBox();assert.ok(Math.abs(track.x-84)<1);assert.ok(Math.abs(width-track.x-track.width-84)<1);
  const third=await page.locator('[data-name="Insight 3"]').boundingBox();assert.ok(Math.abs(width-third.x-third.width-84)<2,`third card right gutter ${width-third.x-third.width}`);
  const cta=await page.locator('[data-node-id="8489:25738"]').boundingBox();assert.ok(Math.abs(cta.x+cta.width/2-width/2)<1);
  if(width===1440||width===1920){for(const id of ['connected','insights','work-with-us','capability']){await page.locator('#'+id).scrollIntoViewIfNeeded();await page.locator('#'+id+' img').evaluateAll(imgs=>Promise.all(imgs.map(i=>{i.loading='eager';return i.decode().catch(()=>{})})));await page.locator('#'+id).screenshot({path:`qa/frame-${id}-${width}.png`})}}
 }
 console.log(width,'viewport, symmetric margins, complete labels and CTA passed');
}
assert.deepEqual(failures,[]);await browser.close();
