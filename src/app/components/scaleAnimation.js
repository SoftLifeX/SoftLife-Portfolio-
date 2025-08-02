export const scaleAnimation = {
  initial: { transform: "scale(0) translate(-50%, -50%)" },
  enter: {
    transform: "scale(1) translate(-50%, -50%)",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    transform: "scale(0) translate(-50%, -50%)",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
