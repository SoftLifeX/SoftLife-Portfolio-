"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import Craft1 from "../components/craft1";
import Craft2 from "../components/craft2";
import Contact from "../components/contact";


const Craft = () => {

const pathName = usePathname();
     
     useEffect(() => {
          (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
    
            const locomotiveScroll = new LocomotiveScroll();
          })();
        }, []);
        
  return (
    <div>
      <Craft1 />
      <Craft2 />
      <Contact />

       </div>
  );
};

export default Craft;
