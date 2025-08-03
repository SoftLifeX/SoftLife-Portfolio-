import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { project } from "./constants";
import ProjectCard from "./projectCard";
import Modal from "./modal";

export default function Project() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const transforms = [
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section style={{ margin: "100px 0" }} id="projects">
      <h1>
        Selected  Projects
      </h1>

      <div className="project-grid" ref={container}>
        {project.map((proj, idx) => (
          <motion.div
            className="project-item"
            key={proj.id}
            style={{ y: transforms[idx % transforms.length] }}
          >
            <ProjectCard item={proj} index={idx} setModal={setModal} />
          </motion.div>
        ))}
        <Modal modal={modal} projects={project} />
      </div>
    </section>
  );
}
