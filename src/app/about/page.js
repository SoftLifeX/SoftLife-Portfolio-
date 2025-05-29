"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
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
    <AnimatePresence >
      <motion.div 
        initial={{ opacity: 0.5, scale: 0, transformOrigin: 'top' }}
        animate={{ opacity: 1, scale: 1, transformOrigin: 'top' }}
        transition={{ duration: 0.5 }}
       className="screen"
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
