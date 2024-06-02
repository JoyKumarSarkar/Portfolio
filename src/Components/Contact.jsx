import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Contact() {
  return ( 
    <>
      <div className="container contact" id="contacts">
        <h1>Contact Me</h1>
        <div  className="contact-icon" data-aos="zoom-in-left" data-aos-duration="2000">
          <a href="https://www.instagram.com/joysarkar1236/" target="" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100022045114292" target="" className="items">
            <FaFacebookSquare className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/joy-kumar-sarkar-30950621b/" target="" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://github.com/JoyKumarSarkar" target="" className="items">
            <FaGithub className="icons" />
          </a>
          <a href= "mailto:connect2joysarkar@gmail.com" target="" className="items">
            <CgMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
