"use client";
import { createContext, useContext, useRef } from "react";
const ScrollContext = createContext();

//스크롤 위치를 관리하는 컨텍스트 (Context API로 스크롤 함수 통합 관리)

// react에서 제공하는 함수로, 컴포넌트 간 데이터를 전역적으로 공유할 수 있는 Context를 만든다.
// 1. props drilling 방지: 여러 단계의 컴포넌트를 거쳐 props를 전달하지 않아도 된다.
// 2. 전역 상태 관리: Context Provider로 감싼 모든 하위 컴포넌트에서 데이터에 접근 할 수 있다.

export function ScrollProvide({ children }) {
  // 모든 섹션 ref 관리
  const aboutRef = useRef(null);
  const careerRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  //ref를 사용한 스크롤 함수
  const scrollToRef = (ref) => {
    console.log(ref);
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  //상단으로 스크롤 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //네비게이션 클릭 핸들러 (ref 기반으로 수정)
  const handleNavClick = (e, sectionName) => {
    console.log(sectionName);
    e.preventDefault();

    //섹션 이름에 따라 해당 ref 찾기
    let targetRef = null;
    switch (sectionName) {
      case "about":
        targetRef = aboutRef;
        break;
      case "career":
        targetRef = careerRef;
        break;
      case "project":
        targetRef = projectRef;
        break;
      case "contact":
        targetRef = contactRef;
        break;
      default:
        return;
    }
    //ref를 사용해서 스크롤
    scrollToRef(targetRef);
  };

  const value = {
    aboutRef,
    careerRef,
    projectRef,
    contactRef,
    scrollToRef,
    scrollToTop,
    handleNavClick,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("useScrollContext must be used within ScrollProvider");
  }
  return context;
}
