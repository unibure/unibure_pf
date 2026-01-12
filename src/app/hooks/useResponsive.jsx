"use client";
import { useEffect, useState } from "react";

// 반응형 훅을 별도 파일로 분리해 재사용 가능하게 구성

//브레이크 포인트 상수
export const BREAKPOINTS = {
  mobile: 767,
  tablet: 1399,
};

//화면 크기에 따라 반응형 값을 반환하는 커스텀 훅

export function useResponsive(values) {
  const [currentValue, setCurrentValue] = useState(() => {
    //ssr 대응 : 초기값은 desktop 값으로 설정한다
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.mobile) {
        return values.mobile;
      } else if (width <= BREAKPOINTS.tablet) {
        return values.tablet;
      }
    }
    return values.desktop;
  });

  useEffect(() => {
    const updateValue = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.mobile) {
        setCurrentValue(values.mobile);
      } else if (width <= BREAKPOINTS.tablet) {
        setCurrentValue(values.tablet);
      } else {
        setCurrentValue(values.desktop);
      }
    };

    //초기 설정
    updateValue();

    //리사이즈 이벤트 리스너
    window.addEventListener("resize", updateValue);

    return () => window.removeEventListener("resize", updateValue);
  }, [values.mobile, values.tablet, values.desktop]);

  return currentValue;
}

// 현재 화면 크기 정보를 반환하는 커스텀 훅
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        width,
        isMobile: width <= BREAKPOINTS.mobile,
        isTablet: width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet,
        isDesktop: width > BREAKPOINTS.tablet,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  return screenSize;
}
