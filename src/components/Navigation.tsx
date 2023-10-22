import useTheme from "../hooks/useTheme";

const Navigation = () => {
  const { theme, toggleTheme, svgRef } = useTheme();

  return (
    <nav className="fixed right-0 flex flex-col items-center gap-4 md:gap-1 w-9 md:w-14 p-2 md:p-0 mt-1 md:mt-3 h-screen animate-fadeIn">
      <div className="group flex flex-col gap-1 w-full md:p-4 cursor-pointer">
        <div className="w-full h-1 bg-black dark:bg-white rounded-md group-hover:bg-red group-hover:w-1/2 group-hover:-rotate-[30deg] group-hover:translate-y-1 ease duration-300"></div>
        <div className="w-5/6 h-1 ml-auto bg-black dark:bg-white rounded-md group-hover:bg-red group-hover:w-full ease duration-300"></div>
        <div className="w-full h-1 bg-black dark:bg-white rounded-md group-hover:bg-red group-hover:w-1/2 group-hover:rotate-[30deg] group-hover:-translate-y-1 ease duration-300"></div>
      </div>
      <div
        className="w-full md:p-4"
        title={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={theme === "dark" ? "white" : "black"}
          className="w-5 md:w-6 h-5 md:h-6 transition-transform duration-500 ease-out cursor-pointer hover:fill-red"
          ref={svgRef}
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" />
          ) : (
            <path d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z" />
          )}
        </svg>
      </div>
      <div
        className="mt-auto md:pb-4 ease duration-200 hover:scale-110"
        title="Scroll to the top"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={theme === "dark" ? "white" : "black"}
          className="w-7 md:w-10 h-7 md:h-10 hover:fill-red cursor-pointer"
        >
          <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navigation;
