"use client";

import { useScrollContext } from "../../contexts/ScrollContext";

export default function Contact() {
  const { contactRef } = useScrollContext();
  return (
    <section
      ref={contactRef}
      id="contact"
      className="contact-section section-layout"
    >
      <h3 className="section-title">Contact</h3>
      <div className="contact-cont">{/* 연락처 내용 추가 예정 */}</div>
    </section>
  );
}
