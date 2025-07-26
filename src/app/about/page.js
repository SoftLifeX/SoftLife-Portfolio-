"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import About1 from "../components/about1";
import Contact from "../components/contact";
import About3 from "../components/about3";
import { useRevealer } from "../components/hooks/useRevealer";

const About = () => {
const pathName = usePathname();
useRevealer();
     
     useEffect(() => {
          (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
    
            const locomotiveScroll = new LocomotiveScroll();
          })();
        }, []);
  return (
    
    <div>
      <div className="revealer" />
      <About1 />
      <About3 />
       <Contact />
    </div>
   
  );
};

export default About;
