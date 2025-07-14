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
         {/* <motion.div
            className='PageExit'
            >
        <motion.span
          className="PageExit1"
          transition={{ duration: 0.35 }}
        >
        <motion.div 
           animate={{ scaleX: 0, transformOrigin: 'left' }}
          exit={{ scaleX: 1, transformOrigin: 'left' }}
           transition={{ ease: [0.250, 0.460, 0.450, 0.940] }}
           />
       <motion.div 
          animate={{ scaleX: 0, transformOrigin: 'left' }}
          exit={{ scaleX: 1, transformOrigin: 'left' }}
          transition={{ delay: 0.2, ease: [0.250, 0.460, 0.450, 0.940] }}/>
      <motion.div
         animate={{ scaleX: 0, transformOrigin: 'left' }}
          exit={{ scaleX: 1, transformOrigin: 'left' }}
         transition={{delay: 0.4, ease: [0.250, 0.460, 0.450, 0.940]}}/>
        </motion.span>
            
       <motion.span
          className="PageExit2"
          transition={{ duration: 0.35 }}
        >
       <motion.div
         animate={{ scaleX: 0, transformOrigin: 'right' }}
          exit={{ scaleX: 1, transformOrigin: 'right' }}
         transition={{ ease: [0.250, 0.460, 0.450, 0.940] }}
          />
       <motion.div
         animate={{ scaleX: 0, transformOrigin: 'right' }}
          exit={{ scaleX: 1, transformOrigin: 'right' }}
         transition={{ delay: 0.4, ease: [0.250, 0.460, 0.450, 0.940] }}
          />
      <motion.div
         animate={{ scaleX: 0, transformOrigin: 'right' }}
          exit={{ scaleX: 1, transformOrigin: 'right' }}
         transition={{ delay: 0.4, ease: [0.250, 0.460, 0.450, 0.940] }}
         />
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
         transition= {{ duration: 0.35 }}
        >
        <motion.div 
           initial={{ scaleX: 1, transformOrigin: 'left' }}
          animate={{ scaleX: 0, transformOrigin: 'left'}}
           transition={{ ease: [0.550, 0.085, 0.680, 0.530] }}
           />
       <motion.div
          initial={{ scaleX: 1, transformOrigin: 'left' }}
          animate={{ scaleX: 0, transformOrigin: 'left'}}
          transition={{delay: 0.2, ease: [0.550, 0.085, 0.680, 0.530]}}
          />
      <motion.div 
         initial={{ scaleX: 1, transformOrigin: 'left' }}
          animate={{ scaleX: 0, transformOrigin: 'left'}}
         transition={{delay: 0.4, ease: [0.550, 0.085, 0.680, 0.530]}}
         />
        </motion.span>
         
       <motion.span
          className="PageEnter2"
          transition= {{ duration: 0.35 }}
          >
       <motion.div 
          initial={{ scaleX: 1, transformOrigin: 'right' }}
          animate={{ scaleX: 0, transformOrigin: 'right'}}
          transition={{ ease: [0.550, 0.085, 0.680, 0.530] }}
          />
       <motion.div 
          initial={{ scaleX: 1, transformOrigin: 'right' }}
          animate={{ scaleX: 0, transformOrigin: 'right'}}
          transition={{delay: 0.2, ease: [0.550, 0.085, 0.680, 0.530]}}/>
      <motion.div 
         initial={{ scaleX: 1, transformOrigin: 'right' }}
          animate={{ scaleX: 0, transformOrigin: 'right'}} 
         transition={{delay: 0.4, ease: [0.550, 0.085, 0.680, 0.530]}}/>
       </motion.span>
      </motion.div>*/}
      <StickyCursor/>
        {!noHeaderPaths.includes(pathName) && <Header />}
        <div>{children}</div>
      {!noContactPaths.includes(pathName) && <Contact />}
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
