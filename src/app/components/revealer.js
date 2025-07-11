'use client'
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import CustomEase from 'gsap/CustomEase';



function Revealer() {

   gsap.registerPlugin(CustomEase);

   const ease = CustomEase.create("hop", "0.9, 0, 0.1, 1");
   
   const revealer = useRef(null);

   useGSAP(() => {
      
    gsap.to(revealer.current, {
       scaleY: 0,
       duration: 1.25,
       delay: 1,
       ease: ease,
    });
  }, []);


return (
    <div ref={revealer} className="revealer" />
 );
}

export default Revealer
