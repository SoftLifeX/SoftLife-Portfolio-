"use client";
//import { AnimatePresence } from "framer-motion";
//import { motion } from "framer-motion";
import React from "react";
//import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Home1 from "./components/home1";
import Creativity from "./components/creativity";
import Stacks from "./components/stacks";
import Contact from "./components/contact";
import { useRevealer } from "./components/hooks/useRevealer";
import Project from "./components/project";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const Home = () => {
   useRevealer();
     
   {/*  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });
  });*/}

  return (
   <div>
      <div className="revealer" />
      <Home1 />
      <Project />
     <Stacks />
     <Contact />
   </div>
  );
};

export default Home;
