import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Skills from "./components/UI/Skills";
import LetsTalk from "./components/UI/LetsTalk";
import Fade from "react-reveal/Fade";

function App() {
  const duration = 1000;
  return (
    <>
      <Header />
      <Fade duration={duration}>
        <Hero />
      </Fade>
      <Fade duration={duration}>
        <Skills />
      </Fade>
      <Fade duration={duration}>
        <LetsTalk />
      </Fade>
      {/* <Footer /> */}
    </>
  );
}

export default App;
