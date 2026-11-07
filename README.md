# ADC landing page

A separate React + TypeScript + Vite implementation of the approved [ADC Figma page](https://www.figma.com/design/Oumq2woD0IFEqRzTGAWvOx/ADC-Landing-pages?node-id=8404-26513). The enterprise project is unchanged.

## Run

```sh
cd adc-landing-page
npm install
npm run dev
```

Local preview: http://127.0.0.1:4174

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4174
```

## Implemented

All 16 page sections, the approved ADC colors and local Eina04/Poppins fonts, responsive desktop/tablet/mobile layouts, assessment audience tabs and search, Consulting/Platforms tabs, step-by-step workflow reveals, animated rounded readiness gauges, a three-state Padiworks carousel, draggable testimonials and course cards, an automatic client-logo marquee, insights navigation, mobile navigation, accessible review dialogs and newsletter email validation. Reduced-motion preferences disable automatic decorative motion.

The header uses **Start your diagnostic**, reflecting the immediate-assessment decision. The footer uses **© 2023–2026 Agile Digital College**.

`src/sections/` preserves the Figma section structure and node identifiers for tracing visual details. `src/figma.css` contains the converted source layout rules; `styles.css` handles interactions and desktop refinements. `MobilePage.tsx` and `mobile.css` adapt the same content to smaller screens. Downloaded raster artwork is served as optimized WebP; original files and design extracts are retained in `design-reference/`.

## Motion direction

Motion for React (formerly Framer Motion) drives the website's interactive motion. The existing hero video stays intact; there is no scroll hijacking or timed page advancement.

- `src/motion/MotionDirector.tsx`: one-time, section-specific entrances with 65–160ms stagger, 0.7–1.1s settling, and restrained decorative parallax. Completed entrances release their transform and restore the original design opacity.
- `src/motion/RevealWords.tsx`: clipped word reveals for the hero and closing headline.
- `src/motion/motion.css`: pointer-led button highlights, spring-following labels, gentle image movement, testimonial reply accents, editorial image corner transitions, and nav/footer link underlines.
- `src/sections/S7.tsx`: native Motion SVG path drawing, staged markers and captions. The third number now has approximately 41px of top clearance.
- Assessments and service tabs use shared-layout active pills; product previews crossfade; gauges draw on entry; dialogs enter and exit with focus handling intact.
- Fine-pointer effects are disabled for touch. Reduced-motion preferences keep content fully visible and disable travel, parallax and decorative loops. Offscreen marquees, pendulums, previews and hero video pause.
- Motion and React are separate production chunks for caching and to keep the initial application chunk smaller.

Run `node qa/motion-pass.mjs` against the local dev server to verify entrances, spacing above the third number, hover states, tab transitions, dialogs, mobile navigation and reduced-motion behavior. The implementation follows the official [Motion animation](https://motion.dev/docs/react-animation), [in-view](https://motion.dev/docs/inview) and [scroll](https://motion.dev/docs/scroll) APIs.

## Hero background video

`src/HeroBackgroundVideo.tsx` replaces the earlier WebGL effect with the supplied fabric video. The original is retained in `design-reference/original-media/`. Recreate the optimized files with `python3 design-reference/encode_hero_video.py` (requires FFmpeg).

- Desktop: `public/assets/video/adc-fabric-loop-1080p.mp4` (2.95 MB).
- Mobile: `public/assets/video/adc-fabric-loop-540p.mp4` (365 KB).
- H.264 / yuv420p, 24 fps, fast-start MP4; audio removed entirely.
- A 0.75-second crossfade joins the end to the opening for a continuous 7.17-second loop.
- Muted inline autoplay, no controls or sound; pauses offscreen and in background tabs.
- The approved fabric image remains underneath and is shown until playback starts, on playback/network failure, or if loading stalls for six seconds.
- No video source is assigned for reduced motion, offline mode, or reported data-saving/slow connections. Browsers that do not expose connection information use the image during loading and fall back on timeout or playback failure.
- Only the visible desktop/mobile hero requests its appropriate resolution. Loading waits until critical page content has painted.

Behavior follows [MDN autoplay guidance](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay). Run `node qa/hero-video.mjs` with the local server running to check both resolutions, looping, offscreen pause, playback failure, reduced motion and data-saving fallback.

## Content width

`src/layout.css` defines the shared `--content-max-width: 1272px` token. Section backgrounds fill the viewport while their inner content stays centered and stops growing at this width. Desktop gutters are at least 84px; wider screens add equal space on both sides. Fixed-size testimonial cards and the programme overflow preserve their intentional bleed.

## Production destinations

Copy `.env.example` to `.env.local` and populate the approved destination URLs. Empty destinations show clearly labelled launch-preview dialogs; they do not enrol, authenticate, submit an assessment, or claim a successful enquiry. The primary diagnostic CTA first opens the assessment selector; individual Start for free actions use `VITE_DIAGNOSTIC_URL` when supplied.

`VITE_NEWSLETTER_ENDPOINT` must accept `POST` with JSON `{ "email": "..." }` and return a successful HTTP status only after a subscription succeeds. With no endpoint, the form explicitly states that registration becomes available at launch.

Testimonials, personas, article dates, course counts/ratings, organisation assessment names, and published impact figures are draft design content. Confirm them before publishing. Course and insight pages, the diagnostic itself, authentication, and newsletter service are separate integrations, not implemented backend services in this landing-page project.

## Checks

`npm run build` runs TypeScript and the production build. `node qa/inspect.mjs` runs local browser checks with installed Google Chrome and saves desktop/mobile review screenshots and `qa/report.json`. Start the dev server first.
