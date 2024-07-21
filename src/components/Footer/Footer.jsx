import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="/" className="footer_logo">
        JOY
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Porfolio</a>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/JoyKumarSarkar">
          <BsGithub />
        </a>

        <a href="https://www.instagram.com/joysarkar1236/">
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; JOY KUMAR SARKAR. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
