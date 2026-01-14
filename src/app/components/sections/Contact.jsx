"use client";

import { useScrollContext } from "../../contexts/ScrollContext";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TbCopyCheck } from "react-icons/tb";
import { IoMdDownload } from "react-icons/io";

export default function Contact() {
  const { contactRef } = useScrollContext();
  const isInView = useInView(contactRef, {
    amount: 0.2,
    once: false,
  });

  // 복사 상태 관리
  const [copied, setCopied] = useState(false);

  //클립보드 복사 함수
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("unibure@gmail.com");
      setCopied(true);
      console.log("복사 성공");
      //2초 후 복사 상태 초기화
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <section
      ref={contactRef}
      id="contact"
      className="contact-section section-layout"
    >
      <motion.div
        initial={{ scale: 0.3, opacity: 0.5 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0.5 }
        }
        transition={{ duration: 1.2, ease: [0.175, 0.885, 0.32, 1.275] }}
        className="container"
      >
        <div className="contact-cont">
          <h4 className="contact-tit">Contact Me</h4>

          <span className="desc pb-[.3rem]">
            더 궁금하신 점이 있다면 편하게 연락주세요.
          </span>
          <span className="desc pb-[2rem]">
            함께 성장할 팀을 기다립니다. 감사합니다.
          </span>
          {/* <span className="down-link-btn pp-button">
            <a
              href="/images/unibure_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              PDF 이력서 다운로드 <IoMdDownload size="20" className="ico" />
            </a>
          </span> */}
          <div className="contact-info">
            <div className="info cursor-point">
              <span className="key">GitHub</span>
              <span className="value">
                <a
                  className="link"
                  href="https://github.com/unibure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @unibure
                </a>
              </span>
              <span className="tooltip">
                코드 스타일/ 커밋 히스토리 확인 가능
              </span>
            </div>
            <div className="info cursor-point click-copy" onClick={handleCopy}>
              <span className="key">Email</span>
              <span className="value">
                <span className="link">unibure@gmail.com</span>
                <span className="icon">
                  <TbCopyCheck size="20" />
                </span>
              </span>
              <span className={`copy-message ${copied ? "active" : ""}`}>
                복사되었습니다!
              </span>
            </div>
            <div className="info cursor-point">
              <span className="key">Phone</span>
              <span className="value">
                <span className="link">010-3141-2727</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
