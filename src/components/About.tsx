import lightHomeImg from "../assets/light/light-home.svg";
import darkHomeImg from "../assets/dark/dark-home.svg";
import lightLocationImg from "../assets/light/light-location.svg";
import darkLocationImg from "../assets/dark/dark-location.svg";
import lightResumeImg from "../assets/light/light-resume.svg";
import darkResumeImg from "../assets/dark/dark-resume.svg";
import lightLinkInNewImg from "../assets/light/light-link-in-new.svg";
import darkLinkInNewImg from "../assets/dark/dark-link-in-new.svg";
import resumePDF from "../pdf/Resume.pdf";

type AboutProps = {
  theme: string;
};

const About: React.FC<AboutProps> = ({ theme }) => {
  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const navHeight = window.innerWidth < 768 ? 46 : 58;
      const offsetPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: offsetPosition });
    }
  };

  return (
    <div className="flex flex-col gap-4 px-8 py-7 bg-[#ffffff] dark:bg-darkGray text-justify cut-border">
      <p className="font-serif font-normal">
        Welcome! I'm an aspiring frontend web developer. My coding journey began
        in 2015 when I discovered{" "}
        <a
          href="https://www.codecademy.com/"
          target="_blank"
          className="text-darkerBlue dark:text-lighterBlue"
        >
          Codecademy
        </a>
        . Intrigued by the idea of learning to code independently, I ventured
        into{" "}
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          className="text-darkerBlue dark:text-lighterBlue"
        >
          freeCodeCamp
        </a>{" "}
        for a solid web development foundation. Later, in 2017, I completed a
        year-long PHP programming course. While initially viewing programming as
        a hobby, my ambitions evolved, leading me to realize that this could be
        my career path. Today, my focus revolves around crafting apps with
        React, which I learned from{" "}
        <a
          href="https://www.theodinproject.com/"
          target="_blank"
          className="text-darkerBlue dark:text-lighterBlue"
        >
          The Odin Project
        </a>{" "}
        in 2023, finessing my skills in TypeScript, and designing with Tailwind.
      </p>
      <p className="font-serif font-normal">
        Beyond the screen, I'm a firm believer in the "Strong body, strong mind"
        lifestyle. Regularly hitting the gym and actively participating in
        sports keep me energized, sharp and resilient.
      </p>
      <p className="font-serif font-normal">
        I embrace programming as a perpetual pursuit and always welcome a
        challenge. If you believe we can create something impactful together,
        please don't hesitate to{" "}
        <span
          className="text-darkerBlue dark:text-lighterBlue cursor-pointer"
          onClick={handleScrollToContact}
        >
          contact
        </span>{" "}
        me. Let's make it happen!
      </p>
      <div className="flex flex-col gap-2 text-darkerRed dark:text-lighterRed">
        <div className="group flex gap-2 w-max items-center">
          <img
            src={theme === "dark" ? darkHomeImg : lightHomeImg}
            alt="Home"
            title="From"
            className="w-6 h-6 group-hover:scale-110 group-hover:-translate-y-[5%] ease duration-200"
            draggable="false"
          />
          <p>Sombor, Serbia</p>
        </div>
        <div className="group flex gap-2 w-max items-center">
          <img
            src={theme === "dark" ? darkLocationImg : lightLocationImg}
            alt="Location"
            title="Current location"
            className="w-6 h-6 group-hover:scale-110 group-hover:-translate-y-[5%] ease duration-200"
            draggable="false"
          />
          <p>Sombor, Serbia</p>
        </div>
        <a
          href={resumePDF}
          target="_blank"
          className="group flex gap-2 items-center w-max cursor-pointer"
          title="View/download resume"
          rel="noopener noreferrer"
        >
          <img
            src={theme === "dark" ? darkResumeImg : lightResumeImg}
            alt="Resume"
            className="w-6 h-6 group-hover:scale-110 group-hover:-translate-y-[5%] ease duration-200"
            draggable="false"
          />
          <div className="flex gap-1 items-center">
            <p className="group-hover:underline">Resume</p>
            <img
              src={theme === "dark" ? darkLinkInNewImg : lightLinkInNewImg}
              alt="Link in new tab"
              className="w-3 h-3"
              draggable="false"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
