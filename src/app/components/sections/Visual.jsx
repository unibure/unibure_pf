"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScrollContext } from "../../contexts/ScrollContext.jsx";

export default function Visual() {
  const { visualRef, contactRef, scrollToRef } = useScrollContext();

  const scrollToContact = () => {
    scrollToRef(contactRef);
  };

  return (
    <section ref={visualRef} id="visual">
      <div className="visual-section">
        <div className="container">
          <div className="visual-head">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
              className="typo"
            >
              <span className="tit-box">
                <motion.span
                  className="tit tit-1"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 3, delay: 3 }}
                >
                  Hello.
                </motion.span>
              </span>
              <span className="tit-box">
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 1.5, delay: 3.5 }}
                  className="tit tit-2"
                >
                  I'm <b className="primary">Goun</b>
                </motion.span>
              </span>
              <span className="tit-box">
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 1.5, delay: 4 }}
                  className="tit tit-3"
                >
                  Frontend Developer
                </motion.span>
              </span>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 5,
                ease: [0.68, -0.55, 0.27, 1.55],
              }}
              className="pp-button"
              onClick={scrollToContact}
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
