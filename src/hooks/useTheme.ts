import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<string | null>(() =>
    localStorage.getItem("theme")
  );

  const themeIcon = document.getElementById("theme-icon");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);

    themeIcon?.classList.add(
      "rotate-[360deg]",
      "duration-500",
      "ease",
      "scale-125"
    );
    setTimeout(() => {
      themeIcon?.classList.remove(
        "rotate-[360deg]",
        "duration-500",
        "ease",
        "scale-125"
      );
    }, 501);
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    if (!theme) {
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.add(systemTheme ? "dark" : "light");
    } else {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
