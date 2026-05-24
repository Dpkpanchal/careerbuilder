"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ScreenshotLightbox({ isOpen, onClose, shots, index }) {
  if (!shots || shots.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="lightbox-container"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
          >
            {/* CLOSE BUTTON */}
            <button className="lightbox-close" onClick={onClose}>
              <X size={20} />
            </button>

            {/* IMAGE & INFO */}
            <div className="lightbox-content">
              <button
                className="lightbox-nav left"
                onClick={() => onClose("prev")}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="lightbox-inner">
                <img
                  src={shots[index].imageSrc}
                  alt={shots[index].label}
                  className="lightbox-image"
                />

                <div className="lightbox-caption">
                  <h5>{shots[index].label}</h5>
                  <p>{shots[index].description}</p>
                </div>
              </div>

              <button
                className="lightbox-nav right"
                onClick={() => onClose("next")}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
