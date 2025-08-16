import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { scaleAnimation } from "./motion/scaleAnimation";

export default function ProjectCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image src={item.img} alt={item.title} width={600} height={400} />

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="project-modal"
            variants={scaleAnimation}
            initial="initial"
            animate="enter"
            exit="closed"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={300}
              height={200}
              className="modal-image"
            />
            <button className="view-btn">View</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
