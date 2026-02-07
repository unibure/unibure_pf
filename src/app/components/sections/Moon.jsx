"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useResponsive, BREAKPOINTS } from "../../hooks/useResponsive";

export default function Moon() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const xValue = useResponsive({
    mobile: "0%",
    tablet: "0%",
    desktop: "-115%",
  });

  const moonSize = useResponsive({
    mobile: "300px",
    tablet: "550px",
    desktop: "60vh",
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true }); // 투명 배경을 위해 알파 값 필요
    let animationFrameId;
    let stars = [];

    // 별 스프라이트(빛나는 점)를 위한 오프스크린 캔버스 생성
    const spriteSize = 10; // 발광 효과를 위한 충분한 공간
    const halfSprite = spriteSize / 2;
    const starSprite = document.createElement("canvas");
    starSprite.width = spriteSize;
    starSprite.height = spriteSize;
    const spriteCtx = starSprite.getContext("2d");

    // 스프라이트에 빛나는 별을 한 번만 그림
    const gradient = spriteCtx.createRadialGradient(
      halfSprite,
      halfSprite,
      1,
      halfSprite,
      halfSprite,
      halfSprite,
    );
    gradient.addColorStop(0, "rgba(204, 255, 0, 1)"); // 중심 (Core)
    gradient.addColorStop(0.4, "rgba(204, 255, 0, 0.5)"); // 발광 (Glow)
    gradient.addColorStop(1, "rgba(204, 255, 0, 0)"); // 페이드 아웃 (Fade out)
    spriteCtx.fillStyle = gradient;
    spriteCtx.fillRect(0, 0, spriteSize, spriteSize);

    const initStars = (width, height) => {
      const isMobile = window.innerWidth <= BREAKPOINTS.mobile;
      const starCount = 2000;
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: Math.random() * width, // 진동을 위한 기준 위치 저장
          baseY: Math.random() * height,
          sizeScale: isMobile
            ? Math.random() * 0.3 + 0.2 // Mobile: 0.2 ~ 0.5
            : Math.random() * 0.5 + 0.2, // Desktop: 0.2 ~ 0.7
          opacityPhase: Math.random() * Math.PI * 2,
          opacitySpeed: 0.02 + Math.random() * 0.03,
          movePhase: Math.random() * Math.PI * 2,
          moveSpeed: 0.005 + Math.random() * 0.005,
          moveRangeX: Math.random() * 20 - 10,
          moveRangeY: Math.random() * 20 - 10,
        });
      }
    };

    const handleResize = () => {
      if (!container) return;

      const { clientWidth, clientHeight } = container;
      const dpr = window.devicePixelRatio || 1;

      // 불필요한 리셋을 방지하기 위해 크기가 실제로 변경된 경우에만 리사이즈
      if (
        canvas.width !== clientWidth * dpr ||
        canvas.height !== clientHeight * dpr
      ) {
        canvas.width = clientWidth * dpr;
        canvas.height = clientHeight * dpr;
        canvas.style.width = `${clientWidth}px`;
        canvas.style.height = `${clientHeight}px`;

        ctx.scale(dpr, dpr);
        initStars(clientWidth, clientHeight);
      }
    };

    // 초기 리사이즈
    handleResize();

    // 리사이즈 관찰자 (Resize observer)
    const resizeObserver = new ResizeObserver(() => {
      // 리사이즈가 매우 빈번한 경우 여기에 디바운스나 requestAnimationFrame을 추가할 수 있음,
      // 하지만 현재로서는 콘텐츠를 심하게 드래그하지 않는 한 직접 호출해도 무방함.
      handleResize();
    });
    resizeObserver.observe(container);

    const render = () => {
      // 캔버스 지우기
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, width, height);

      // 효율적인 루프 사용
      const count = stars.length;
      for (let i = 0; i < count; i++) {
        const star = stars[i];

        // 반짝임 업데이트
        star.opacityPhase += star.opacitySpeed;
        const opacity = 0.2 + (Math.sin(star.opacityPhase) + 1) * 0.4;

        // 움직임 업데이트
        star.movePhase += star.moveSpeed;
        const currentX =
          star.baseX + Math.sin(star.movePhase) * star.moveRangeX;
        const currentY =
          star.baseY + Math.cos(star.movePhase) * star.moveRangeY;

        // 이미지(스프라이트) 그리기 - arc + shadowBlur보다 훨씬 빠름
        ctx.globalAlpha = opacity;

        // currentX, currentY를 중심으로 그림
        // 스프라이트는 20x20. 1배~4배 크기를 원하면 20px 스프라이트를 확대/축소함.
        // sizeScale 사용.
        // 20px * 0.4 = 8px 시각적 크기 (발광 포함). 중심은 더 작음.
        const drawSize = spriteSize * star.sizeScale;
        ctx.drawImage(
          starSprite,
          currentX - drawSize / 2,
          currentY - drawSize / 2,
          drawSize,
          drawSize,
        );
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="moon-section">
      <motion.div
        ref={containerRef}
        className="moon-circle"
        style={{
          width: moonSize,
          height: moonSize,
          overflow: "hidden", // 별들이 원 밖으로 나가지 않게
          backgroundColor: "transparent",
          position: "relative",
        }}
        initial={{ opacity: 0, scale: 0, x: "0%", y: "0%", rotate: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: xValue,
          y: "0%",
          rotate: 360,
        }}
        transition={{
          // 전체적인 등장 (Opacity)
          opacity: { duration: 2 },

          // 크기 커짐 (2초)
          scale: { duration: 3, ease: "easeInOut" },

          // 위치 이동
          x: { duration: 1, delay: 3.5, ease: "easeInOut" },

          // 회전: 크기가 커진 후 무한 회전
          rotate: {
            delay: 2,
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </div>
  );
}
