"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Home1 from "./components/home1";
import Home2 from "./components/home2";
import About2 from "./components/about2";
import Contact from "./components/contact";
import { useRevealer } from "./components/hooks/useRevealer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const Home = () => {
   useRevealer();
     
     useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  }, []);

  return (
    <div>
      <div className="revealer" />
      <Home1 />
      <Home2 />
     <About2 />
     <Contact />
   </div>
  );
};

export default Home;
