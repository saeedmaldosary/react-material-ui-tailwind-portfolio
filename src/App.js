import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Skills from "./components/UI/Skills";
import Certifications from "./components/UI/Certifications";
import LetsTalk from "./components/UI/LetsTalk";
import PreLoader from "./components/UI/Preloader";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";
import "./App.css";

function App({ change }) {
  const duration = 2000;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <Fade duration={duration}>
            <Header change={change} />
          </Fade>
          <Fade duration={duration}>
            <Hero />
          </Fade>
          <Fade duration={duration}>
            <Skills />
          </Fade>
          <Fade duration={duration}>
            <Certifications />
          </Fade>
          <Fade duration={duration}>
            <LetsTalk />
          </Fade>
        </>
      )}

      {/* <Footer /> */}
    </>
  );
}

export default App;
