import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { motion, useScroll, useTransform } from "framer-motion";
import { project } from "./constants";
import ProjectCard from "./projectCard";
import Modal from "./modal";

export default function Project() {
  
useGSAP(() => {
    const firstMsgSplit = SplitText.create(".quota", {
      type: "chars, words",
    });
    const secMsgSplit = SplitText.create(".quota2", {
      type: "chars, words",
    });
    
     const scaleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".creative",
        start: "top bottom",
        end: "top 75%",
        scrub: true,
      },
    });
    scaleTl.from(".creative", {
      duration: 1,
      scaleX: 0.80,
      ease: "expo",
    });
    
    gsap.from(firstMsgSplit.chars, {
      opacity: 0.4,
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".quota",
        start: "top 90%",
        end: "bottom 90%",
        scrub: true,
      },
    });
    
    gsap.from(secMsgSplit.chars, {
      opacity: 0.4,
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".quota2",
        start: "top bottom",
        end: "bottom 90%",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".marker-wrap2",
        start: "top 90%",
        end: "bottom 88%",
        scrub: true,
      },
    });
    revealTl.from(".marker-wrap2", {
      duration: 1,
      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      ease: "circ.inOut",
    });
  }, []);
  
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
    <section className="projects">
     <div className="projectContainer">
     <h1 className="quota">
              Creativity Isn't Just A Skill <br /> 
            </h1>
        <h1 className="markerbound2">
          <div className="marker2">
           <span className="marker-wrap2">
             <span className="marker-highlight2"> 
               ‎‎ It's A Lifestyle  ‎‎
             </span>
           </span>
           </div>
         </h1>
         <h1 className="quota2">
           We Live It!
         </h1>
           <div className="curveCon">
             <CurveArrow />
           </div>
            <h5>
             Case Studies
             <Lottie
                  id="lottie3"
                  loop={false} 
                  animationData={Case}
                  hover/>
            </h5>
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
