"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

// 무한 반복 텍스트 컴포넌트
function InfiniteText({ children, baseVelocity = 100 }) {
  // x축 이동값을 위한 motion value
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  // 스크롤 속도를 부드럽게 보정
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 100,
  });
  // 속도값을 0~1000 → 0~5로 변환
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  // baseX와 velocityFactor를 곱해서 x값을 %로 변환 (무한 반복 효과)
  // const x = useTransform(baseX, (v) => `${v % 100}%`);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  // 방향 전환을 위한 ref
  const directionFactor = useRef(1);

  // 매 프레임마다 baseX 값을 업데이트 (애니메이션 효과)
  useAnimationFrame((t, delta) => {
    // 기본 이동량 계산
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // 스크롤 방향에 따라 방향 전환
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    // 속도에 따라 추가 이동량 계산
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    // baseX 값 갱신
    baseX.set(baseX.get() + moveBy);
  });

  return (
    // 한 줄로 텍스트가 이어지도록 스타일 적용
    <motion.div
      className="parallax"
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      <motion.div className="scroller" style={{ x }}>
        {/* 텍스트를 여러 번 반복해서 무한 루프처럼 보이게 함 */}
        <span style={{ marginRight: 40 }}>{children}</span>
        <span style={{ marginRight: 40 }}>{children}</span>
        <span style={{ marginRight: 40 }}>{children}</span>
        <span style={{ marginRight: 40 }}>{children}</span>
      </motion.div>
    </motion.div>
  );
}

export default function MainText() {
  return (
    <div className="main-typo">
      {/* 왼쪽으로 흐르는 텍스트 */}
      <InfiniteText baseVelocity={-2}>UNIBURE PORTFOLIO</InfiniteText>
      {/* 오른쪽으로 흐르는 텍스트 */}
      <InfiniteText baseVelocity={2}>UNIBURE PORTFOLIO</InfiniteText>
    </div>
  );
}
