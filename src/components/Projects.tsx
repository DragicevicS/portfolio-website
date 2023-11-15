import { useState } from "react";
import { Swiper as SwiperCore } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import typerHubImg from "../assets/projects/typerhub.png";
import cvAppImg from "../assets/projects/cv-app.png";
import lightViewImg from "../assets/light/light-view.svg";
import darkViewImg from "../assets/dark/dark-view.svg";
import lightGitHubImg from "../assets/light/light-github.svg";
import darkGitHubImg from "../assets/dark/dark-github.svg";
import lightLinkInNewImg from "../assets/light/light-link-in-new.svg";
import darkLinkInNewImg from "../assets/dark/dark-link-in-new.svg";

const projects = [
  {
    title: "TyperHub",
    description:
      "TyperHub is a simple web app designed to help users improve their keyboard typing skills. It offers a user-friendly platform for practicing typing lessons, texts, and tests. It is hosted on Netlify.",
    tools: ["html", "css", "react", "tailwind", "vite"],
    url: "https://typerhub.netlify.app",
    github: "https://github.com/DragicevicS/typerHub",
  },
  {
    title: "CV App",
    description:
      "CV App is a web app for... making CVs. It will contains a few templates for editing and also a printing option.",
    tools: ["html", "css", "react", "tailwind", "vite"],
    url: "",
    github: "https://github.com/DragicevicS/cv-application",
  },
];

const images = [typerHubImg, cvAppImg];

type ProjectsProps = {
  theme: string;
};

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [sliderNumber, setSliderNumber] = useState<number>(0);

  const handleSlideChange = (swiper: SwiperCore) => {
    setSliderNumber(swiper.activeIndex);
  };

  return (
    <div className="flex flex-col items-center gap-4 px-8 py-7 w-full bg-[#ffffff] dark:bg-darkGray text-justify text-sm font-serif cut-border">
      <h3 className="px-5 py-1 bg-white dark:bg-black text-lg rounded-sm animate-fadeIn">
        {projects[sliderNumber].title}
      </h3>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCreative, Pagination]}
        className="max-w-full bg-[#ffffff] dark:bg-darkGray swiper-container"
        onSlideChange={handleSlideChange}
      >
        {images.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={img}
                loading="lazy"
                className="max-w-full h-auto bg-[#ffffff] dark:bg-darkGray"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex flex-col gap-2 w-full animate-fadeIn">
        <p className="h-20">{projects[sliderNumber].description}</p>
        <div className="flex justify-center">HTML CSS REACT TAILWIND VITE</div>
        <div className="flex gap-2">
          <a
            href={projects[sliderNumber].url}
            target="_blank"
            className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-black rounded-sm hover:text-darkerRed dark:hover:text-lighterRed ease duration-300"
          >
            <img
              src={theme === "dark" ? darkViewImg : lightViewImg}
              alt="View"
              className="w-5 h-5"
              draggable="false"
            />
            Live Demo
            <img
              src={theme === "dark" ? darkLinkInNewImg : lightLinkInNewImg}
              alt="Link in new tab"
              className="w-[10px] h-[10px]"
              draggable="false"
            />
          </a>
          <a
            href={projects[sliderNumber].github}
            target="_blank"
            className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-black rounded-sm hover:text-darkerRed dark:hover:text-lighterRed ease duration-300"
          >
            <img
              src={theme === "dark" ? darkGitHubImg : lightGitHubImg}
              alt="GitHub"
              className="w-5 h-5"
              draggable="false"
            />
            Source Code
            <img
              src={theme === "dark" ? darkLinkInNewImg : lightLinkInNewImg}
              alt="Link in new tab"
              className="w-[10px] h-[10px]"
              draggable="false"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
