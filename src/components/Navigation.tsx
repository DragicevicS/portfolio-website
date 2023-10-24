import { useState, useEffect, RefObject } from "react";
import lightModeIcon from "../assets/light/light-mode.svg";
import darkModeIcon from "../assets/dark/dark-mode.svg";
import lightChevronUpIcon from "../assets/light/light-chevron-up.svg";
import darkChevronUpIcon from "../assets/dark/dark-chevron-up.svg";

type NavProps = {
  theme: string;
  toggleTheme: () => void;
  imgRef: React.RefObject<HTMLImageElement>;
  sectionRefs: Array<RefObject<HTMLElement>>;
};

const Navigation: React.FC<NavProps> = ({
  theme,
  toggleTheme,
  imgRef,
  sectionRefs,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setShowScrollTop(currentScrollPos > window.innerHeight / 1.3);

      if (window.scrollY < 20) {
        setCurrentSection(null);
        return;
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setCurrentSection("contact");
        return;
      }

      sectionRefs?.forEach((ref) => {
        const element = ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150;

          if (rect.top <= offset && rect.top >= 0) {
            setCurrentSection(element.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  return (
    <nav className="fixed right-0 flex flex-col items-center gap-4 md:gap-1 w-9 md:w-max p-2 md:p-4 mt-1 h-screen animate-fadeIn">
      <div className="group flex flex-col gap-1 w-full md:hidden cursor-pointer">
        <div className="w-full h-1 bg-black dark:bg-white rounded-md group-hover:w-1/2 group-hover:-rotate-[30deg] group-hover:translate-y-1 ease duration-300"></div>
        <div className="w-5/6 h-1 ml-auto bg-black dark:bg-white rounded-md group-hover:w-full ease duration-300"></div>
        <div className="w-full h-1 bg-black dark:bg-white rounded-md group-hover:w-1/2 group-hover:rotate-[30deg] group-hover:-translate-y-1 ease duration-300"></div>
      </div>
      <img
        src={theme === "dark" ? lightModeIcon : darkModeIcon}
        alt="Theme icon"
        title={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        className="w-5 md:w-6 h-5 md:h-6 ml-auto duration-500 ease-out hover:scale-110 cursor-pointer"
        ref={imgRef}
        onClick={toggleTheme}
      />
      <aside className="hidden md:block mt-auto mb-auto font-medium tracking-wide">
        <ul>
          {["about", "skills", "projects", "contact"].map((section) => (
            <li
              key={section}
              className={`p-1 cursor-pointer underline-offset-[3px] ${
                currentSection === section && window.screenY > 0
                  ? "text-darkerRed dark:text-lighterRed underline"
                  : ""
              }`}
            >
              <a href={`#${section}`} className="relative underline-animation">
                &#9674; {section.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      {showScrollTop && (
        <img
          src={theme === "dark" ? darkChevronUpIcon : lightChevronUpIcon}
          alt="Scroll up"
          title="Scroll to the top"
          className="fixed bottom-2 right-2 md:bottom-4 w-7 md:w-10 h-7 md:h-10 ease duration-200 hover:scale-110 cursor-pointer"
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        />
      )}
    </nav>
  );
};

export default Navigation;
