"use client";
import { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { project } from "./constants";
import ProjectCard from "./projectCard";
import Modal from "./modal";

export default function Project() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const transformStyles = Array(8)
    .fill()
    .map((_, i) =>
      useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -100 : 100])
    );

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="project-section" id="projects">
      <div className="project-title">
        <span /> selected <span /> projects
      </div>
      <div className="project-container" ref={container}>
        {project.map((proj, index) => (
          <motion.div
            key={proj.id}
            className="project-card-wrapper"
            style={{ y: transformStyles[index % transformStyles.length] }}
          >
            <ProjectCard item={proj} index={index} setModal={setModal} />
          </motion.div>
        ))}
        <Modal projects={project} modal={modal} />
      </div>
    </section>
  );
}
