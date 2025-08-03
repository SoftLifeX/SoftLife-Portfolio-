import React, { useState, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { images } from "@/app/images/images";
import { motion, useInView } from "framer-motion";
import Link from "next/link";



function Craft1() {
    //splitText
 useGSAP(() => {
  document.fonts.ready.then(() => {
    // Initial reveal for both
    gsap.set([".title", ".subtitle"], { opacity: 1, lineHeight: "0.8em" });

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

  const [action,  setAction] = useState("Project");
  
  return (
      <section className="craft1">
        <div className="portfolio">
          <div className="container">
            <h1 className="title">
              Digital concepts given life
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




