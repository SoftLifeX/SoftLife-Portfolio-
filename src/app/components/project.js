import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { motion, useScroll, useTransform } from "framer-motion";
import { project } from "./constants";
import ProjectCard from "./projectCard";
import Modal from "./modal";

export default function Project() {

  //splitText
  useGSAP(() => {
  document.fonts.ready.then(() => {
    // Initial reveal for both
    gsap.set([".title"], { opacity: 1, lineHeight: "0.8em" });

    // === Title Animation ===
    const heroSplit = new SplitText(".title", {
      type: "chars, words, lines",
      mask: "lines",
      linesClass: "lineParent",
      charsClass: "char-inner",
      autoSplit: true,
      onSplit: (self) => {
        const stagger = 0.025;
        const delay = 1.6;
        const duration = 0.4;
        const totalDuration = self.chars.length * stagger;

        // Animate chars
        gsap.from(self.chars, {
          opacity: 0,
          yPercent: 40,
          duration,
          ease: "back",
          stagger,
          delay,
        });

        // Animate line-height globally in sync
        gsap.to(".title", {
          lineHeight: "1.2em",
          duration: totalDuration,
          ease: "power1.out",
          delay,
        });
      },
    });
  });
}, []);
  
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
    <section style={{ margin: "0" }} className="projects">
     <div className="projectContainer">
      <h1 className="title">
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
     </div>
    </section>
  );
}
