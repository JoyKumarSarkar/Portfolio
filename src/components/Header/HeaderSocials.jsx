import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/joy-kumar-sarkar-30950621b/"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/JoyKumarSarkar"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/joysarkar1236/"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
