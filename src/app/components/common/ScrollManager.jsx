"use client";
import { useScroll } from "../../contexts/ScrollContext";
import About from "../sections/About";
import Career from "../sections/Career";
import Project from "../sections/Project";
import Contact from "../sections/Contact";

export default function ScrollManager() {
  const { aboutRef, careerRef, projectRef, contactRef } = useScroll();

  return (
    <>
      <About ref={aboutRef} />
      <Career ref={careerRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
    </>
  );
}
