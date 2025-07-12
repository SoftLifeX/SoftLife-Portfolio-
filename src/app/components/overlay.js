"use client";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

// Register plugin
gsap.registerPlugin(CustomEase);

// Your custom easing curves
const ease = CustomEase.create("hop", "0.9, 0, 0.1, 1");
const clipEase = CustomEase.create("scale", "0.250, 0.460, 0.450, 0.940");

export default function Overlay() {
  const overlayRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    overlay.classList.add("loaded");
  }, []);

  useGSAP(() => {
    const overlay = overlayRef.current;

    // After CSS clip-path transition, run GSAP with your custom ease
    gsap.to(overlay, {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 1,
      delay: 1.2,   // match your CSS transition time
      ease: ease,     // your custom hop ease
    });

  }, [pathname]);

  return <div ref={overlayRef} className="overlay"></div>;
    }
