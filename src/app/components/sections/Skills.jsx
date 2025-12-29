"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const variants = (delay) => ({
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } },
  });

  return (
    <section
      ref={ref}
      variants={variants(0.1)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="skill"
      className="skill-section section-layout"
    >
      <h3 className="section-title">Skill & Tools</h3>
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
              <span className="icon">
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
                <img src={`/images/git-logo.svg`} alt="git" />
              </span>
            </li>
            <li className="item">
              <span className="sbj">GitHub</span>
              <span className="icon">
                <img src={`/images/github-logo.svg`} alt="github" />
              </span>
            </li>
            <li className="item">
              <span className="sbj">Figma</span>
              <span className="icon">
                <img src={`/images/figma-logo.svg`} alt="figma" />
              </span>
            </li>
            <li className="item">
              <span className="sbj">Tailwind</span>
              <span className="icon">
                <img src={`/images/tailwind-logo.svg`} alt="tailwind" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
