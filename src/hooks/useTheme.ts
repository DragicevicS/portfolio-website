import { useState, useRef, useEffect } from "react";

const useTheme = () => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    localStorage.setItem("theme", systemTheme);
    return systemTheme;
  };

  const [theme, setTheme] = useState<string>(getInitialTheme);

  const imgRef = useRef<HTMLImageElement>(null);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);

    const imgElement = imgRef.current;

    if (imgElement) {
      imgElement.classList.add("rotate-[360deg]", "scale-125");

      setTimeout(() => {
        imgElement.classList.remove("rotate-[360deg]", "scale-125");
      }, 500);
    }
  };

  useEffect(() => {
    const imgElement = imgRef.current;

    if (imgElement) {
      imgElement.style.fill = theme === "dark" ? "white" : "black";
    }
  }, [theme]);

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

  return { theme, toggleTheme, imgRef };
};

export default useTheme;
