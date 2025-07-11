'use client'
import gsap from 'gsap';
import {useGSAP} from 'gsap/react';
import CustomEase from 'gsap/CustomEase';


gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1"):

function Revealer() {
    useGSAP(() => {
    gsap.to( ".revealer", {
      scaleY: 0,
      duration: 1.25,
      delay: 1,
      ease: "hop",
    });
    }, {});
}

export default Revealer
