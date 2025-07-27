import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export function useGsap(ref, animationFn, deps = []) {
  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const timeline = animationFn(el, gsap);

    return () => {
      if (timeline && timeline.kill) {
        timeline.kill();
      }
    };
  }, deps);
}
