"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({
  item,
  index,
  cardRef,
  width,
  opacity,
  showDescription = true,
}) {
  return (
    <motion.div
      ref={cardRef}
      className="card"
      key={index}
      style={{ width, opacity }}
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
          // initial={ANIMATION_CONFIG.initial}
          // animate={ANIMATION_CONFIG.animate}
          // transition={ANIMATION_CONFIG.transition}
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
                {item.role.map((role, roleIndex) => (
                  <li key={roleIndex}>{role}</li>
                ))}
              </ul>
            </li>
            {showDescription && item.description?.length > 0 && (
              <li className="info list-type">
                <span className="key">Description</span>
                <ul className="value feature bullet">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
          <motion.span className="button">
            <Link target="_blank" href={item.link} className="btn">
              View Project <FiArrowUpRight size={20} />
            </Link>
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
