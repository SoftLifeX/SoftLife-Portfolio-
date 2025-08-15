import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { scaleAnimation } from "./motion/scaleAnimation";

export default function Modal({ modal, projects }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const moveX = (target, duration) =>
      gsap.quickTo(target.current, "x", { duration, ease: "power3" });
    const moveY = (target, duration) =>
      gsap.quickTo(target.current, "y", { duration, ease: "power3" });

    const xModal = moveX(modalContainer, 0.8);
    const yModal = moveY(modalContainer, 0.8);
    const xCursor = moveX(cursor, 0.5);
    const yCursor = moveY(cursor, 0.5);
    const xLabel = moveX(cursorLabel, 0.45);
    const yLabel = moveY(cursorLabel, 0.45);

    const onMouseMove = (e) => {
      const { clientX, clientY } = e; // viewport-based coords
      xModal(clientX);
      yModal(clientY);
      xCursor(clientX);
      yCursor(clientY);
      xLabel(clientX);
      yLabel(clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        className="modal-container"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          width: 400,
          height: 350,
          overflow: "hidden",
          position: "fixed",
          top: "50%",
          left: "50%",
          pointerEvents: "none",
          zIndex: 999,
        }}
      >
        <div
          style={{
            top: `${index * -100}%`,
            position: "absolute",
            height: "100%",
            width: "100%",
            transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={`modal_${i}`}
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: project.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={project.img}
                width={300}
                height={0}
                alt="modal"
                style={{ height: "auto", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className="modal-cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />
      <motion.div
        ref={cursorLabel}
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
