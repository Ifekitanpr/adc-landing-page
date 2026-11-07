import { useEffect, useRef } from 'react';

interface NetworkConnection extends EventTarget {
  saveData?: boolean;
  effectiveType?: string;
  downlink?: number;
}

const defaultPoster = '/assets/figma/8404-26515-imgBackgroundAdcFlowingFabric.webp';

/** Decorative video is an enhancement: the original image remains underneath. */
export default function HeroBackgroundVideo({poster=defaultPoster}:{poster?:string}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & { connection?: NetworkConnection }).connection;
    let visible = false;
    let started = false;
    let failed = false;
    let disposed = false;
    let deadline: number | undefined;
    let idle: number | undefined;

    const clearDeadline = () => window.clearTimeout(deadline);
    const reveal = (show: boolean) => video.classList.toggle('is-playing', show);
    const cancelIdle = () => {
      if (idle !== undefined) {
        if (typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(idle);
        else window.clearTimeout(idle);
        idle = undefined;
      }
    };
    const release = () => {
      cancelIdle();
      clearDeadline();
      reveal(false);
      video.pause();
      if (started) {
        started = false;
        video.removeAttribute('src');
        video.load();
      }
      video.dataset.videoState = 'fallback';
    };
    const fail = () => {
      if (disposed || failed) return;
      failed = true;
      release();
    };
    const allowed = () => !motion.matches && navigator.onLine &&
      !connection?.saveData &&
      !['slow-2g', '2g', '3g'].includes(connection?.effectiveType ?? '') &&
      !(typeof connection?.downlink === 'number' && connection.downlink < 1.5);
    const armDeadline = () => {
      clearDeadline();
      deadline = window.setTimeout(fail, 6000);
    };
    const play = () => {
      video.muted = true;
      video.play().catch(() => {
        // Pausing for a hidden tab or a breakpoint change can abort play().
        if (!disposed && visible && !document.hidden && started) fail();
      });
    };
    const begin = () => {
      idle = undefined;
      if (disposed || failed || !allowed() || !visible || document.hidden || !video.clientWidth) return;
      if (!started) {
        started = true;
        video.dataset.videoState = 'loading';
        video.src = matchMedia('(max-width: 1023px)').matches
          ? '/assets/video/adc-fabric-loop-540p.mp4'
          : '/assets/video/adc-fabric-loop-1080p.mp4';
        armDeadline();
      }
      play();
    };
    const sync = () => {
      if (disposed || failed) return;
      if (!allowed() || !video.clientWidth) {
        release();
        return;
      }
      if (!visible || document.hidden) {
        cancelIdle();
        clearDeadline();
        video.pause();
        video.dataset.videoState = started ? 'paused' : 'fallback';
        return;
      }
      if (started) play();
      else if (idle === undefined) {
        // Let the heading, poster and other critical content paint first.
        idle = typeof window.requestIdleCallback === 'function'
          ? window.requestIdleCallback(begin, { timeout: 1500 })
          : window.setTimeout(begin, 250);
      }
    };
    const playing = () => {
      if (disposed || failed) return;
      clearDeadline();
      reveal(true);
      video.dataset.videoState = 'playing';
    };
    const waiting = () => {
      if (!started || disposed || failed || document.hidden || !visible) return;
      reveal(false);
      video.dataset.videoState = 'loading';
      armDeadline();
    };
    video.addEventListener('playing', playing);
    video.addEventListener('waiting', waiting);
    video.addEventListener('stalled', waiting);
    video.addEventListener('error', fail);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.01 });
    observer.observe(video);
    motion.addEventListener('change', sync);
    connection?.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    window.addEventListener('online', sync);
    window.addEventListener('offline', sync);
    window.addEventListener('resize', sync);
    return () => {
      disposed = true;
      observer.disconnect();
      video.removeEventListener('playing', playing);
      video.removeEventListener('waiting', waiting);
      video.removeEventListener('stalled', waiting);
      video.removeEventListener('error', fail);
      motion.removeEventListener('change', sync);
      connection?.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      window.removeEventListener('online', sync);
      window.removeEventListener('offline', sync);
      window.removeEventListener('resize', sync);
      release();
    };
  }, []);

  return <video ref={ref} className="hero-background-video" poster={poster}
    autoPlay muted loop playsInline preload="none" disablePictureInPicture
    disableRemotePlayback aria-hidden="true" tabIndex={-1} data-video-state="fallback" />;
}
