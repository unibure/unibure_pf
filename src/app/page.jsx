import Visual from "./components/sections/Visual";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Career from "./components/sections/Career";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Moon from "./components/sections/Moon";
import Background from "./components/sections/Background";

//page.jsx는 서버 컴포넌트이므로, ref 전달은 클라이언트 컴포넌트에서 처리

export default function Home() {
  return (
    <article className="main-content">
      <Background />
      <Moon />
      <Visual />
      <About />
      <Career />
      <Project />
      <Contact />
    </article>
  );
}
