"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import About1 from "../components/about1";
import About2 from "../components/about2";
import Contact from "../components/contact";
import About3 from "../components/about3";
import { useRevealer } from "../components/hooks/useRevealer";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const About = () => {
const pathName = usePathname();
useRevealer();
     
 useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true
    });
  });
     
  return (
    
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div className="revealer" />
      <About1 />
     <About2 />
      <About3 />
       <Contact />
    </div>
  </div>
   
  );
};

export default About;
