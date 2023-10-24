import { useState, useEffect, RefObject, useRef } from "react";
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
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const [hamburgerTranslateX, setHamburgerTranslateX] = useState("0px");
  const sidebarRef = useRef<HTMLElement | null>(null);

  const handleSidebarShow = (
    action: "toggle" | "open" | "close" = "toggle"
  ) => {
    const asideElement = sidebarRef.current;

    if (asideElement) {
      const sidebarWidth = `${asideElement.offsetWidth}px`;

      if (action === "toggle") {
        if (asideElement.classList.contains("translate-x-full")) {
          asideElement.classList.replace("translate-x-full", "translate-x-0");
          setHamburgerTranslateX(sidebarWidth);
        } else {
          asideElement.classList.replace("translate-x-0", "translate-x-full");
          setHamburgerTranslateX("0px");
        }
      } else if (action === "open") {
        if (asideElement.classList.contains("translate-x-full")) {
          asideElement.classList.replace("translate-x-full", "translate-x-0");
          setHamburgerTranslateX(sidebarWidth);
        }
      } else if (action === "close") {
        if (asideElement.classList.contains("translate-x-0")) {
          asideElement.classList.replace("translate-x-0", "translate-x-full");
          setHamburgerTranslateX("0px");
        }
      }
    }
  };

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

    const handleOutsideClick = (e: MouseEvent) => {
      if (window.innerWidth > 1024) return;

      const sidebarElement = sidebarRef.current;
      const hamburgerElement = hamburgerRef.current;

      if (
        sidebarElement &&
        !sidebarElement.contains(e.target as Node) &&
        hamburgerElement &&
        !hamburgerElement.contains(e.target as Node)
      ) {
        handleSidebarShow("close");
      }
    };

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 100) {
        handleSidebarShow("close");
      } else if (touchEndX - touchStartX > 100) {
        handleSidebarShow("open");
      }
    };

    const handleLinkClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      const targetSection = target.getAttribute("data-section");

      if (targetSection) {
        const element = document.getElementById(targetSection);

        if (element) {
          const navHeight = window.innerWidth < 768 ? 46 : 58;
          const offsetPosition = element.offsetTop - navHeight;
          window.scrollTo({ top: offsetPosition });
        }
      }
    };

    const navLinks = document.querySelectorAll<HTMLElement>("[data-section]");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    window.addEventListener("scroll", handleScroll);

    document.addEventListener("click", handleOutsideClick);

    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);
    document.addEventListener("touchend", handleTouchEnd, false);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      document.removeEventListener("click", handleOutsideClick);

      document.removeEventListener("touchstart", handleTouchStart, false);
      document.removeEventListener("touchmove", handleTouchMove, false);
      document.removeEventListener("touchend", handleTouchEnd, false);

      navLinks.forEach((link: HTMLElement) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, [sectionRefs]);

  return (
    <nav
      className={`fixed top-0 flex gap-4 w-full lg:w-max lg:h-screen p-3 md:p-4 animate-fadeIn duration-300 ease ${
        window.scrollY > 25 && "max-lg:bg-[#ffffff] dark:max-lg:bg-darkGray"
      }
      `}
    >
      <img
        src={theme === "dark" ? lightModeIcon : darkModeIcon}
        alt="Theme icon"
        title={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        className="w-5 md:w-6 h-5 md:h-6 duration-500 ease-out hover:scale-110 cursor-pointer"
        ref={imgRef}
        onClick={toggleTheme}
      />
      <div
        className="group flex flex-col gap-[3px] w-5 md:w-6 h-5 md:h-6 ml-auto lg:hidden duration-500 ease-in-out cursor-pointer"
        style={{ transform: `translateX(-${hamburgerTranslateX})` }}
        ref={hamburgerRef}
        onClick={() => handleSidebarShow("toggle")}
      >
        <div
          className={`w-full h-1 bg-black dark:bg-white rounded-md group-hover:w-1/2 group-hover:translate-y-1 ease duration-300 ${
            hamburgerTranslateX === "0px"
              ? "group-hover:-rotate-[30deg] delay-100"
              : "ml-auto group-hover:rotate-[30deg] delay-100"
          }`}
        ></div>
        <div className="w-5/6 h-1 ml-auto bg-black dark:bg-white rounded-md group-hover:w-full ease duration-300"></div>
        <div
          className={` w-full h-1 bg-black dark:bg-white rounded-md group-hover:w-1/2 group-hover:-translate-y-1 ease duration-300 ${
            hamburgerTranslateX === "0px"
              ? "group-hover:rotate-[30deg] delay-100"
              : "ml-auto group-hover:-rotate-[30deg] delay-100"
          }`}
        ></div>
      </div>
      <aside
        className="fixed top-0 lg:top-1/2 lg:-translate-y-1/2 translate-x-full lg:translate-x-0 right-0 lg:right-4 lg:block w-max max-lg:h-screen max-lg:px-4 max-lg:pt-[15%] lg:mt-auto lg:mb-auto max-lg:bg-[#ffffff] dark:max-lg:bg-darkGray duration-500 ease-in-out font-medium tracking-wide"
        ref={sidebarRef}
      >
        <ul>
          {["about", "skills", "projects", "contact"].map((section) => (
            <li
              key={section}
              data-section={section}
              className={`p-1 max-lg:mt-2 cursor-pointer underline-offset-[3px] ${
                currentSection === section && window.screenY > 0
                  ? "text-darkerRed dark:text-lighterRed underline"
                  : ""
              }`}
            >
              <span className="relative underline-animation">
                &#9674; {section.toUpperCase()}
              </span>
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
