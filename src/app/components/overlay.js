"use client";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Overlay() {
  const overlayRef = useRef(null);
  const pathname = usePathname();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(overlayRef.current, {
      clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
      scaleY: 1,
      transformOrigin: "top center"
    });

    tl.to(overlayRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 0.8,
      ease: "power2.inOut"
    })
    .to(overlayRef.current, {
      scaleY: 0,
      duration: 0.6,
      ease: "power2.in",
      delay: 0.1
    });

  }, [pathname]);

  return (
    <div ref={overlayRef} className="overlay"></div>
  );
      }
