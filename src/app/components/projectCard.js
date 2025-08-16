"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.35, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function ProjectCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image src={item.img} alt={item.title} className="project-img" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="modal-container"
            variants={scaleAnimation}
            initial="initial"
            animate="enter"
            exit="closed"
          >
            <div className="modal-content" style={{ backgroundColor: item.color}} >
              <Image src={item.img} alt={item.title} className="modal-image" />
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button"
                variants={scaleAnimation}
            initial="initial"
            animate="enter"
            exit="closed"
              >
                View
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
