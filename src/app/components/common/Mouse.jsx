"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Mouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Framer Motion을 사용한 부드러운 애니메이션
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX - 20); // 커서 중앙에 위치하도록 조정
      mouseY.set(clientY - 20);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="mouse-circle"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
