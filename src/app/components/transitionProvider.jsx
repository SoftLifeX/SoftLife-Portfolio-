"use client";

import { AnimatePresence } from "framer-motion";
import Header from "./header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Preloader from "../Preloader"
import StickyCursor from "../components/stickyCursor"


const TransitionProvider = ({ children }) => {

   const [isLoading, setIsLoading] = useState(true);

  const paths = {

    "/": "Home",

    "/about": "About",

   "/craft": "Craft",

    "/contact": "Contact"

  }


  const pathName = usePathname();


    useEffect(() =>{
      setTimeout(() => {
             setIsLoading(false);
    
             document.body.style.cursor = "default";
    
             window.scrollTo(0, 0);
           }, 3000);
  },[]);

  return (
     <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      <div key={pathName}>
         <motion.div
            className='PageIn'
            >
        <motion.span
          className="PageIn1"
          animate={{ width: "0vw", transformOrigin: 'left' }}
          exit={{ width: "50vw", transformOrigin: 'left' }}
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        />
       <motion.span
          className="PageIn2"
          animate={{ width: "0vw", transformOrigin: 'right' }}
          exit={{ width: "50vw", transformOrigin: 'right' }}
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        />
      </motion.div>
        <motion.div
          className="PagePath"
          initial={{ display: 'flex' }}
          animate={{ display: 'none' }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.25, ease: "easeOut" }}
        >
          {paths[pathName]}
        </motion.div>
         
      <motion.div
         className='PageOut'
         transition={{ delay: 1.5}}
         >
        <motion.span
          className="PageOut1"
          initial={{ width: "50vw", transformOrigin: 'left' }}
          animate={{ width: "0vw", transformOrigin: 'left', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        />
       <motion.span
          className="PageOut2"
          initial={{ width: "50vw", transformOrigin: 'right' }}
          animate={{ width: "0vw", transformOrigin: 'right', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        />
      </motion.div>
      <StickyCursor/>
        <Header />
        <div>{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
