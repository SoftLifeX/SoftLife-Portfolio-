"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import Home1 from "./components/home1";
import Home2 from "./components/home2";

const Home = () => {
   const pathName = usePathname();
     
     useEffect(() => {
          (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
    
            const locomotiveScroll = new LocomotiveScroll();
          })();
        }, []);

  return (
    <div>

      
      <Home1 />
      <Home2 />

     </div>
  );
};

export default Home;
