"use client";

import { motion } from "framer-motion";
import { useResponsive } from "../../hooks/useResponsive";

export default function Moon() {
  const xValue = useResponsive({
    mobile: "0%",
    tablet: "0%",
    desktop: "-115%",
  });
  return (
    <div className="moon-section">
      <motion.div
        className="moon-circle"
        initial={{ opacity: 0, scale: 0, x: "0%", y: "0%" }}
        animate={{
          opacity: 1,
          scale: 1,
          x: xValue,
          y: "0%",
          // rotate: 360, // 360도 회전 추가
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          scale: { duration: 2, delay: 0 },
          y: { duration: 1, delay: 2 },
          x: { duration: 1, delay: 2 },
          // rotate: {
          //   duration: 20, // 20초 동안 한 바퀴
          //   ease: "linear", // 선형 애니메이션으로 부드럽게
          //   repeat: Infinity, // 무한 반복
          // },
        }}
      >
        <div className="outer">{/* stroke 애니메이션 추가 하기 */}</div>
        <div className="inner"></div>
        {/* 궤도 위의 점 - moon-circle의 border 주변을 돌도록 수정 */}
        <motion.div
          className="orbit-dot"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            rotate: 360,
          }}
          transition={{
            opacity: { delay: 2.5 },
            delay: 2,
            duration: 10, // 궤도 점은 15초로 조금 빠르게
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
}
