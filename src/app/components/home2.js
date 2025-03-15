import React, { useLayoutEffect, useRef } from 'react'
import Image from "next/image";
import { images } from "@/app/images/images";
import Link from "next/link";
import Magnetic2 from './magnetic2';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

function Home2() {

   const anim = {

    initial: {

        opacity: 0, x: -100

    },

    open: {

        opacity: 1, x: 0,

        transition: {duration: 0.5}

    },

    closed: {

        opacity: 0, x: -100,

        transition: {duration: 0.5}

    }

   }

   const ref = useRef(null);

   const isInView = useInView(ref, { once: true });

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
            <h3  data-scroll data-scroll-speed={0.1}>
              Creativity is not just a skill
              <br /> It's a life-style
              <br />
              <br />
              <span>We live it!</span>
            </h3>

            <h5>Featured Projects</h5>
            <div className="work-list">
              <motion.div
                variants={anim} animate={isInView ? "open" : "closed"}
               className="work">
                <Image 
                 priority={true}
                 src={images.work1} alt="work1" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="work">
                <Image
                 priority={true}
                 src={images.work3} alt="work3" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </motion.div>

              <motion.div 
               initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="work">
                <Image priority={true} src={images.work1} alt="work1" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </motion.div>

              <motion.div 
               initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="work">
                <Image priority={true} src={images.work2} alt="work2" />
                <div className="layer">
                  <p></p>
                  <a href="">
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </motion.div>
             </div>
            <Magnetic2>
            <Link href="/craft" className="btn2">
              Intrigued?<i className="bx bx-arrow-to-top"></i>
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
