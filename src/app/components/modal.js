import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { scaleAnimation } from "./motion/scaleAnimation";

export default function Modal({ modal, projects }) {
  const { active, cardRect, index } = modal;
  const modalRef = useRef(null);
  const cursorRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (!cardRect) return;

    // center modal over card
    const x = cardRect.left + cardRect.width / 2;
    const y = cardRect.top + cardRect.height / 2;

    gsap.to(modalRef.current, { left: x, top: y, duration: 0.4, ease: "power3.out" });
  }, [cardRect]);

  useEffect(() => {
    const moveX = (target, duration) =>
      gsap.quickTo(target.current, "left", { duration, ease: "power3" });
    const moveY = (target, duration) =>
      gsap.quickTo(target.current, "top", { duration, ease: "power3" });

    const xCursor = moveX(cursorRef, 0.5);
    const yCursor = moveY(cursorRef, 0.5);
    const xLabel = moveX(labelRef, 0.45);
    const yLabel = moveY(labelRef, 0.45);

    const onMouseMove = (e) => {
      const { pageX, pageY } = e;
      xCursor(pageX);
      yCursor(pageY);
      xLabel(pageX);
      yLabel(pageY);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (!cardRect) return null;

  return (
    <>
      <motion.div
        ref={modalRef}
        className="modal-container"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          position: "fixed",
          width: 400,
          height: 350,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: projects[index].color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={projects[index].img}
            alt={projects[index].title}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </motion.div>

      <motion.div
        ref={cursorRef}
        className="modal-cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />

      <motion.div
        ref={labelRef}
        className="modal-label"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}
