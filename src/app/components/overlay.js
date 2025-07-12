"use client";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { CSSPlugin } from "gsap";
import CustomEase from "gsap/CustomEase";

// Register plugins
gsap.registerPlugin(CSSPlugin, CustomEase);

const ease = CustomEase.create("hop", "0.9, 0, 0.1, 1");
const clipEase = CustomEase.create("scale", "0.250, 0.460, 0.450, 0.940");

export default function Overlay() {
  const overlayRef = useRef(null);
  const pathname = usePathname();

  useGSAP(() => {
    const overlay = overlayRef.current;

    const tl = gsap.timeline();

    // Start state: small clip-path + scaleY 1
    tl.set(overlay, {
      css: {
        clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        transform: "scaleY(1)",
        transformOrigin: "top center"
      }
    });

    // Animate clip-path to full height polygon
    tl.to(overlay, {
      css: {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      },
      duration: 1.2,
      ease: clipEase
    })
    // Then scaleY collapses it upwards
    .to(overlay, {
      css: {
        transform: "scaleY(0)"
      },
      duration: 1,
      delay: 0.3,
      ease: ease
    });

  }, [pathname]);

  return (
    <div ref={overlayRef} className="overlay"></div>
  );
        }
