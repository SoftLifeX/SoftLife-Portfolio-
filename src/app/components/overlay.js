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
  const svgRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const svg = svgRef.current;

    // starts tiny
    svg.style.transform = "scale(0)";
    svg.style.transition = "transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

    // after paint
    setTimeout(() => {
      svg.style.transform = "scale(1)";
    }, 50);
  }, []);

  useGSAP(() => {
    const overlay = overlayRef.current;
    gsap.to(overlay, {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 3,
      delay: 3,
      ease: ease
    });
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "white",
        zIndex: 9999,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "scaleY(1)",
        transformOrigin: "top center"
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          points="25,75 75,75 75,75 25,75"
          fill="black"
        />
      </svg>
    </div>
  );
      }
