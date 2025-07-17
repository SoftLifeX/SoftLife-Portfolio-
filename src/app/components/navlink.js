'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const NavLink = ({ link }) => {
  const pathname = usePathname();
  const isActive = pathname === link.url;

  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [pillPos, setPillPos] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const updatePill = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPillPos({
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  useEffect(() => {
    if (hovered || isActive) {
      updatePill();
    }
  }, [hovered, isActive]);

  return (
    <span
      className="navlink-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
    >
      <Link
        href={link.url}
        className={`navlink ${isActive ? "active" : ""}`}
      >
        <span>{link.title}</span>
      </Link>

      {(hovered || isActive) && (
        <motion.div
          className="pill"
          layoutId="nav-pill"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: pillPos.width,
            height: pillPos.height,
          }}
        />
      )}
    </span>
  );
};

export default NavLink;
