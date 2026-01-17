"use client";

import { useScrollContext } from "../../contexts/ScrollContext";
import ProjectSection from "../common/ProjectSection";
import { projectData } from "../../data/projectData";

export default function Project() {
  const { projectRef } = useScrollContext();

  return (
    <section ref={projectRef} id="project">
      <div className="container">
        <div className="project-section">
          <h3 className="section-title">Project</h3>
          <div className="wrapper">
            {projectData.map((section, index) => (
              <ProjectSection key={index} section={section} index={index} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
