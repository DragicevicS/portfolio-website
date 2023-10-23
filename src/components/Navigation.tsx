import { useState, useEffect } from "react";
import lightModeIcon from "../assets/light/light-mode.svg";
import darkModeIcon from "../assets/dark/dark-mode.svg";
import lightChevronUpIcon from "../assets/light/light-chevron-up.svg";
import darkChevronUpIcon from "../assets/dark/dark-chevron-up.svg";

type NavProps = {
  theme: string;
  toggleTheme: () => void;
  svgRef: React.RefObject<HTMLImageElement>;
};

const Navigation = ({ theme, toggleTheme, svgRef }: NavProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setShowScrollTop(currentScrollPos > window.innerHeight / 1.3);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed right-0 flex flex-col items-center gap-4 md:gap-1 w-9 md:w-14 p-2 md:p-0 mt-1 md:mt-3 h-screen animate-fadeIn">
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
        className="w-5 md:w-6 h-5 md:h-6 duration-500 ease-out hover:scale-110 cursor-pointer"
        ref={svgRef}
        onClick={toggleTheme}
      />
      {showScrollTop && (
        <img
          src={theme === "dark" ? darkChevronUpIcon : lightChevronUpIcon}
          alt="Scroll up"
          title="Scroll to the top"
          className="fixed bottom-2 md:bottom-5 w-7 md:w-10 h-7 md:h-10 ease duration-200 hover:scale-110 cursor-pointer"
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
