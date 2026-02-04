"use client";

import React, { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Use a ref for stars to maintain state across resizes without clearing
    const starsRef = { current: [] };

    // Realistic Star colors
    const starColors = ["#ffffff", "#bfdfff", "#fff4e8", "#ffeaa7"];

    const initStars = (width, height, count) => {
      const stars = starsRef.current;
      // If we need more stars, add them
      if (stars.length < count) {
        const toAdd = count - stars.length;
        for (let i = 0; i < toAdd; i++) {
          const depth = Math.random();
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.5 * depth + 0.5,
            color: starColors[Math.floor(Math.random() * starColors.length)],
            alpha: Math.random() * 0.8 + 0.2,
            twinkleSpeed: Math.random() * 0.05 + 0.01,
            twinklePhase: Math.random() * Math.PI * 2,
            driftX: (Math.random() - 0.5) * 0.05 * depth,
            driftY: (Math.random() - 0.5) * 0.05 * depth,
          });
        }
      } else if (stars.length > count) {
        // If we have too many, remove some
        stars.splice(count);
      }
    };

    const resizeCanvas = () => {
      const prevWidth = canvas.width;
      const prevHeight = canvas.height;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Scale existing stars relative to the new size
      if (prevWidth > 0 && prevHeight > 0 && starsRef.current.length > 0) {
        const scaleX = canvas.width / prevWidth;
        const scaleY = canvas.height / prevHeight;

        starsRef.current.forEach((star) => {
          star.x *= scaleX;
          star.y *= scaleY;
        });
      }

      // Adjust star count based on new area (0.0003 stars per pixel approx)
      const idealCount = Math.floor(canvas.width * canvas.height * 0.0003);
      // Clamp count to reasonable limits (min 500, max 3000)
      const constrainedCount = Math.min(Math.max(idealCount, 500), 3000);

      initStars(canvas.width, canvas.height, constrainedCount);
    };

    window.addEventListener("resize", resizeCanvas);

    // Initial setup
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep space background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height),
      );
      gradient.addColorStop(0, "#080816ff");
      gradient.addColorStop(0.5, "#050510");
      gradient.addColorStop(1, "#000000");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars from the ref
      starsRef.current.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkleVal = Math.sin(star.twinklePhase);
        const currentAlpha = star.alpha + twinkleVal * 0.5 * star.alpha;

        star.x += star.driftX;
        star.y += star.driftY;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

        if (star.size > 1.2) {
          ctx.shadowBlur = star.size * 3;
          ctx.shadowColor = star.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default StarBackground;
