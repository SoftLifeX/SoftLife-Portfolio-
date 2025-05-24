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
          className="TransitionProvider"
          animate={{ width: "0vw", transformOrigin: 'left' }}
          exit={{ width: "50vw", transformOrigin: 'left' }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
       <motion.div
          className="TransitionProvider1"
          animate={{ width: "0vw", transformOrigin: 'right' }}
          exit={{ width: "50vw", transformOrigin: 'right' }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="TransitionProvider2"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {paths[pathName]}
        </motion.div>
        <motion.div
          className="TransitionProvider3"
          initial={{ width: "50vw", transformOrigin: 'left' }}
          animate={{ width: "0vw", transformOrigin: 'left', transition: { ease: "easeIn" } }}
        />
       <motion.div
          className="TransitionProvider4"
          initial={{ width: "50vw", transformOrigin: 'right' }}
          animate={{ width: "0vw", transformOrigin: 'right', transition: { ease: "easeIn" } }}
        />
      <StickyCursor/>
        <Header />
        <div>{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
