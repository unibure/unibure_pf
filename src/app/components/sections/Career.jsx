"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useScrollContext } from "../../contexts/ScrollContext";

export default function Career() {
  const { careerRef } = useScrollContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const variants = (delay) => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <section
      ref={careerRef}
      id="career"
      className={isInView ? "section-active" : ""}
    >
      <div className="container">
        <div ref={ref} className="career-section section-layout">
          <h3 className="section-title">Career</h3>
          <div className="career-cont">
            <motion.div
              variants={variants(0)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="career-item"
            >
              <h4 className="sbj">WORK EXPERIENCE</h4>
              <div className="head">
                <span className="year">2022.12 ~ 2025.10</span>
                <span className="company">
                  웹 에이전시 알지비커뮤니케이션즈
                </span>
              </div>
              <ul className="desc">
                <li className="item">
                  HTML, CSS, JavaScript 기반의 웹 퍼블리싱
                </li>
                <li className="item">홈페이지 기획 및 디자인 및 유지보수</li>
                <li className="item">PHP, 그누보드 기반의 홈페이지 개발</li>
                <li className="item">
                  PHP, React, Next.js 기반의 전자카탈로그 개발
                </li>
                <li className="item">
                  가비아/카페24 웹호스팅 환경에서 프로젝트 배포 및 운영 경험
                </li>
                <li className="item">
                  도메인 연결, DNS 설정, SSL(Let’s Encrypt) 적용 및 자동 갱신
                  구축
                </li>
                <li className="item">
                  phpMyAdmin·DBeaver 기반 MySQL 관리 및 DB 백업/마이그레이션
                  수행
                </li>
                <li className="item">
                  Apache 웹 서버 및 SSH(Putty) 기반 서버 운영 경험
                </li>
                <li className="item">
                  가비아 VPS(Ubuntu) 초기 서버 셋업 및 구축 경험
                </li>
              </ul>
            </motion.div>
            <motion.div
              ref={ref}
              variants={variants(0.2)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="career-item"
            >
              <h4 className="sbj">EDUCATION</h4>
              <div className="head">
                <span className="year">2022.06 ~ 2022.12</span>
                <span className="company">그린 아카데미 - 우수상 수료</span>
              </div>
              <ul className="desc">
                <li className="item">
                  (디지털디자인) UI/UX 반응형 웹디자인 & 웹퍼블리셔(디자인&코딩)
                  양성
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
