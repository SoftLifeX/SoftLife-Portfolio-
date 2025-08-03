"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { scaleAnimation } from "./scaleAnimation";

export default function Modal({ modal, projects }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="modal-container"
      >
        <div style={{ top: index * -100 + "%" }} className="modal-slider">
          {projects.map((project, idx) => (
            <div className="modal-slide" style={{ backgroundColor: project.color }} key={idx}>
              <Image src={project.img} alt="image" width={300} height={300} className="modal-img" />
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
        className="modal-cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}
