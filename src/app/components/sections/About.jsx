"use client";

import { FaHeartPulse } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useScrollContext } from "../../contexts/ScrollContext";

export default function About() {
  const ref = useRef(null);
  const { aboutRef } = useScrollContext();
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  const variants = (delay) => ({
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } },
  });

  const scaleVariants = (delay) => ({
    hidden: { scale: 0.5 },
    visible: { scale: 1, transition: { duration: 0.2, delay: delay } },
  });

  return (
    <section ref={aboutRef} id="about">
      <div className="container">
        <div ref={ref} className="about-section section-layout">
          <div className="about-head">
            <h3 className="section-title">About Me</h3>
            <div className="profile-img">
              <img src={`/images/profile.png`} alt="about" />
            </div>
          </div>
          <div className="content">
            <motion.div
              variants={variants(0.1)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="about-cont"
            >
              <p className="desc text-gray-300">
                안녕하세요. 저는 웹 프론트엔드 개발자{" "}
                <strong className="text-white cursor-point">이고운</strong>
                입니다. <br />
                사용성과 효율성을 모두 고려한 UI 개발을 지향하며, <br />
                협업과 소통을 통해 더 나은 서비스를 만들어 가는것을 좋아합니다.
              </p>
              <ul className="desc text-gray-400">
                <li>
                  ✅{" "}
                  <strong className="text-white cursor-point">
                    원활한 협업
                  </strong>
                  과{" "}
                  <strong className="text-white cursor-point">
                    책임감 있는 태도
                  </strong>
                  를 중요하게 생각합니다.
                </li>
                <li>
                  💡 항상{" "}
                  <strong className="text-white cursor-point">
                    사용자의 입장에서 생각하는 UX/UI
                  </strong>
                  를 고민합니다.
                </li>
                <li>
                  🚀 새로운 기술에 대한{" "}
                  <strong className="text-white cursor-point">
                    학습과 도전
                  </strong>
                  을 즐깁니다.
                </li>
              </ul>

              {/* <p className="desc">
                웹 서비스 기획부터 개발, 배포까지 전 과정을 담당하며 <br />{" "}
                사용자 중심의 웹 서비스를 개발하고 있습니다. <br /> 새로운
                기술을 배우는 것을 좋아하며,
                <motion.span
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="point"
                >
                  지속적인 성장
                </motion.span>
                을 추구합니다.
              </p>
              <p className="desc !line-height-[2]">
                <span className="point !ml-[0px]">원활한 협업</span>과
                <span className="point">적극적인 커뮤니케이션</span>을 통해
                사용자 경험을 <br /> 지속적으로 개선해 나가고 있으며, 맡은 일에
                <span className="point">책임감</span>을 가지고 <br /> 끊임없이
                성장하는 개발자가 되고자 합니다.
              </p> */}
            </motion.div>
            <div className="achievements-section">
              <motion.div
                className="achievement-item"
                variants={scaleVariants(0.1)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ translateY: -5 }}
              >
                <div className="achievement-icon">📦</div>
                <div className="achievement-number">50+</div>
                <div className="achievement-label">완성 프로젝트</div>
              </motion.div>
              <motion.div
                className="achievement-item"
                variants={scaleVariants(0.2)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ translateY: -5 }}
              >
                <div className="achievement-icon">💻</div>
                <div className="achievement-number">10+</div>
                <div className="achievement-label">기술 스택</div>
              </motion.div>
              <motion.div
                className="achievement-item"
                variants={scaleVariants(0.3)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ translateY: -5 }}
              >
                <div className="achievement-icon">📅</div>
                <div className="achievement-number">2년+</div>
                <div className="achievement-label">개발 경력</div>
              </motion.div>
              <motion.div
                className="achievement-item"
                variants={scaleVariants(0.4)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ translateY: -5 }}
              >
                <div className="achievement-icon">⭐</div>
                <div className="achievement-number">100%</div>
                <div className="achievement-label">완성된 프로젝트</div>
              </motion.div>
            </div>
            <motion.div
              ref={ref}
              variants={variants(0.4)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              id="skill"
              className="skill-section"
            >
              {/* <h3 className="section-title-sml">Skill & Tools</h3> */}
              <div className="skill-cont">
                <div className="skill-item">
                  <span className="skill-tit">Front End</span>
                  <ul className="skill-list">
                    <li className="item">
                      <span className="sbj">HTML</span>
                      <span className="icon">
                        <img src={`/images/html-logo.svg`} alt="html" />
                      </span>
                    </li>
                    <li className="item">
                      <span className="sbj">CSS</span>
                      <span className="icon">
                        <img src={`/images/css-logo.svg`} alt="css" />
                      </span>
                    </li>
                    <li className="item">
                      <span className="sbj">JavaScript</span>
                      <span className="icon">
                        <img src={`/images/js-logo.svg`} alt="js" />
                      </span>
                    </li>
                    <li className="item">
                      <span className="sbj">React</span>
                      <span className="icon">
                        <img src={`/images/react-logo.svg`} alt="react" />
                      </span>
                    </li>
                    <li className="item">
                      <span className="sbj">Next.js</span>
                      <span className="icon invert">
                        <img src={`/images/nextjs-logo.svg`} alt="nextjs" />
                      </span>
                    </li>
                    <li className="item">
                      <span className="sbj">PHP</span>
                      <span className="icon">
                        <img src={`/images/php-logo.svg`} alt="nextjs" />
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="skill-item">
                  <span className="skill-tit">Tools</span>
                  <ul className="skill-list">
                    <li className="item">
                      <span className="sbj">Git</span>
                      <span className="icon">
                        <img src={`/images/git-logo-white.svg`} alt="git" />
                      </span>
                    </li>
                    <li className="item">
                      <span className="sbj">GitHub</span>
                      <span className="icon">
                        <img
                          src={`/images/github-logo-white.svg`}
                          alt="github"
                          className="w-[50px] tablet:w-[40px]"
                        />
                      </span>
                    </li>
                    <li className="item">
                      <span className="sbj">Figma</span>
                      <span className="icon">
                        <img
                          src={`/images/figma-logo.svg`}
                          alt="figma"
                          className="w-[47px] tablet:w-[40px]"
                        />
                      </span>
                    </li>
                    <li className="item">
                      <span className="sbj">Tailwind</span>
                      <span className="icon">
                        <img src={`/images/tailwind-logo.svg`} alt="tailwind" />
                      </span>
                    </li>
                    <li className="item">
                      <span className="sbj">Adobe XD</span>
                      <span className="icon">
                        <img
                          src={`/images/xd-logo.svg`}
                          alt="adobe xd"
                          className="w-[47px]"
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
