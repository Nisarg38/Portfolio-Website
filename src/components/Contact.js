import React from "react";
import emailIcon from "./assets/email.png";
import linkedinIcon from "./assets/linkedin.png";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <MdAlternateEmail size={"25px"} />
          <p>
            <a href="mailto:nisarg38@gmail.com">nisarg38@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="icon contact-icon"
            style={{ width: "3.5rem", height: "3.5rem" }}
          />
          <p>
            <a
              href="https://www.linkedin.com/in/nisarg-patel-1256b816b/"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
