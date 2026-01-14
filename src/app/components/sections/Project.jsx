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
import { useScreenSize } from "../../hooks/useResponsive";

export default function Project() {
  const { projectRef } = useScrollContext();
  const { isMobile } = useScreenSize();
  // card 내용
  const cardList = [
    {
      thumb: "flex",
      link: "https://flextools.co.kr",
      project: "국내 홈페이지 신규 구축 | 4주 개발",
      stack: "HTML, CSS, JavaScript, PHP, MySQL, JSON, 그누보드",
      contribution: [
        "단독 개발자로서 프로젝트 전 범위(UI, 기능, CMS 연동) 담당",
      ],
      role: [
        "웹 UI 개발 (메인/서브 페이지)",
        "회원 인증 및 계정 기능 개발 (가입/로그인/정보 수정)",
        "제품 일련번호 등록 프로세스 개발",
        "관리자 CMS 연동 및 데이터 처리",
      ],
      description: [
        "오프라인 구매 제품 인증을 위한 제품 일련번호 등록 기능 구현",
        "카테고리 → 상세 선택 → 일련번호 → 완료의 5-step 등록 프로세스 설계",
        "JSON 기반 등록 데이터를 회원 계정과 매핑하여 CMS로 전달",
        "관리자 CMS에서 회원별 등록 제품 조회가 가능하도록 데이터 연동",
      ],
    },
    {
      thumb: "vgolf",
      link: "http://vgolf.ai/ko/",
      project: "브랜드 페이지 구축 | 2주 개발",
      stack: "HTML, CSS, JavaScript, GSAP, PHP, MySQL, 그누보드",
      contribution: [
        "단독 개발자로서 프로젝트 전 범위(UI, 기능, CMS 연동) 담당",
      ],
      role: [
        "GSAP ScrollTrigger 기반 스크롤 애니메이션 구현",
        "반응형 브랜드 페이지 UI 개발",
        "온라인 문의 및 소개서 다운로드 기능 개발",
        "그누보드 CMS 기반 문의/콘텐츠 관리 연동",
      ],
      description: [
        "클라이언트 요청에 따라 스크롤 기반 브랜드 스토리텔링 경험 설계",
        "GSAP 인터랙션을 통해 메시지 전달력 및 페이지 몰입도 강화",
        "온라인 문의를 통한 상담 접점 확보 및 사용자 접근성 개선",
        "개인정보 입력 기반 PDF 자료 다운로드를 통해 브랜드 정보 전달 효율화",
        "CMS 연동으로 문의 처리 및 콘텐츠 운영 자동화 지원",
      ],
    },
    {
      thumb: "txr",
      link: "https://www.txr.kr",
      project: "홈페이지 리뉴얼 프로젝트 | 4주 개발",
      stack: "HTML, CSS, JavaScript, PHP, MySQL, 그누보드",
      contribution: [
        "단독 개발자로서 프로젝트 전 범위(UI, 기능, CMS 연동) 담당",
      ],
      role: [
        "API 연동 기업 공시정보 시스템",
        "쿼리파라미터 기반 동적 게시판 관리",
        "그누보드 CMS 콘텐츠 관리 시스템",
      ],
      description: [
        "기존 웹사이트 리뉴얼을 통해 UI/UX 및 콘텐츠 구조 개선",
        "API 기반 기업 공시정보 게시판 기능 개발",
        "쿼리 파라미터 기반 동적 게시판 구성으로 확장성 확보",
        "그누보드 CMS 연동을 통한 콘텐츠 및 게시물 운영 효율화",
        "퍼블리싱부터 서버 개발까지 end-to-end 개발 수행",
      ],
    },
  ];
  const ecatalogCardList = [
    {
      thumb: "wisenut",
      link: "https://ecatalog.rgbcom.kr/WISENUT_use",
      project: "전자카탈로그 리뉴얼 프로젝트 | 2주 개발",
      stack: "React,Tailwind CSS, Framer Motion",
      contribution: [
        "단독 개발자로서 프로젝트 전 범위(UI, 기능, 인터랙션) 담당",
      ],
      role: [
        "React 컴포넌트 기반 모듈화 개발",
        "Framer Motion을 활용한 인터랙티브 애니메이션",
        "Tailwind CSS 반응형 UI/UX 구현",
      ],
      description: [""],
    },
    {
      thumb: "dt",
      link: "https://ecatalog.rgbcom.kr/DT/#/ko/intro",
      project: "전자카탈로그 리뉴얼 프로젝트 | 2주 개발",
      stack: "React,Tailwind CSS, Framer Motion",
      contribution: [
        "단독 개발자로서 프로젝트 전 범위(UI, 기능, 인터랙션) 담당",
      ],
      role: [
        "React 컴포넌트 기반 모듈화 개발",
        "Framer Motion을 활용한 인터랙티브 애니메이션",
        "Tailwind CSS 반응형 UI/UX 구현",
      ],
      description: [""],
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
                  반응형 디자인, SEO 최적화, 관리자 페이지 개발 등
                </span>
              </motion.div>

              <motion.div className="project-body">
                <div className="card-ls">
                  {cardList.map((item, index) => (
                    <motion.div
                      ref={cardRefs[index]}
                      className="card"
                      key={index}
                      style={{ width: isMobile ? "100%" : cardWidths[index] }}
                    >
                      <div className="item">
                        <span className="thumb">
                          <img
                            src={`/images/project-${item.thumb}-thumb.jpg`}
                            alt={item.project}
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
                              <span className="key">Project</span>
                              <span className="value">{item.project}</span>
                            </li>
                            <li className="info">
                              <span className="key">Stack</span>
                              <span className="value">{item.stack}</span>
                            </li>
                            <li className="info">
                              <span className="key">Contribution</span>
                              <span className="value">{item.contribution}</span>
                            </li>
                            <li className="info list-type">
                              <span className="key">Role</span>
                              <ul className="value feature bullet">
                                {item.role.map((role, index) => (
                                  <li key={index}>{role}</li>
                                ))}
                              </ul>
                            </li>
                            <li className="info list-type">
                              <span className="key">Description</span>
                              <ul className="value feature bullet">
                                {item.description.map((desc, index) => (
                                  <li key={index}>{desc}</li>
                                ))}
                              </ul>
                            </li>
                          </ul>
                          <motion.span className="button">
                            <Link
                              target="_blank"
                              href={`${item.link}`}
                              className="btn"
                            >
                              View Project
                            </Link>
                          </motion.span>
                        </motion.div>
                      </div>
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
                      style={{ width: isMobile ? "100%" : cardWidths2[index] }} // 별도 width
                    >
                      <div className="item">
                        <span className="thumb">
                          <img
                            src={`/images/project-${item.thumb}-thumb.jpg`}
                            alt={item.project}
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
                              <span className="key">Project</span>
                              <span className="value">{item.project}</span>
                            </li>
                            <li className="info">
                              <span className="key">Stack</span>
                              <span className="value">{item.stack}</span>
                            </li>
                            <li className="info">
                              <span className="key">Contribution</span>
                              <span className="value">{item.contribution}</span>
                            </li>
                            <li className="info list-type">
                              <span className="key">Role</span>
                              <ul className="value feature bullet">
                                {item.role.map((role, index) => (
                                  <li key={index}>{role}</li>
                                ))}
                              </ul>
                            </li>
                            {/* <li className="info list-type">
                              <span className="key">Description</span>
                              <ul className="value feature bullet">
                                {item.description.map((desc, index) => (
                                  <li key={index}>{desc}</li>
                                ))}
                              </ul>
                            </li> */}
                          </ul>
                          <motion.span className="button">
                            <Link
                              target="_blank"
                              href={`${item.link}`}
                              className="btn"
                            >
                              View Project
                            </Link>
                          </motion.span>
                        </motion.div>
                      </div>
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
