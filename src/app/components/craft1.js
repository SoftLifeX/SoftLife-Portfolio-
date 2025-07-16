import React, { useState, useRef } from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const charVariants_letsCollab = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] },
  },
};

const wordContainer_letsCollab = {
  visible: (i = 1) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: i * 0.04,
    },
  }),
};
function Craft1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const words = ["Digital", "concepts", "given", "life"];

  const [action,  setAction] = useState("Project");
  
  return (
      <section className="craft1">
        <div className="portfolio">
          <div className="container">
            <h1>
              <motion.div
                  ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={wordContainer_letsCollab}
      className="flex flex-wrap text-[1.25rem] leading-tight"
      style={{
        whiteSpace: "normal",
        margin: 0,
        padding: 0,
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`word-${i}`}
          style={{
            display: "inline-flex",
            marginRight: i !== words.length - 1 ? "0.4em" : "0",
          }}
          variants={wordContainer_letsCollab}
        >
          {word.split("").map((char, j) => (
            <motion.span
              key={`char-${i}-${j}`}
              variants={charVariants_letsCollab}
              style={{
                display: "inline-block",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
            </h1>
         <div className="tab-titles">
                <h4>
                  <ul>
                    <li>
                      <a href="#projects" className={action === "Project" ? "active": "" }
                        onClick={() => {
                        setAction("Project");
                        }}
                       >
                        Development 
                      </a>
                    </li>
                    <li>
                      <a href="#concepts" className={action === "Concept" ? "active": "" }
                        onClick={() => {
                        setAction("Concept");
                        }}
                       >
                        Designs
                      </a>
                    </li>
                  </ul>
                </h4>
              </div>

          {action === "Project" ? (
          <div className="state1">
           <div className="work-list">
              <div className="work">
                <Image
                 priority={true}
                 src={images.car} alt="Car Culture" title="Car Culture"/>
                <div className="layer">
                  <div className="work-info">  
                  <p>Car Culture</p>
                  <Link href="/maintenance">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                   </div> 
                </div>
              </div>

              <div className="work">
                <Image
                 priority={true}
                 src={images.jewlers} alt="Jewlers" title="Jewlers"/>
                <div className="layer">
                  <div className="work-info">  
                  <p>Jewlers</p>
                  <Link href="/maintenance">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                   </div> 
                </div>
              </div>
               
            <div className="work">
                <Image src={images.upskill} alt="Upskill Africa" title="Upskill Africa" />
                <div className="layer">
                  <div className="work-info">  
                  <p>Upskill Africa</p>
                  <Link href="/maintenance">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                   </div>
                </div>
              </div>

              <div className="work">
                <Image src={images.counsel} alt="Counsel" title="Counsel" />
                <div className="layer">
                  <div className="work-info">  
                  <p>Counsel</p>
                  <Link href="/maintenance">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                   </div> 
                </div>
             </div>
          </div>
            <p className="fakemargin">margin</p>
         </div>

          ) : (
            <div/>
            )}
            {action === "Concept" ? (
          <div className="state2">
           <div className="work-list">
              <div className="work">
                <Image src={images.upskill} alt="Upskill Africa" title="Upskill Africa" />
              </div>

              <div className="work">
                <Image src={images.counsel} alt="Counsel" title="Counsel" />
             </div>
          </div>
            <p className="fakemargin">margin</p>
        </div>
          ) : (
            <div/>
            )}
         </div>
        </div>
      </section>
  );
}

export default Craft1
