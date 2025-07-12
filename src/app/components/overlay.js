"use client";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Overlay() {
  const overlayRef = useRef(null);
  const pathname = usePathname();

  useGSAP(() => {
    // Print a visible log on the page (yellow bar at bottom)
    document.body.insertAdjacentHTML("beforeend",
      `<div style="
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        background:yellow;
        color:black;
        z-index:100000;
        padding:5px;
        font-size:12px;
      ">
        ✅ Overlay mounted for route: ${pathname}
      </div>`
    );

    const tl = gsap.timeline();

    tl.set(overlayRef.current, {
      clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
      scaleY: 1,
      transformOrigin: "top center",
      background: "red",
      boxShadow: "0 0 20px 10px yellow"
    });

    tl.to(overlayRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 0.8,
      ease: "power2.inOut",
    })
    .to(overlayRef.current, {
      scaleY: 0,
      duration: 0.6,
      delay: 0.1,
      ease: "power2.in",
    });

  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 9999,
        pointerEvents: "none",
        background: "red"
      }}
    ></div>
  );
        }
