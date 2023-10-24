import { useEffect, useState, useRef } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme, imgRef } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const firstSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  });

  return (
    <>
      {isLoading ? (
        <Loading theme={theme} />
      ) : (
        <>
          <Navigation theme={theme} toggleTheme={toggleTheme} imgRef={imgRef} />
          <Header theme={theme} firstSectionRef={firstSectionRef} />
          <Main firstSectionRef={firstSectionRef} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
