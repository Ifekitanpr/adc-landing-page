# ADC motion implementation

The approved Figma geometry, brand colours and local assets remain the source for presentation. Native vertical scroll controls the scenes; no wheel events are intercepted. Timelines reverse as the user scrolls back. Reduced motion removes pinning and restores the readable source layouts. Live destinations remain configurable.

Reference observations and measurements (7 November 2026):

- Sleep Well Creatives: visually inspected the alternating pendulums and the First Tip composition in the user's Chrome. Public animation definition uses alternating 35-degree outer swings, each lasting 0.85 seconds, with quadratic outward/inward easing. The centre remains still. ADC uses its own patterns. Following the latest review, its silent alternating cycle lasts six seconds with a wider 45-degree arc; rope endpoints extend beyond the crop, and the header hides during this scene.
- First Tip: progressive line with one step taking focus. ADC's path is compacted into a pinned 720px scene, draws across three stages, retains 20% background-number opacity and reveals its ambient circle last.
- Resonance Studio: public homepage interaction definition uses an 800ms testimonial slide transition, 26px desktop gaps, 2.12 slides per view and a following drag cursor. ADC adds a native draggable track, snapping release, keyboard/touch browsing and active-only message colour. Its existing Figma card sizing is retained. The custom track does not clone an infinite loop.
- Resonance global text definition: 1.3-second word entrance with 40ms stagger and X/Z rotation. Applied to the final CTA. Footer signature reveal reverses with scroll.
- 101 GenAI: the public quality/risk Lottie runs at 30fps, with progressively later branches around frames 17, 44 and 79. ADC uses independent native SVG connector paths and staged node entrances at 0.57s, 1.47s and 2.63s.
- Ovata: track-record items use scroll-scrubbed opacity/vertical movement with 0.1 stagger; ADC's metrics use the same reversible stagger concept while retaining the single-row approved layout.
- Shelf: public client code confirms a scroll-shaped clipping path and physics-based floating items. ADC uses a reversible morphing chevron with staggered, spring-smoothed pill movement. This is an adaptation, not an identical physics simulation.

Public reference URLs:
https://sleep-well-creatives.com/
https://www.savetoshelf.com/
https://www.theresonance.studio/
https://www.101gen.ai/
https://www.ovatafunds.com/
https://moniepoint.com/ng/business

Browser host connection remained unavailable during this pass; native Chrome access showed the Sleep Well scenes, while further timing checks used public animation definitions. Do not describe all reference interactions as visually verified or verbatim reproductions.
