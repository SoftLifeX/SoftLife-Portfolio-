"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const words = [
  "SoftLife",
  "Designer",
  "Developer",
  "Average Noob",
  "Nice to meet you :)",
];

export default function Index() {
  const [index, setIndex] = useState(0);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);


  return (
   <div className="introduction"> {dimension.width > 0 && (
        <>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="loader"
          >
            {words[index]}
          </motion.p>
        </>
      )}

    </div>
     
  );
}
