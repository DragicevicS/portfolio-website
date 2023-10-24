import React, { RefObject } from "react";

type MainProps = {
  sectionRefs: RefObject<HTMLElement>[];
};

const Main: React.FC<MainProps> = ({ sectionRefs }) => {
  const sections = ["about", "skills", "projects", "contact"];

  return (
    <main className="flex flex-col items-center">
      {sections.map((section, i) => (
        <section
          key={section}
          id={section}
          ref={sectionRefs[i]}
          className="h-[550px] italic font-extrabold tracking-widest"
        >
          <h2>{section.toUpperCase()}</h2>
        </section>
      ))}
    </main>
  );
};

export default Main;
