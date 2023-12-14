import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { imgLoad } from "../data/imgLoad";

type SkillsProps = {
  theme: string;
};

const Skills: React.FC<SkillsProps> = () => {
  const firstSlideRow = [
    "react",
    "javascript",
    "typescript",
    "tailwind",
    "html",
    "css",
  ];
  const secondSlideRow = ["git", "vite", "webpack", "npm", "vitest"];
  const thirdSlideRow = ["seo", "responsive", "linux", "netlify", "vscode"];

  return (
    <div className="flex flex-col items-center gap-10 w-full px-8 py-7 bg-[#ffffff] dark:bg-darkGray text-justify font-serif cut-border">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        loop={true}
        slidesPerView={3}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
        }}
        className="w-full md:w-5/6"
      >
        {firstSlideRow.map((skill, index) => {
          return (
            <SwiperSlide key={index} className="flex justify-center py-1">
              <img
                src={imgLoad.logos[skill].url}
                alt={`${imgLoad.logos[skill].title} logo`}
                title={imgLoad.logos[skill].title}
                key={index}
                loading="lazy"
                className="w-10 lg:w-12 h-10 lg:h-12"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <p className="w-full md:w-5/6">
        My primary tool is{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">React</span>,
        for creating dynamic user interfaces with{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">
          JavaScript
        </span>{" "}
        /{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">
          TypeScript
        </span>
        . Designs are brought to life with{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">
          Tailwind CSS
        </span>
        , but I'm also proficient in pure{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">CSS</span>.
      </p>
      <hr className="w-full md:w-5/6 text-darkerRed dark:text-lighterRed" />
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        loop={true}
        slidesPerView={3}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        className="w-full md:w-5/6"
      >
        {secondSlideRow.map((skill, index) => {
          return (
            <SwiperSlide key={index} className="flex justify-center py-1">
              <img
                src={imgLoad.logos[skill].url}
                alt={`${imgLoad.logos[skill].title} logo`}
                title={imgLoad.logos[skill].title}
                key={index}
                loading="lazy"
                className="w-10 lg:w-12 h-10 lg:h-12"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <p className="w-full md:w-5/6">
        For development, optimizing and bundling of my projects, I rely on
        toolchains like{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">Vite</span> and{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">Webpack</span>,
        using <span className="text-darkerBlue dark:text-lighterBlue">Git</span>{" "}
        for version control,{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">npm</span> for
        the latest and secure dependencies, and{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">Vitest</span>{" "}
        for testing.
      </p>
      <hr className="w-full md:w-5/6 text-darkerRed dark:text-lighterRed" />
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        loop={true}
        slidesPerView={3}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
        }}
        className="w-full md:w-5/6"
      >
        {thirdSlideRow.map((skill, index) => {
          return (
            <SwiperSlide key={index} className="flex justify-center py-1">
              <img
                src={imgLoad.logos[skill].url}
                alt={`${imgLoad.logos[skill].title} logo`}
                title={imgLoad.logos[skill].title}
                key={index}
                loading="lazy"
                className="w-10 lg:w-12 h-10 lg:h-12"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <p className="w-full md:w-5/6">
        Implement{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">SEO</span> best
        practices to enhance the visibility and reach of web pages.{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">
          Responsive design
        </span>{" "}
        ensures that the applications perform seamlessly across all devices.
        Comfortable working in a{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">Linux</span>{" "}
        environment.
      </p>
    </div>
  );
};

export default Skills;
