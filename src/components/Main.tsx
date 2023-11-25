import React, { RefObject } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

type MainProps = {
  theme: string;
  sectionRefs: RefObject<HTMLElement>[];
};

const Main: React.FC<MainProps> = ({ theme, sectionRefs }) => {
  const sections = ["about", "skills", "projects", "contact"];

  return (
    <main className="flex flex-col items-center gap-24 lg:gap-40 w-full">
      {sections.map((section, i) => (
        <section
          key={section}
          id={section}
          ref={sectionRefs[i]}
          className="flex flex-col items-center gap-3 h-full w-full lg:w-3/5 mb-2 lg:mb-0 font-extrabold tracking-widest"
        >
          <h2 className="text-center font-serif italic">
            {section.toUpperCase()}
          </h2>
          {section === "about" ? (
            <About theme={theme} />
          ) : section === "skills" ? (
            <Skills theme={theme} />
          ) : section === "projects" ? (
            <Projects theme={theme} />
          ) : (
            section === "contact" && <Contact theme={theme} />
          )}
        </section>
      ))}
    </main>
  );
};

export default Main;
