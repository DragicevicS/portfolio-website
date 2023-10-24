import React, { useEffect, useState, useRef } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

const App: React.FC = () => {
  const { theme, toggleTheme, imgRef } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef<React.RefObject<HTMLElement>[]>([]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  });

  useEffect(() => {
    sectionRefs.current = ["about", "skills", "projects", "contact"].map(() =>
      React.createRef<HTMLElement>()
    );
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading theme={theme} />
      ) : (
        <>
          <Navigation
            theme={theme}
            toggleTheme={toggleTheme}
            imgRef={imgRef}
            sectionRefs={sectionRefs.current}
          />
          <Header theme={theme} />
          <Main sectionRefs={sectionRefs.current} />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
