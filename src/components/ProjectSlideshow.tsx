import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { EffectCreative, Pagination } from "swiper/modules";
import lightHomeImg from "../assets/light/light-home.svg";
import darkHomeImg from "../assets/dark/dark-home.svg";
import lightLocationImg from "../assets/light/light-location.svg";
import darkLocationImg from "../assets/dark/dark-location.svg";
import lightResumeImg from "../assets/light/light-resume.svg";
import darkResumeImg from "../assets/dark/dark-resume.svg";
import lightLinkInNewImg from "../assets/light/light-link-in-new.svg";
import darkLinkInNewImg from "../assets/dark/dark-link-in-new.svg";

const images = [
  lightHomeImg,
  darkHomeImg,
  lightLocationImg,
  darkLocationImg,
  lightResumeImg,
  darkResumeImg,
  lightLinkInNewImg,
  darkLinkInNewImg,
];

const ProjectSlideshow = () => {
  return (
    <div className="">
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
        className="w-96 bg-[#ffffff] dark:bg-darkGray"
      >
        {images.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={img}
                className="w-96 h-96 bg-[#ffffff] dark:bg-darkGray"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProjectSlideshow;
