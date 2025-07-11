'use client'
import gsap from 'gsap';
import {useGSAP} from 'gsap/react';
import CustomEase from 'gsap/CustomEase';


gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1"):
