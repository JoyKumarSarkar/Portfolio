import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resume.pdf";
import dp from "./Data/dp.json";
import Typed from "typed.js";


const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Hello, I am Joy", "I am a coder"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
       

        <div className="right" 
        data-aos="fade-left" data-aos-duration="2000"
        >
          <div className="img">
            <img src={`/images/${dp.imgSrc}`} alt="dp" />
          </div>
        </div>

        <div className="left" data-aos="fade-right" data-aos-duration="2000">
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="resume.pdf"
            className="btn btn-outline-warning "
          >
            Download Resume
          </a>
        </div>

      </div>
      <div className="scroll" id="scroll"></div>
    </>
  );
};

export default Home;
