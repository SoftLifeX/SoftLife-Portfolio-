"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import Home1 from "./components/home1";
import Home2 from "./components/home2";
import About2 from "./components/about2";
import Contact from "./components/contact";
import { useRevealer } from "./components/hooks/useRevealer";


const Home = () => {
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
      <Home1 />
      <Home2 />
     <About2 />
     <Contact />

     </div>
  );
};

export default Home;
