import React, { useLayoutEffect, useRef } from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";
import Link from "next/link";
import Magnetic2 from './magnetic2';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

function Home2() {

  /*  const ref = useRef(null);

   const isInView = useInView(ref, { once: true }); */

   const secRef = useRef(null); 

   useLayoutEffect(() => {
     gsap.registerPlugin(ScrollTrigger);

     const tl = gsap.timeline({
       scrollTrigger: {
         trigger: secRef.current,

         scrub: true,

         start: isInView,

         end: "100%",
       },
     });



     tl.to(secRef.current, {
       scale: 0.92,
       ease:" easeInOut",
     });
   });

  return (
    <div>
      <section ref={secRef} className="home2">
        <div className="portfolio">
          <div className="container">
            <p>
              Creativity is not just a skill
              <br /> It's a life-style 
          <span> 
          <div className="dot"></div>
         <div className="dot"></div>
        <div className="dot"></div>
         </span>
              <br />
              <br />
              <span className="blocktext"></span>
            </p>

            <h5>Case Studies</h5>
            <div className="work-list">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="work">
                <Image
                 priority={true}
                 src={images.work1} alt="Critique" title="CritiQue"/>
                <div className="layer">
                  <div className="work-info">  
                  <p>CritiQue</p>
                  <a href="">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </a>
                   </div> 
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="work">
                <Image
                 priority={true}
                 src={images.work1} alt="Upskill Africa" title="Upskill Africa"/>
                <div className="layer">
                  <div className="work-info">  
                  <p>Upskill Africa</p>
                  <a href="">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </a>
                   </div> 
                </div>
              </motion.div>
             </div>
            <Magnetic2>
            <Link href="/craft" className="btn2">
              Intrigued?{/*<i className="bx bx-arrow-to-top"></i>*/}
            </Link>
            </Magnetic2>

            <p className="fakemargin">margin</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home2
