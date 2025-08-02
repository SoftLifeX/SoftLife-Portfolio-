import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

let smoother;

export function initSmoother() {
  if (!smoother) {
    gsap.registerPlugin(ScrollSmoother);
    smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
    });
  }
  return smoother;
}

export { smoother };
