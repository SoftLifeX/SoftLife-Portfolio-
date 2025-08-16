import { motion, AnimatePresence } from "framer-motion";
import { scaleAnimation } from "./motion/scaleAnimation";

export default function Modal({ modal, projects }) {
  const currentProject = modal.index !== null ? projects[modal.index] : null;

  return (
    <AnimatePresence>
      {modal.active && currentProject && (
        <motion.div
          className="modal-container"
          variants={scaleAnimation}
          initial="initial"
          animate="enter"
          exit="closed"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "fixed",
          }}
        >
          <div className="modal-cursor">View</div>
          <p className="modal-label">{currentProject.title}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
