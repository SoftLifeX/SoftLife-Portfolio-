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
  const pathname = usePathname();

  useEffect(() => {
    const polygon = overlayRef.current.querySelector("polygon");
    // animate the polygon points from your initial shape to full shape
    polygon.setAttribute(
      "points",
      "0,100 100,100 100,100 0,100"
    );
  }, []);

  useGSAP(() => {
    const overlay = overlayRef.current;
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
        inset: 0,
        background: "black",
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
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          points="25,75 75,75 75,75 25,75"
          fill="white"
          style={{
            transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          }}
        />
      </svg>
    </div>
  );
    }
