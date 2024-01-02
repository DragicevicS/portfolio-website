import darkChevronTripleDownIcon from "../assets/dark/dark-chevron-triple-down.svg";
import lightChevronTripleDownIcon from "../assets/light/light-chevron-triple-down.svg";

type HeaderProps = {
  theme: string;
};

const Header: React.FC<HeaderProps> = ({ theme }) => {
  const scrollToFirstSection = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      const offset = window.innerWidth < 768 ? 46 : 58;
      const y = aboutSection.offsetTop - offset;

      window.scrollTo({ top: y });
    }
  };

  return (
    <header
      id="header"
      className="flex flex-col justify-center items-center gap-6 w-full h-screen animate-fadeIn"
    >
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-serif1">
        Stefan{" "}
        <span className="text-darkerBlue dark:text-lighterBlue">
          Dragićević
        </span>
      </h1>
      <img
        src={
          theme === "dark"
            ? darkChevronTripleDownIcon
            : lightChevronTripleDownIcon
        }
        alt="Scroll down"
        className="w-7 md:w-10 h-7 md:h-10 cursor-pointer animate-fadeDown"
        draggable="false"
        onClick={scrollToFirstSection}
      />
    </header>
  );
};

export default Header;
