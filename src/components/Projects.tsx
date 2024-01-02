import { useState } from "react";
import { Swiper as SwiperCore } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projectInfo } from "../data/projectInfo.ts";
import { imgLoad } from "../data/imgLoad.ts";
import lightViewImg from "../assets/light/light-view.svg";
import darkViewImg from "../assets/dark/dark-view.svg";
import lightGitHubImg from "../assets/light/light-github.svg";
import darkGitHubImg from "../assets/dark/dark-github.svg";
import lightLinkInNewImg from "../assets/light/light-link-in-new.svg";
import darkLinkInNewImg from "../assets/dark/dark-link-in-new.svg";

type ProjectsProps = {
  theme: string;
};

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
  const [sliderNumber, setSliderNumber] = useState<number>(0);

  const handleSlideChange = (swiper: SwiperCore) => {
    setSliderNumber(swiper.activeIndex);
  };

  const [lightbox, setLightbox] = useState({ open: false, imgSrc: "" });

  const openLightbox = (imgSrc: string) => {
    setLightbox({ open: true, imgSrc });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, imgSrc: "" });
  };

  return (
    <div className="flex flex-col items-center gap-3 px-8 lg:px-16 py-7 w-full bg-[#ffffff] dark:bg-darkGray text-justify text-sm cut-border">
      <Swiper
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="max-w-full md:max-w-[50%] py-1 border-b-2 border-t-2 swiper-container"
        onSlideChange={handleSlideChange}
      >
        {projectInfo.map((project, index) => {
          return (
            <SwiperSlide key={index} className="flex justify-center">
              <h3 className="w-max text-xl font-bold text-darkerBlue dark:text-lighterBlue">
                {project.title}
              </h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
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
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCreative, Autoplay, Pagination]}
        className="max-w-[90%] pb-8 bg-[#ffffff] dark:bg-darkGray swiper-container"
      >
        {projectInfo[sliderNumber].images.map((img, index) => {
          return (
            <SwiperSlide key={index} onClick={() => openLightbox(img)}>
              <img
                src={img}
                alt={projectInfo[sliderNumber].title}
                loading="lazy"
                className="max-w-full h-auto bg-[#ffffff] dark:bg-darkGray cursor-zoom-in active:cursor-grabbing"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <p className="flex items-center h-full">
        {projectInfo[sliderNumber].description}
      </p>
      {lightbox.open && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50 lightbox-container cursor-zoom-out"
          onClick={closeLightbox}
        >
          <img
            src={lightbox.imgSrc}
            alt="Selected"
            className="max-w-full max-h-full p-4"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-wrap justify-center items-center gap-3 w-full py-3 bg-white dark:bg-lighterGray rounded-sm">
          {projectInfo[sliderNumber].tools.map((tool, index) => (
            <img
              src={imgLoad.logos[tool].url}
              alt={`${imgLoad.logos[tool].title} logo`}
              title={imgLoad.logos[tool].title}
              key={index}
              loading="lazy"
              draggable="false"
              className="w-8 lg:w-9 h-8 lg:h-9"
            />
          ))}
        </div>
        <div className="flex gap-2 font-sans1">
          <a
            href={projectInfo[sliderNumber].github}
            target="_blank"
            rel="noopener noreferrer"
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
          {projectInfo[sliderNumber].url !== "" && (
            <a
              href={projectInfo[sliderNumber].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 bg-white dark:bg-black rounded-sm hover:text-darkerBlue dark:hover:text-lighterBlue ease duration-300"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
