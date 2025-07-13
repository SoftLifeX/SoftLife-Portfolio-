"use client";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
const ease = CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Overlay() {
  const overlayRef = useRef(null);
  const polygonRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // start from your small polygon shape
    polygonRef.current.setAttribute("points", "25,75 75,75 75,75 25,75");

    // animate polygon expansion
    setTimeout(() => {
      polygonRef.current.setAttribute("points", "0,100 100,100 100,100 0,100");
    }, 50);
  }, []);

  useGSAP(() => {
    const overlay = overlayRef.current;

    // animate overlay scaling away after polygon grows
    gsap.to(overlay, {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 1,
      delay: 1,
      ease: ease
    });
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 9999,
        background: "black",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "scaleY(1)",
        transformOrigin: "top center"
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        }}
      >
        <polygon
          ref={polygonRef}
          points="25,75 75,75 75,75 25,75"
          fill="black"
        />
      </svg>
    </div>
  );
          }
