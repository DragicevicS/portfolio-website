import darkModeIcon from "./assets/dark-mode.svg";
import lightModeIcon from "./assets/light-mode.svg";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="flex justify-center items-center bg-blue w-10 h-10">
        <img
          src={theme === "dark" ? lightModeIcon : darkModeIcon}
          id="theme-icon"
          alt="Theme mode"
          className="w-7 h-7 cursor-pointer"
          draggable="false"
          onClick={toggleTheme}
        />
      </div>
      <h1 className="text-2xl">Stefan Dragićević</h1>
    </>
  );
}

export default App;
