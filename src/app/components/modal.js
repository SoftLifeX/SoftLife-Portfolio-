import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { scaleAnimation } from "./motion/scaleAnimation";

export default function Modal({ modal, projects }) {
  const { active, cardRect, index } = modal;
  const modalRef = useRef(null);
  const cursorRef = useRef(null);

  // Position modal over the hovered card
  useEffect(() => {
    if (!cardRect || !modalRef.current) return;

    const x = cardRect.left + cardRect.width / 2;
    const y = cardRect.top + cardRect.height / 2;

    gsap.to(modalRef.current, {
      left: x,
      top: y,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [cardRect]);

  // Cursor follow
  useEffect(() => {
    const moveX = (target, duration) =>
      target.current
        ? gsap.quickTo(target.current, "left", { duration, ease: "power3" })
        : () => {};
    const moveY = (target, duration) =>
      target.current
        ? gsap.quickTo(target.current, "top", { duration, ease: "power3" })
        : () => {};

    const xCursor = moveX(cursorRef, 0.5);
    const yCursor = moveY(cursorRef, 0.5);

    const onMouseMove = (e) => {
      const { pageX, pageY } = e;
      xCursor(pageX);
      yCursor(pageY);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (!cardRect) return null;

  return (
    <>
      {/* Modal */}
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
            position: "relative", // for label positioning
          }}
        >
          {/* Next.js Image */}
          <Image
            src={projects[index].img}      // must be string path or imported
            alt={projects[index].title}
            width={300}                    // fixed width
            height={200}                   // fixed height
            style={{ objectFit: "contain" }}
          />

          {/* Label inside modal */}
          <motion.div
            className="modal-label"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none",
            }}
          >
            View
          </motion.div>
        </div>
      </motion.div>

      {/* Cursor follow */}
      <motion.div
        ref={cursorRef}
        className="modal-cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />
    </>
  );
}
