import React from "react";
import "./About.css";
import ME from "../../Assets/Untitled design.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
function about() {
  return (
    <section id="about" data-aos="fade-left">
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>8+ Completed Projects</small>
            </article>
          </div>
          <p>
            Hi there!
            I'm Joy Kumar Sarkar, a B.Tech Graduate in Computer Science & Engineering from Brainware University, and employed full-time as a Trainee Programmer at ADA Software Re Engineering Services Pvt. Ltd.. I'm currently working on .NET Core, React.js and Next.js.<br />
            <br /> I have knowledge in C#, Java, OOPs, Data structures and SQL.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
