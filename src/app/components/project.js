import React, { useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Modal from "./modal";
import ProjectCard from "./projectCard";
import { project } from "./constants";


export default function Project() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });

  const transformStyles = [
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="project-section" id="projects">
      <div className="project-title">
        <h1>
          <span className="dot" /> selected <span className="dot" /> projects
        </h1>
      </div>
      <div className="project-grid" ref={container}>
        {project.map((item, index) => (
          <motion.div key={item.id} className="project-card" style={{ y: transformStyles[index % transformStyles.length] }}>
            <ProjectCard item={item} index={index} setModal={setModal} />
          </motion.div>
        ))}
        <Modal projects={project} modal={modal} />
      </div>
    </section>
  );
}
