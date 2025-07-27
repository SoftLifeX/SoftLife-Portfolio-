'use client'
import { useState, useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from 'gsap/all';
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Magnetic from "./magnetic"
import ScrambleText from "./scrambleText"
import ReplaceText from "./replaceText"
import ArrowIcon from "./svg/arrow"
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";


//page transition....
const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 2000,
      easing: "cubic-bezier(0.9, 0, 0.1, 1)",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

//splittext
const fullLines = [
  ["Full-Stack", "|", "Mobile"],
  ["Designer", "+", "Developer", "&"],
];

const dynamicWords = [
  "Content Creator", "Lover of the Arts", "a bit of a gamer", "Travel Enthusiast"];

const charVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: "0%", transition: { duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275], } },
};

const wordContainer = {
  visible: (i = 1) => ({
    transition: { staggerChildren: 0.03, delayChildren: i * 0.03, ease: [0.175, 0.885, 0.32, 1.275],   },
  }),
};

function useCyclingWord(words) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words]);

  return words[index];
}

function renderLine(words, keyPrefix = "") {
  return (
    <motion.div
      className="line"
      style={{
        display: "flex",
        flexWrap: "wrap",
        whiteSpace: "pre",
        fontSize: "1rem",
        gap: "0.3rem",
      }}
      initial="hidden"
      animate="visible"
      variants={wordContainer}
    >
      {words.map((word, i) => {
        const isHighlight = word === "Full-Stack";
        if (isHighlight) {
          const highlightWords = ["Full-Stack", "|", "Mobile"];
          return (
            <motion.span
              key={`${keyPrefix}-highlight-${i}`}
              
              style={{ display: "inline-flex", whiteSpace: "pre" }}
              variants={wordContainer}
            >
              {highlightWords
                .join(" ")
                .split("")
                .map((char, j) => (
                  <motion.span
                    key={`highlight-char-${j}`}
                    variants={charVariants}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
            </motion.span>
          );
        }

        if (["|", "Mobile"].includes(word)) return null;

        return (
          <motion.span
            key={`${keyPrefix}-word-${i}`}
            style={{ display: "inline-block", whiteSpace: "pre", overflow: "hidden" }}
            variants={wordContainer}
          >
            {word.split("").map((char, j) => (
              <motion.span
                key={`${keyPrefix}-char-${i}-${j}`}
                variants={charVariants}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

//h2 animation 
const charVariants_letsCollab = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.4 },
  },
};

const wordContainer_letsCollab = {
  visible: (i = 1) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: i * 0.04,
      delay: 5,
    },
  }),
};

const charVariants2_letsCollab = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.4 },
  },
};

const wordContainer2_letsCollab = {
  visible: (i = 1) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: i * 0.04,
      delay: 5,
    },
  }),
};
function Home1() {
//page animation
const router = useTransitionRouter();

  const pathName = usePathname();


//h2 animation
 useGSAP(() => {
        const heroSplit = new SplitText(".title", {
         type: "chars, words, lines",
        });

        const paragraphSplit = new SplitText(".subtitle", {
         type: "lines",
        });

        // Apply text-gradient class once before animating
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
         yPercent: 100,
         duration: 1.8,
         ease: "expo.out",
         stagger: 0.06,
         delay: 10,
        });

        gsap.from(paragraphSplit.lines, {
         opacity: 0,
         yPercent: 100,
         duration: 1.8,
         ease: "expo.out",
         stagger: 0.06,
         delay: 10,
        });
   }, []);

//paragraph animation
  const dynamicWord = useCyclingWord(dynamicWords, 200);
    
//sliding text
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  const [status,  setStatus] = useState("Available");

  
    
  return (
      <section className="home1">
        <div className="homepage">
      <div className="pointer">
        <ArrowIcon />
      </div>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.2, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
  className="statusContainer scale">
    {status === "Available" ? (
      <div className="statusBar1">
     
     <p><span className="indicator" />Available for New Projects</p>
     </div>
    ) : (
      <div/>
     )}

     {status === "Busy" ? (
      <div className="statusBar2">
     <p><span className="indicator"/> Sorry! currently unavailable :(</p>
     </div>
    ) : (
      <div/>
     )}
    </motion.div>
    <div className="h2Container">
    <h2 className="title">
      Daniel c. Daniel
      <br/> Software Engineer.
    </h2>

    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", margin: 0, overflow: "hidden", lineHeight: 1.1, }}>
      {renderLine(fullLines[0], "line1")}
      {renderLine(fullLines[1], "line2")}

      <motion.div
        key={dynamicWord}
        style={{
          display: "flex",
          flexWrap: "wrap",
          whiteSpace: "pre",
          fontSize: "1rem",
          overflow: "hidden",
        }}
        initial="hidden"
        animate="visible"
        variants={wordContainer}
      >
        {dynamicWord.split("").map((char, j) => (
          <motion.span
            key={`dynamic-char-${j}`}
            variants={charVariants}
            style={{ display: "inline-block", whiteSpace: "pre", overflow: "hidden" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
    
       </div>

        <div className="sliderContainer">
        <div ref={slider} className="slider">
          <h1 className="slidertext" ref={firstText}>Softlifeメ • Software Engineer & Designer</h1>
          <h1 className="slidertext" ref={secondText}>Softlifeメ • Software Engineer & Designer</h1>
        </div>
      </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.2, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
         className="btnContainer scale">
            <Magnetic>
                <a href="./Daniel c. Daniel's Resume.pdf" download className="btn4">
                  Resume
                </a>
            </Magnetic>
           </motion.div>
           <motion.div
          initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
       transition={{ delay: 0.2, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
         className="btnContainer2 scale">
            <Magnetic>
            <Link 
              href="/contact" 
              className="btn2" 
              onClick={(e) => {
              e.preventDefault();
              router.push("/contact", {
              onTransitionReady: pageAnimation,
             });
           }}>
              Let's build!
            </Link>
            </Magnetic>
           </motion.div>
        </div>
     </section>
  );
}

export default Home1
