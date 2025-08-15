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
      const { clientX, clientY } = e;
      // subtract half width/height to center modal
      xModal(clientX - 200); 
      yModal(clientY - 175); 
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
      >
        <div
          className="modal-slider"
          style={{ top: `${index * -100}%` }}
        >
          {projects.map((project, i) => (
            <div
              key={`modal_${i}`}
              className="modal-slide"
              style={{ backgroundColor: project.color }}
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
