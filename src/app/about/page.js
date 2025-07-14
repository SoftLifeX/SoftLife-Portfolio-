"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import About1 from "../components/about1";
import Contact from "../components/contact";
import About3 from "../components/about3";

const About = () => {
const pathName = usePathname();
     
     useEffect(() => {
          (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
    
            const locomotiveScroll = new LocomotiveScroll();
          })();
        }, []);
  return (
    
    <div>
      <About1 />
      <About3 />
       <Contact />
    </div>
   
  );
};

export default About;
