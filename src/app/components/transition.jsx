"use client";

import { AnimatePresence } from "framer-motion";
import Header from "./header";
import Contact from "./contact";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Preloader from "../Preloader"
import StickyCursor from "../components/stickyCursor"


const Transition = ({ children }) => {

   const [isLoading, setIsLoading] = useState(true);

  const paths = {

    "/": "Home",

    "/about": "About",

   "/craft": "Craft",

    "/contact": "Contact"

  }

   const noContactPaths = ['/contact'];

  const pathName = usePathname();


    useEffect(() =>{
      setTimeout(() => {
             setIsLoading(false);
    
             document.body.style.cursor = "default";
    
             window.scrollTo(0, 0);
           }, 2000);
  },[]);

  return (
     <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      <div key={pathName}>

      <motion.div 
         className="pageExit"
          initial={{ clipPath: 'polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)' }}
          animate={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
         /> 
         
         <motion.div
          className="PagePath"
          initial={{ display: 'flex' }}
          animate={{ display: 'none' }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.1, ease: "easeIn" }}
        >
          {paths[pathName]}
        </motion.div>
         
         <motion.div 
          className="pageEnter"
          initial={{ scaleY: 1, transformOrigin: 'top center' }}
          animate={{ scaleY: 0, transformOrigin: 'top center'}}
          transition={{delay: 0.4, ease: [0.9, 0, 0.1, 1]}}
            />
      <StickyCursor/>
        <Header />
        <div>{children}</div>
      {!noContactPaths.includes(pathName) && <Contact />}
      </div>
    </AnimatePresence>
  );
};

export default Transition;
