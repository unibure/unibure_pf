"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.div className="background">
      <img
        src={`/images/background-space.jpg`}
        alt="background-space"
        className="back-img"
      />
    </motion.div>
  );
}
