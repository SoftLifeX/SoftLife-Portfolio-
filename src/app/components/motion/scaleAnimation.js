export const scaleAnimation = {
  initial: { scale: 0, opacity: 0 }, // when it first mounts
  enter: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};
