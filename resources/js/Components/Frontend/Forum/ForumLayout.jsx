"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ForumLayout({ children }) {
  return (
    <div className="forum-page">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
