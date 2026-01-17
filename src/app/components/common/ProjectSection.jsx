"use Client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useProjectScroll } from "../../hooks/useProjectScroll";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useScreenSize } from "../../hooks/useResponsive";
import ProjectCard from "./ProjectCard";

const SCROLL_CONFIG = {
    down: { amount: 0.3 },
    up: {amount: 0},
}

export default function ProjectSection({ section, index }) { 
    const contentRef = useRef(null);
    const scrollDirection = useScrollDirection();
    const { isMobile } = useScreenSize();
    const { cardRefs, cardWidths, cardOpacity } = useProjectScroll(section.projects.length);

    const isInViewDown = useInView(contentRef, {
        amount: SCROLL_CONFIG.down.amount,
        once: false,
    })
    const isInViewUp = useInView(contentRef, {
        amount: SCROLL_CONFIG.up.amount,
        once: false,
    })

    const isInView = scrollDirection === "down" ? isInViewDown : isInViewUp;

    return (
    <div ref={contentRef} className="content">
      <motion.div
        className={`project-head ${isInView ? "active" : ""}`}
      >
        <h4 className="project-title">{section.title}</h4>
        <span className="info">
          {section.description}
        </span>
      </motion.div>

      <motion.div className="project-body">
        <div className="card-ls">
          {section.projects.map((item, cardIndex) => (
            <ProjectCard
              key={`${section.id}-${cardIndex}`}
              item={item}
              index={cardIndex}
              cardRef={cardRefs[cardIndex]}
              width={isMobile ? "100%" : cardWidths[cardIndex]}
              opacity={cardOpacity[cardIndex]}
              showDescription={section.showDescription !== false}
            />
          ))}
        </div>
      </motion.div>
    </div>
    );
}