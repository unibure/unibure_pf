"use client";

import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useScrollContext } from "../../contexts/ScrollContext";

export default function Project() {
  const { projectRef } = useScrollContext();

  // card 내용
  const cardList = [
    {
      name: "FLEX",
      thumb: "flex",
      link: "https://flextools.co.kr",
      project: "FLEX Tools",
      type: "클라이언트 프로젝트 | 2주 개발",
      stack: "HTML, CSS, JavaScript, PHP, MySQL, JSON, 그누보드",
      feature: [
        "회원가입/로그인/회원정보 관리",
        "제품 등록 5단계 프로세스 구현 (제품선택 → 정보입력 → 등록완료)",
        "JSON 기반 제품 데이터 관리",
      ],
    },
    {
      name: "V Golf",
      thumb: "vgolf",
      link: "http://vgolf.ai/ko/",
      project: "Pluxity Brand Page - V Golf",
      type: "클라이언트 프로젝트 | 2주 개발",
      stack: "HTML, CSS, JavaScript, GSAP, PHP, MySQL, 그누보드",
      feature: [
        "GSAP 스크롤 트리그 애니메이션 구현",
        "반응형 브랜드 스토리텔링 페이지",
        "그누보드 CMS 콘텐츠 관리 시스템",
      ],
    },
    {
      name: "TXR",
      thumb: "txr",
      link: "https://www.txr.kr",
      project: "TXR",
      type: "클라이언트 프로젝트 | 3주 개발",
      stack: "HTML, CSS, JavaScript, PHP, MySQL, 그누보드",
      feature: [
        "API 연동 기업 공시정보 시스템",
        "쿼리파라미터 기반 동적 게시판 관리",
        "그누보드 CMS 콘텐츠 관리 시스템",
      ],
    },
  ];
  const ecatalogCardList = [
    {
      name: "WISENUT",
      thumb: "wisenut",
      link: "https://ecatalog.rgbcom.kr/WISENUT_use",
      project: "WISENUT",
      type: "클라이언트 프로젝트 | 1주 개발",
      stack: "React,Tailwind CSS, Framer Motion",
      feature: [
        "React 컴포넌트 기반 모듈화 개발",
        "Framer Motion을 활용한 인터랙티브 애니메이션",
        "Tailwind CSS 반응형 UI/UX 구현",
      ],
    },
    {
      name: "DT",
      thumb: "dt",
      link: "https://ecatalog.rgbcom.kr/DT/#/ko/intro",
      project: "DT",
      type: "클라이언트 프로젝트 | 1주 개발",
      stack: "React,Tailwind CSS, Framer Motion",
      feature: [
        "React 컴포넌트 기반 모듈화 개발",
        "Framer Motion을 활용한 인터랙티브 애니메이션",
        "Tailwind CSS 반응형 UI/UX 구현",
      ],
    },
  ];

  const infoControls = cardList.map(() => useAnimationControls());
  const contents = [useRef(null), useRef(null)];

  //스크롤 방향 감지
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // 스크롤 방향 감지
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll), { passive: true };
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 위에서 아래로 30% 일때 트리거
  const isInViewDown = contents.map((ref) =>
    useInView(ref, {
      amount: 0.3, //요소의 30%가 보일때 트리거
      once: false, // 반복 트리거
    })
  );

  // 아래에서 위로 0% 일때 트리거
  const isInViewUp = contents.map((ref) =>
    useInView(ref, {
      amount: 0, //요소의 0%가 보일때 트리거
      once: false, // 반복 트리거
    })
  );

  //스크롤 방향에 따라 선택
  const isInViews = contents.map((_, index) =>
    scrollDirection === "down" ? isInViewDown[index] : isInViewUp[index]
  );

  // 첫 번째 섹션용 ref
  const cardRefs = cardList.map(() => useRef(null));

  // 두 번째 섹션용 별도 ref
  const cardRefs2 = ecatalogCardList.map(() => useRef(null));

  // 첫 번째 섹션용 스크롤 진행률
  const scrollYProgress = cardRefs.map((ref, index) => {
    const offset = [
      ["0% 100%", "0% 50%"], // 카드가 화면에 나타날 때 시작
      ["0% 100%", "0% 50%"],
      ["0% 100%", "0% 50%"],
    ];
    return useScroll({
      target: ref,
      offset: offset[index],
    }).scrollYProgress;
  });

  // 두 번째 섹션용 스크롤 진행률
  const scrollYProgress2 = cardRefs2.map((ref, index) => {
    const offset = [
      ["0% 100%", "0% 50%"],
      ["0% 100%", "0% 50%"],
      ["0% 100%", "0% 50%"],
    ];
    return useScroll({
      target: ref,
      offset: offset[index],
    }).scrollYProgress;
  });

  const cardWidths = scrollYProgress.map((progress) =>
    useTransform(progress, [0, 1], ["50%", "100%"])
  );
  const cardWidths2 = scrollYProgress2.map((progress) =>
    useTransform(progress, [0, 1], ["50%", "100%"])
  );

  return (
    <section ref={projectRef} id="project">
      <div className="container">
        <div className="project-section">
          <h3 className="section-title">Project</h3>
          <div className="wrapper">
            <div ref={contents[0]} className="content">
              <motion.div
                className={`project-head ${isInViews[0] ? "active" : ""}`}
              >
                <h4 className="project-title">Homepage</h4>
                <span className="info">
                  "다양한 기업 홈페이지 제작 경험" <br />
                  반응형 디자인, SEO 최적화, 관리자 페이지 개발 등등
                </span>
              </motion.div>

              <motion.div className="project-body">
                <div className="card-ls">
                  {cardList.map((item, index) => (
                    <motion.div
                      ref={cardRefs[index]}
                      className="card"
                      key={index}
                      style={{ width: cardWidths[index] }}
                    >
                      <h4 className="project-name">
                        0{index + 1}. {item.name}{" "}
                      </h4>
                      <motion.div
                        onHoverStart={() => {
                          console.log("hover start");
                          infoControls[index].start({
                            borderRadius: "40px",
                          });
                        }}
                        onHoverEnd={() => {
                          infoControls[index].start({
                            borderRadius: "10px",
                          });
                        }}
                        className="item"
                      >
                        <span className="thumb">
                          <img
                            src={`/images/project-${item.thumb}-thumb.png`}
                            alt={item.name}
                            loading="lazy"
                          />
                        </span>
                        <motion.div
                          initial={{
                            opacity: 1,
                            borderRadius: "10px",
                          }}
                          animate={infoControls[index]}
                          transition={{
                            opacity: { duration: 0.3, delay: 0.2 },
                            borderRadius: { duration: 0.5, delay: 0.2 },
                            ease: [0.175, 0.885, 0.32, 1.275],
                          }}
                          className="project-info cursor-point"
                        >
                          <ul>
                            <li className="info">
                              <span className="key">Project : </span>
                              <span className="value">{item.project}</span>
                            </li>
                            <li className="info">
                              <span className="key">Type : </span>
                              <span className="value">{item.type}</span>
                            </li>
                            <li className="info">
                              <span className="key">Stack : </span>
                              <span className="value">{item.stack}</span>
                            </li>
                            <li className="info">
                              <span className="key">Role :</span>
                              <ul className="value feature bullet">
                                {item.feature.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            </li>
                          </ul>
                          <motion.span className="button">
                            <Link
                              target="_blank"
                              href={`${item.link}`}
                              className="button"
                            >
                              View Project
                            </Link>
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div ref={contents[1]} className="content">
              <motion.div
                className={`project-head ${isInViews[1] ? "active" : ""}`}
              >
                <h4 className="project-title">E-catalog</h4>
                <span className="info">
                  "React로 구현한 인터랙티브 전자카탈로그" <br />
                  반응형 디자인, 다양한 인터랙션, PDF 형식의 <br /> 정적
                  카탈로그를 동적 웹 경험으로 전환
                </span>
              </motion.div>

              <motion.div className="project-body">
                <div className="card-ls">
                  {ecatalogCardList.map((item, index) => (
                    <motion.div
                      ref={cardRefs2[index]} // 별도 ref 사용
                      className="card"
                      key={`second-${index}`} // 고유한 key
                      style={{ width: cardWidths2[index] }} // 별도 width
                    >
                      <h4 className="project-name">
                        0{index + 1}. {item.name}{" "}
                      </h4>
                      <motion.div
                        onHoverStart={() => {
                          infoControls[index].start({
                            borderRadius: "40px",
                          });
                        }}
                        onHoverEnd={() => {
                          infoControls[index].start({
                            borderRadius: "10px",
                          });
                        }}
                        className="item"
                      >
                        <span className="thumb">
                          <img
                            src={`/images/project-${item.thumb}-thumb.png`}
                            alt={item.name}
                            loading="lazy"
                          />
                        </span>
                        <motion.div
                          initial={{
                            opacity: 1,
                            borderRadius: "10px",
                          }}
                          animate={infoControls[index]}
                          transition={{
                            opacity: { duration: 0.3, delay: 0.2 },
                            borderRadius: { duration: 0.5, delay: 0.2 },
                            ease: [0.175, 0.885, 0.32, 1.275],
                          }}
                          className="project-info cursor-point"
                        >
                          <ul>
                            <li className="info">
                              <span className="key">Project : </span>
                              <span className="value">{item.project}</span>
                            </li>
                            <li className="info">
                              <span className="key">Type : </span>
                              <span className="value">{item.type}</span>
                            </li>
                            <li className="info">
                              <span className="key">Stack : </span>
                              <span className="value">{item.stack}</span>
                            </li>
                            <li className="info">
                              <span className="key">Role : </span>
                              <ul className="value feature bullet">
                                {item.feature.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            </li>
                          </ul>
                          <motion.span className="button">
                            <Link
                              target="_blank"
                              href={`${item.link}`}
                              className="button"
                            >
                              View Project
                            </Link>
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
