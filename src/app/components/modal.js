import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { scaleAnimation } from "./scaleAnimation";



export default function Modal({ modal, projects }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    const xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    const xMoveLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    const yMoveLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

    const moveHandler = (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveLabel(pageX);
      yMoveLabel(pageY);
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <>
      <motion.div ref={modalContainer} className="modal-container" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>
        <div className="modal-slider" style={{ top: `${index * -100}%` }}>
          {projects.map((project, i) => (
            <div className="modal-slide" style={{ backgroundColor: project.color }} key={`modal_${i}`}>
              <img src={project.img} alt="project" className="modal-img" />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div ref={cursor} className="modal-cursor" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} />
      <motion.div ref={cursorLabel} className="modal-cursor" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>
        View
      </motion.div>
    </>
  );
}
