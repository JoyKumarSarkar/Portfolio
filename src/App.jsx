import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Scroll from './Components/Scroll'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    <Navbar />
      <div className="container">
        <Home />
        <Education />
        <Skills />
        <Project />
        <Contact />
      </div>
    <Footer />
    <Scroll/>
    </>
  );
}

export default App;
