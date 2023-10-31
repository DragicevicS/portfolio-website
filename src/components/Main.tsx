import React, { RefObject } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

type MainProps = {
  sectionRefs: RefObject<HTMLElement>[];
};

const Main: React.FC<MainProps> = ({ sectionRefs }) => {
  const sections = ["about", "skills", "projects", "contact"];

  return (
    <main className="flex flex-col items-center w-full">
      {sections.map((section, i) => (
        <section
          key={section}
          id={section}
          ref={sectionRefs[i]}
          className="flex flex-col items-center gap-3 h-full w-full lg:w-3/5 font-extrabold tracking-widest"
        >
          <h2 className="text-center font-serif italic">
            {section.toUpperCase()}
          </h2>
          {section === "about" ? (
            <About />
          ) : section === "skills" ? (
            <Skills />
          ) : section === "projects" ? (
            <Projects />
          ) : (
            section === "contact" && <Contact />
          )}
        </section>
      ))}
    </main>
  );
};

export default Main;
