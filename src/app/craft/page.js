"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Project from "../components/project";
import Reviews from "../components/reviews";
import { useRevealer } from "../components/hooks/useRevealer";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const Craft = () => {

useRevealer();

const pathName = usePathname();
     
     
  return (
   <div>
      <div className="revealer" />
      <Project />
      <Reviews />
    </div>
  );
};

export default Craft;






