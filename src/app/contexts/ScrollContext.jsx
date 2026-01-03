"use client";
import { createContext, useContext, useRef, useState, useEffect } from "react";
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

  // 활성 섹션 상태 추가
  const [activeSection, setActiveSection] = useState("");

  //스크롤 이벤트로 활성 섹션 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // 화면 중앙 기준

      //각 섹션의 위치 확인
      const sections = [
        { name: "about", ref: aboutRef },
        { name: "career", ref: careerRef },
        { name: "project", ref: projectRef },
        { name: "contact", ref: contactRef },
      ];

      //현재 화면 중앙에 있는 섹션 찾기
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop; // 섹션의 상단 위치
          const sectionHeight = section.ref.current.offsetHeight; // 섹션의 높이

          //화면 중앙이 섹션 안에 있는지 확인
          if (
            scrollPosition >= sectionTop && //화면 중앙이 섹션상단 보다 아래에 있는지 확인
            scrollPosition < sectionTop + sectionHeight // 화면 중앙이 섹션하단보다 위에 있는지 확인
          ) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); //초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    activeSection,
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
