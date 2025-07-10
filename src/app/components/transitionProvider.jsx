"use client";

import { AnimatePresence } from "framer-motion";
import Header from "./header";
import Contact from "./contact";
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

   const noHeaderPaths = ['/'];
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
            className='PageExit'
            >
        <motion.span
          className="PageExit1"
          animate={{ scaleX: 0, transformOrigin: 'left' }}
          exit={{ scaleX: 1, transformOrigin: 'left' }}
          transition={{ duration: 0.35, ease: [0.250, 0.460, 0.450, 0.940] }}
        >
        <motion.div />
       <motion.div transition={{delay: 0.2}}/>
      <motion.div transition={{delay: 0.4}}/>
        </motion.span>
       <motion.span
          className="PageExit2"
          animate={{ scaleX: 0, transformOrigin: 'right' }}
          exit={{ scaleX: 1, transformOrigin: 'right' }}
          transition={{ duration: 0.35, ease: [0.250, 0.460, 0.450, 0.940] }}
        >
       <motion.div />
       <motion.div transition={{delay: 0.2}}/>
      <motion.div transition={{delay: 0.4}}/>
       </motion.span>
      </motion.div>
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
         className='PageEnter'
         transition={{ delay: 0.6}}
         >
        <motion.span
          className="PageEnter1"
          initial={{ width: "50vw", transformOrigin: 'left' }}
          animate={{ width: "0vw", transformOrigin: 'left', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        >
        <motion.div />
       <motion.div transition={{delay: 0.2}}/>
      <motion.div transition={{delay: 0.4}}/>
        </motion.span>
       <motion.span
          className="PageEnter2"
          initial={{ width: "50vw", transformOrigin: 'right' }}
          animate={{ width: "0vw", transformOrigin: 'right', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        >
       <motion.div />
       <motion.div transition={{delay: 0.2}}/>
      <motion.div transition={{delay: 0.4}}/>
       </motion.span>
      </motion.div>
      <StickyCursor/>
        {!noHeaderPaths.includes(pathName) && <Header />}
        <div>{children}</div>
      {!noContactPaths.includes(pathName) && <Contact />}
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
