import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { motion, useScroll, useTransform } from "framer-motion";
import { project } from "./constants";
import ProjectCard from "./projectCard";
import Lottie from "lottie-react";
import Case from "@/app/assets/Case.json";
import CurveArrow from "./svg/curveArrow";

export default function Project() {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".quota", { type: "chars, words" });
    const secMsgSplit = SplitText.create(".quota2", { type: "chars, words" });

    const scaleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".creative",
        start: "top bottom",
        end: "top 75%",
        scrub: true,
      },
    });
    scaleTl.from(".creative", { duration: 1, scaleX: 0.8, ease: "expo" });

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

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const titleSplit = SplitText.create(".projectContainer h1", {
        type: "chars, words, lines",
        mask: "lines",
        linesClass: "lineParent",
        charsClass: "char-inner",
      });

      const stagger = 0.025;
      const totalDuration = titleSplit.chars.length * stagger;

      gsap.set(".projectContainer h1", {
        opacity: 1,
        lineHeight: "0.8em",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projectContainer",
          start: "top 72%",
        },
      });

      tl.from(titleSplit.chars, {
        opacity: 0,
        yPercent: 40,
        duration: 0.4,
        ease: "back.out",
        stagger,
      });

      tl.to(
        ".projectContainer h1",
        {
          lineHeight: "1.2em",
          duration: totalDuration,
          ease: "power1.out",
        },
        "<"
      );
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

  return (
    <section className="projects">
      <div className="projectContainer">
        <h5>
          Case Studies
          <Lottie id="lottie3" loop={false} animationData={Case} hover />
        </h5>
        <h1 className="title">Selected Projects</h1>
        <h2 className="quota">Creativity Isn't Just A Skill</h2>
        <h2 className="markerbound2">
          <div className="marker2">
            <span className="marker-wrap2">
              <span className="marker-highlight2">It's A Lifestyle</span>
            </span>
          </div>
        </h2>
        <h2 className="quota2">We Live It!</h2>
        <div className="curveCon">
          <CurveArrow />
        </div>

        <div className="project-grid" ref={container}>
          {project.map((proj, idx) => (
            <motion.div
              className="project-item"
              key={proj.id}
              style={{ y: transforms[idx % transforms.length] }}
            >
              <ProjectCard item={proj} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
