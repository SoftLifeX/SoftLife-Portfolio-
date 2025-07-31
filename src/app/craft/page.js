"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Craft1 from "../components/craft1";
import Craft2 from "../components/craft2";
import Reviews from "../components/reviews";
import { useRevealer } from "../components/hooks/useRevealer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const Craft = () => {

useRevealer();

const pathName = usePathname();
     
 useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });
  });
        
  return (
   <div id="smooth-wrapper">
    <div id="smooth-content">
      <div className="revealer" />
      <Craft1 />
      <Craft2 />
      <Reviews />
    </div>
  </div>
  );
};

export default Craft;
