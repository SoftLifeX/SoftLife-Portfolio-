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
      <Craft1 />
      <Project />
      <Reviews />
    </div>
  );
};

export default Craft;





