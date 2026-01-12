"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useScrollContext } from "../../contexts/ScrollContext.jsx";
import { useScreenSize } from "../../hooks/useResponsive";

export default function Visual() {
  const { visualRef, contactRef, scrollToRef } = useScrollContext();
  const { isMobile } = useScreenSize();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    scrollToRef(contactRef);
  };

  if (!mounted) {
    return null;
  }

  return (
    <section ref={visualRef} id="visual">
      <div className="visual-section">
        <div className="container">
          <div className="visual-head">
            <div className="typo">
              <span className="tit-box">
                <motion.span
                  className="tit tit-1"
                  initial={{
                    opacity: 0,
                    width: isMobile ? "100%" : 0,
                    y: isMobile ? 50 : 0,
                  }}
                  animate={{
                    opacity: 1,
                    width: "100%",
                    y: 0,
                  }}
                  transition={{
                    duration: 2,
                    delay: isMobile ? 2 : 3,
                    y: { duration: 1, delay: 2 },
                  }}
                >
                  Hello.
                </motion.span>
              </span>
              <span className="tit-box">
                <motion.span
                  className="tit tit-2"
                  initial={{
                    opacity: 0,
                    width: isMobile ? "100%" : 0,
                    y: isMobile ? 50 : 0,
                  }}
                  animate={{
                    opacity: 1,
                    width: "100%",
                    y: 0,
                  }}
                  transition={{
                    duration: 2,
                    delay: isMobile ? 1 : 3.5,
                    y: { duration: 1.2, delay: 2.7 },
                  }}
                >
                  I'm <b className="primary">Goun</b>
                </motion.span>
              </span>
              <span className="tit-box">
                <motion.span
                  initial={{
                    opacity: 0,
                    width: isMobile ? "100%" : 0,
                    y: isMobile ? 50 : 0,
                  }}
                  animate={{ opacity: 1, width: "100%", y: 0 }}
                  transition={{
                    duration: 2,
                    delay: isMobile ? 1 : 4,
                    y: {
                      duration: 1.2,
                      delay: 3.5,
                    },
                  }}
                  className="tit tit-3"
                >
                  Frontend Developer
                </motion.span>
              </span>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: isMobile ? 4.3 : 5,
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
