"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import About1 from "../components/about1";
import About2 from "../components/about2";
import About3 from "../components/about3";
import Contact from "../components/contact";

const About = () => {

  const pathName = usePathname();

      useEffect(() => {
        (async () => {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
  
          const locomotiveScroll = new LocomotiveScroll();
        })();
      }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathName}
        initial={{ y: "20vh", opacity: 0, scale: 0.5 }}
        animate={{ y: "0%", opacity: 1, scale: 1 }}
        exit={{ y: "20vh", opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
      <About1 />
      <About2 />
      <About3 />
      <Contact />
    </motion.div>
   </AnimatePresence>
  );
};

export default About;
