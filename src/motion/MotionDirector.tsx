import { useEffect } from 'react';
import { useReducedMotion } from 'motion/react';
import { animate, inView, scroll } from 'motion';

const ease = [0.22, 1, 0.36, 1] as const;
type Reveal = { selector: string; x?: number; y?: number; scale?: number; delay?: number; step?: number; duration?: number };
const chapters: Reveal[] = [
  { selector: '[data-node-id="8404:27052"]', y: 26, duration: .9 },
  { selector: '[data-node-id="8404:27053"]', y: 20, delay: .12 },
  { selector: '[data-node-id="8404:27054"]', y: 14, delay: .22 },
  { selector: '[data-node-id="8404:27057"]', y: 32, scale: 1.025, delay: .18, duration: 1.1 },
  { selector: '[data-node-id="8404:27058"]', x: -14, y: 14, delay: .38 },
  { selector: '[data-name^="Metric /"]', y: 22, step: .09 },
  { selector: '[data-name="Title / Capability in balance"], [data-node-id="8417:27850"]', y: 20 },
  { selector: '[data-name="Copy / Capable People"]', x: -18, y: 0 },
  { selector: '[data-name="Copy / Integrated Systems"]', x: 18, y: 0, delay: .1 },
  { selector: '[data-node-id="8404:26602"]', y: 20 },
  { selector: '[data-node-id="8404:26635"]', y: 16, scale: .965, duration: 1 },
  { selector: '[data-node-id="8404:26606"]>div', x: -18, y: 0, step: .1 },
  { selector: '[data-node-id="8404:26651"]>div:not([data-name="plus-sign"])', y: 26, scale: .985, step: .16, duration: .95 },
  { selector: '[data-node-id="8404:26667"]', y: 28, scale: .985, duration: .95 },
  { selector: '.assessment-section>.assessment-label, .assessment-section>h2, .assessment-section>p', y: 18, step: .07 },
  { selector: '.assessment-browser', y: 28, scale: .99, duration: .85 },
  { selector: '[data-node-id="8404:26730"]', y: 22 },
  { selector: '[data-node-id="8404:26733"]>div', y: 28, step: .09, duration: .85 },
  { selector: '[data-name="Courses / Heading and introduction"]>*', y: 18, step: .08 },
  { selector: '[data-name="Courses / All six course cards"]>div', y: 26, scale: .99, step: .07 },
  { selector: '[data-node-id="8404:26807"]', y: 18 },
  { selector: '[data-node-id="8429:28114"]>div', y: 16, step: .1 },
  { selector: '[data-node-id="8404:26812"], [data-node-id="8404:26818"]', y: 20, step: .1 },
  { selector: '[data-node-id="8404:26823"], [data-node-id="8404:26829"], [data-node-id="8404:26835"]', x: 22, y: 0, step: .12 },
  { selector: '#services [data-name="Section heading"]>*', y: 18, step: .08 },
  { selector: '#services [data-name^="Capability row"]>div', y: 20, step: .07 },
  { selector: '[data-name="Track record introduction"]>*', y: 18, step: .07 },
  { selector: '[data-name="Editorial heading"]>*, [data-name="Introduction"]', y: 16, step: .07 },
  { selector: '[data-name^="Impact story "]', y: 22, step: .09 },
  { selector: '[data-name="Title and supporting copy"]>*', y: 20, step: .08 },
  { selector: '[data-name^="Insight "]', y: 24, step: .09 },
  { selector: '[data-node-id="8489:25736"], [data-node-id="8489:25738"], [data-node-id="8489:25739"], [data-name="Diagnostic and learning actions"]', y: 22, step: .1, duration: .85 },
  { selector: '[data-name="Footer link groups and subscription"]>div', y: 18, step: .07 },
  { selector: '.m-hero>h1, .m-hero>p, .m-hero>.m-actions, .m-workshop, .m-free-course', y: 20, step: .08 },
  { selector: '.m-section>h2, .m-section>p, .m-section>small, .m-capability, .m-programmes article, .m-horizontal>article, .m-step, .m-services-list article, .m-track-grid>div, .m-footer-links>div', y: 18, step: .065 },
];

/** Progressive enhancement for the imported, editable Figma markup. */
export default function MotionDirector() {
  const reduced = useReducedMotion();
  useEffect(()=>{const header=document.querySelector('.desktop-sticky-header');const update=()=>{const hero=document.querySelector('[data-node-id="8404:27044"]');const height=document.querySelector('.desktop-nav-surface')?.getBoundingClientRect().height||72;header?.classList.toggle('is-scrolled',!hero||hero.getBoundingClientRect().bottom<=height);header?.classList.toggle('has-hero-glass',window.scrollY>16&&!!hero&&hero.getBoundingClientRect().bottom>height);};window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update);};},[]);
  useEffect(() => {
    const root = document.querySelector('main');
    if (!root) return;
    // Interaction affordances remain available even when movement is reduced.
    root.querySelectorAll<HTMLElement>('[data-name="Button"], [data-name="View course"], [data-name*="Primary CTA"], [data-name*="Discover more insights"], [data-name="Book a free diagnostic"], [data-name="Start Innovation Foundations free"], .m-button, .assessment-result>button, .newsletter-wrap>button').forEach(el=>el.classList.add('motion-button'));
    root.querySelectorAll<HTMLElement>('[data-name="Nav Link"], [data-name*="Navigation /"], #footer [data-action="scroll"], #footer [data-action="contact"], #footer [data-name="[ LEARN ]"]>p:not(:first-child), #footer [data-name="[ CONSULTING ]"]>p:not(:first-child), #footer [data-name="[ PLATFORMS ]"]>p:not(:first-child), .m-header nav a, .m-footer-links a, .m-legal button').forEach(el=>el.classList.add('motion-link'));
    root.querySelectorAll<HTMLElement>('.motion-button').forEach(node=>{const rgb=getComputedStyle(node).backgroundColor.match(/[\d.]+/g)?.map(Number)||[];node.classList.add(rgb[3]===0?'button-outline':rgb[0]>180&&rgb[1]>180?'button-light':'button-primary')});
    if (reduced || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const registered = new WeakSet<Element>();
    const hovered = new WeakSet<Element>();
    const cleanups: (() => void)[] = [];
    const animations = new Set<ReturnType<typeof animate>>();
    const originals = new Map<HTMLElement, { opacity: string; transform: string }>();
    let scanFrame = 0;
    const track = (control: ReturnType<typeof animate>) => {
      animations.add(control);
      control.then(() => animations.delete(control));
      return control;
    };
    const reveal = (node: HTMLElement, settings: Reveal, index: number) => {
      if (registered.has(node) || node.closest('[data-motion-native]')) return;
      registered.add(node);
      originals.set(node, { opacity: node.style.opacity, transform: node.style.transform });
      const finalOpacity=Number(getComputedStyle(node).opacity)||1;
      const x = settings.x ?? 0, y = settings.y ?? 20, scale = settings.scale ?? 1;
      node.dataset.motionReveal = 'pending';
      node.style.opacity = '0';
      node.style.transform = `translate3d(${x}px,${y}px,0) scale(${scale})`;
      cleanups.push(inView(node, () => {
        node.dataset.motionReveal = 'revealing';
        const control = track(animate(node, { opacity: finalOpacity, transform: 'translate3d(0,0,0) scale(1)' }, {
          duration: settings.duration ?? .72,
          delay: (settings.delay ?? 0) + (index % 4) * (settings.step ?? 0), ease,
        }));
        control.then(() => {
          node.dataset.motionReveal = 'complete';
          // Release the transform so hover effects and fixed descendants remain native.
          node.style.transform = originals.get(node)?.transform ?? '';
          node.style.opacity = originals.get(node)?.opacity ?? '';
        });
      }, { amount: .12, margin: '0px 0px -5% 0px' }));
    };
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const buttonSelector = '[data-name="Button"], [data-name="View course"], [data-name*="Primary CTA"], [data-name*="Discover more insights"], [data-name="Book a free diagnostic"], [data-name="Start Innovation Foundations free"], .m-button, .assessment-result>button, .newsletter-wrap>button';
    const attachButton = (node: HTMLElement) => {
      if (hovered.has(node)) return;
      hovered.add(node);
      node.classList.add('motion-button');
      const background=getComputedStyle(node).backgroundColor;
      const rgb=background.match(/[\d.]+/g)?.map(Number)||[];
      const transparent=background==='transparent'||rgb[3]===0;
      node.classList.add(transparent?'button-outline':rgb[0]>180&&rgb[1]>180?'button-light':'button-primary');
    };
    const attachCard = (node: HTMLElement) => {
      if (hovered.has(node)) return;
      hovered.add(node);
      node.classList.add('motion-card');
      if (!fine) return;
      const image = node.parentElement?.dataset.nodeId === '8404:26733' ? node.querySelector<HTMLElement>(':scope>div:last-child img') : node.querySelector<HTMLElement>('[data-name="Course thumbnail"] img, [data-name="Editorial photo"] img, img');
      let movement: ReturnType<typeof animate> | undefined;
      const move = (event: PointerEvent) => {
        if (event.buttons) return;
        const r = node.getBoundingClientRect();
        const x = ((event.clientX-r.left)/r.width-.5)*5;
        const y = ((event.clientY-r.top)/r.height-.5)*4;
        node.style.setProperty('--card-x', `${((event.clientX-r.left)/r.width)*100}%`);
        node.style.setProperty('--card-y', `${((event.clientY-r.top)/r.height)*100}%`);
        if(image){movement?.stop();movement=animate(image,{transform:`translate3d(${x}px,${y}px,0) scale(1.035)`},{type:'spring',stiffness:110,damping:24});}
      };
      const leave = () => {
        movement?.stop();
        if(image)movement=animate(image,{transform:'translate3d(0,0,0) scale(1)'},{type:'spring',stiffness:110,damping:24});
      };
      node.addEventListener('pointermove',move);node.addEventListener('pointerleave',leave);
      cleanups.push(()=>{movement?.stop();if(image)image.style.transform='';node.removeEventListener('pointermove',move);node.removeEventListener('pointerleave',leave)});
    };
    const scan = () => {
      for (const settings of chapters) root.querySelectorAll<HTMLElement>(settings.selector).forEach((el,i)=>reveal(el,settings,i));
      root.querySelectorAll<HTMLElement>(buttonSelector).forEach(attachButton);
      root.querySelectorAll<HTMLElement>('button,a,[role="button"]').forEach(node=>{
        if(node.matches('.skip-link,.capability-focus-item,[role="tab"],.motion-link,[data-name="Nav Link"],.product-dots button')||node.closest('#footer,.m-footer,[data-name="Horizontal insights carousel"],[data-name="Carousel pagination and arrows"],.testimonial-cursor'))return;
        const css=getComputedStyle(node),rgb=css.backgroundColor.match(/[\d.]+/g)?.map(Number)||[];
        const hasFill=rgb.length>=3&&(rgb.length<4||rgb[3]>0);
        const hasBorder=parseFloat(css.borderTopWidth)>0&&css.borderTopColor!=='rgba(0, 0, 0, 0)';
        if(hasFill||hasBorder)attachButton(node);
      });
      root.querySelectorAll<HTMLElement>('[data-node-id="8404:26652"], [data-node-id="8404:26660"], [data-node-id="8404:26733"]>div, [data-name="Courses / All six course cards"]>div, [data-name^="Insight "], .m-programmes article, .m-horizontal>article').forEach(attachCard);
      root.querySelectorAll<HTMLElement>('[data-name="Nav Link"], [data-name*="Navigation /"], #footer [data-action="scroll"], #footer [data-action="contact"], #footer [data-name="[ LEARN ]"]>p:not(:first-child), #footer [data-name="[ CONSULTING ]"]>p:not(:first-child), #footer [data-name="[ PLATFORMS ]"]>p:not(:first-child), .m-header nav a, .m-footer-links a, .m-legal button').forEach(el=>el.classList.add('motion-link'));
    };
    scan();
    const mutations=new MutationObserver(records=>{if(!records.some(r=>Array.from(r.addedNodes).some(n=>n.nodeType===1)))return;cancelAnimationFrame(scanFrame);scanFrame=requestAnimationFrame(scan)});
    mutations.observe(root,{childList:true,subtree:true});
    // Gentle depth only on decorative layers, never on reading text or controls.
    root.querySelectorAll<HTMLElement>('[data-node-id="8404:26728"], [data-node-id="8458:28868"]').forEach(el=>{
      const section=el.closest('section');if(!section)return;
      const animation=animate(el,{transform:['translate3d(0,-16px,0)','translate3d(0,16px,0)']},{ease:'linear'});
      cleanups.push(scroll(animation,{target:section,offset:['start end','end start']}));
      cleanups.push(()=>{animation.cancel();el.style.transform=''});
    });
    // Pause decorative CSS loops when their chapter leaves the viewport.
    const chapterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      entry.target.classList.toggle('motion-chapter-visible',entry.isIntersecting);
    }));
    root.querySelectorAll('#home,#capability,#programmes,#catalyst,#testimonials,#work-with-us').forEach(el=>chapterObserver.observe(el));
    return()=>{
      mutations.disconnect();chapterObserver.disconnect();cancelAnimationFrame(scanFrame);
      cleanups.forEach(stop=>stop());animations.forEach(control=>control.cancel());
      originals.forEach((style,node)=>{node.style.opacity=style.opacity;node.style.transform=style.transform;delete node.dataset.motionReveal});
    };
  },[reduced]);
  return null;
}
