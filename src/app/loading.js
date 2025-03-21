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
        <div className="h-screen w-full text-white relative">
            <div className="w-full h-full flex justify-center flex-col items-center">
                <h1 className="headertin text-3xl md:text-6xl fixed top-5 left-10">ADG.</h1>
                <div className="loader">
                    <p>loading</p>
                    <div className="words">
                    <span className="word">Interface</span>
                    <span className="word">Dataset</span>
                    <span className="word">Graphics</span>
                    <span className="word">Aesthet</span>
                    <span className="word">Operation</span>
                    </div>
                </div>
            </div>
        </div>
    );
      }
