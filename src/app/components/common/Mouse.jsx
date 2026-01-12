"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useScreenSize } from "../../hooks/useResponsive";

export default function Mouse() {
  const { isDesktop } = useScreenSize();
  const [mounted, setMounted] = useState(false);

  // Framer Motion을 사용한 부드러운 애니메이션
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // cursor-point 요소 위에 있는지 추적하는 상태
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    //데스크탑에서만 마우스 이벤트 리스너 등록
    if (!isDesktop || !mounted) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX - 20); // 커서 중앙에 위치하도록 조정
      mouseY.set(clientY - 20);

      // 마우스 위치에서 요소 확인
      const element = document.elementFromPoint(clientX, clientY);
      if (element) {
        // cursor-point 클래스를 가진 요소 또는 그 자식 요소인지 확인
        const cursorPointEl = element.closest(".cursor-point");
        setIsHovering(!!cursorPointEl);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isDesktop, mounted]);

  //데스크톱이 아니면 렌더링하지 않음
  if (!isDesktop || !mounted) return null;

  return (
    <motion.div
      className={`mouse-circle ${isHovering ? "cursor-point-active" : ""}`}
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovering ? 0.7 : 1, //호버 시 크기 조정
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}
