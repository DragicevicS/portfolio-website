import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme, svgRef } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navigation theme={theme} toggleTheme={toggleTheme} svgRef={svgRef} />
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
