'use client'
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import CustomEase from 'gsap/CustomEase';


gsap.registerPlugin(CustomEase);

const ease = CustomEase.create("hop", "0.9, 0, 0.1, 1");

export function useRevealer() {

   useGSAP(() => {
      
    gsap.to(".revealer", {
       scaleY: 0,
       duration: 1.25,
       delay: 1,
       ease: ease,
    });
  }, {});
}
