"use client";

import { AnimatePresence } from "framer-motion";
import Header from "./header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Typewriter, Cursor } from "nextjs-simple-typewriter";



const TransitionProvider = ({ children }) => {

  const paths = {

    "/": "Home",

    "/about": "About",

   "/craft": "Craft",

    "/contact": "Contact"

  }


  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <motion.div
          className="TransitionProvider"
          animate={{ height: "0vh" }}
          exit={{ height: "200vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="TransitionProvider2"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typewriter
                words= {paths[pathName]}
                cursor
                cursorStyle=""
                typeSpeed={90}
                deleteSpeed={1000}
                delaySpeed={1000}
              />
        </motion.div>
        <motion.div
          className="TransitionProvider3"
          initial={{ height: "200vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <Header />
        <div>{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
