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

          if (rect.top <= offset && rect.top >= 0)
            setCurrentSection(element.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      const targetSection = target.getAttribute("data-section");

      if (targetSection) {
        const element = document.getElementById(targetSection);

        if (element) {
          const navHeight = window.innerWidth < 768 ? 46 : 58;
          const offsetPosition = element.offsetTop - navHeight;
          handleSidebarShow("close");
          window.scrollTo({ top: offsetPosition });
        }
      }
    };

    const navLinks = document.querySelectorAll<HTMLElement>("[data-section]");
    navLinks.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () =>
      navLinks.forEach((link: HTMLElement) =>
        link.removeEventListener("click", handleLinkClick)
      );
  }, []);

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

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    let touchStartX: number | null = null;
    let touchEndX: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      if (
        e.target &&
        ((e.target as HTMLElement).closest(".swiper-container") ||
          (e.target as HTMLElement).closest(".lightbox-container"))
      )
        return;
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (
        e.target &&
        ((e.target as HTMLElement).closest(".swiper-container") ||
          (e.target as HTMLElement).closest(".lightbox-container"))
      )
        return;
      touchEndX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
      if (touchStartX === null || touchEndX === null) return;

      if (touchEndX - touchStartX > 100) handleSidebarShow("close");
      else if (touchStartX - touchEndX > 100) handleSidebarShow("open");

      touchStartX = null;
      touchEndX = null;
    };

    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);
    document.addEventListener("touchend", handleTouchEnd, false);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart, false);
      document.removeEventListener("touchmove", handleTouchMove, false);
      document.removeEventListener("touchend", handleTouchEnd, false);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 flex gap-4 w-full lg:w-max lg:h-screen p-3 md:p-4 font-sans1 animate-fadeIn duration-300 ease ${
        window.scrollY > 25 &&
        "max-lg:bg-[#ffffff] dark:max-lg:bg-darkGray z-50"
      }
      `}
    >
      <img
        src={theme === "dark" ? lightModeIcon : darkModeIcon}
        alt="Theme icon"
        title={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
        className="w-5 md:w-6 h-5 md:h-6 duration-500 ease-out hover:scale-110 hover:-translate-y-[5%] cursor-pointer"
        draggable="false"
        ref={imgRef}
        onClick={toggleTheme}
      />
      <div
        className="group relative flex flex-col gap-[3px] w-5 md:w-6 h-5 md:h-6 ml-auto lg:hidden duration-500 ease-in-out cursor-pointer"
        style={{ transform: `translateX(-${hamburgerTranslateX})` }}
        ref={hamburgerRef}
        onClick={() => handleSidebarShow("toggle")}
      >
        <div
          className={`w-full h-1 bg-black dark:bg-white rounded-md ease duration-300 ${
            hamburgerTranslateX !== "0px" &&
            "absolute ml-auto top-1/2 rotate-45 w-[105%]"
          }`}
        ></div>
        <div
          className={`w-5/6 h-1 ml-auto bg-black dark:bg-white rounded-md group-hover:w-full ease duration-200 ${
            hamburgerTranslateX !== "0px" && "invisible duration-0"
          }`}
        ></div>
        <div
          className={` w-full h-1 bg-black dark:bg-white rounded-md ease duration-300 ${
            hamburgerTranslateX !== "0px" &&
            "absolute ml-auto top-1/2 -rotate-45 w-[105%]"
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
              className={`p-1 max-lg:mt-2 cursor-pointer underline-offset-[3px] max-lg:active:text-lighterRed ${
                currentSection === section &&
                window.screenY > 0 &&
                "text-darkerRed dark:text-lighterRed underline"
              }`}
            >
              <span className="relative lg:underline-animation">
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
          className="fixed bottom-2 right-2 md:bottom-4 w-7 md:w-10 h-7 md:h-10 ease duration-200 hover:scale-110 cursor-pointer z-50"
          draggable="false"
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
