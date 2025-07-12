"use client";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Overlay() {
  const overlayRef = useRef(null);
  const pathname = usePathname();

  useGSAP(() => {
    const overlay = overlayRef.current;
    gsap.set(overlay, {
      scaleY: 1,
      transformOrigin: "top center"
    });

    gsap.to(overlay, {
      scaleY: 0,
      duration: 1.5,
      ease: "power2.inOut",
      delay: 0.3
    });

  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "black",
        zIndex: 9999,
        pointerEvents: "none"
      }}
    ></div>
  );
      }
