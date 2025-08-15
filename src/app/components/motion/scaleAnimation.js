export const scaleAnimation = {
  initial: { scale: 0, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
