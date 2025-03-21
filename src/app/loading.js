import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function loading() {
    const [index, setIndex] = useState(0);

    const [dimension, setDimension] = useState({width: 0, height:0});



    useEffect( () => {

        setDimension({width: window.innerWidth, height: window.innerHeight})

    }, [])



    useEffect( () => {

        if(index == words.length - 1) return;

        setTimeout( () => {

            setIndex(index + 1)

        }, index == 0 ? 1000 : 150)

    }, [index])

    
    return (
        <div>
            <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {words[index]}
        </motion.div>
        <motion.div
          className="TransitionProvider3"
          initial={{ height: "200vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        </div>
    );
      }
