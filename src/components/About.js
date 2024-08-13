import React from "react";
import aboutPic from "./assets/about-pic-.svg";
import experienceIcon from "./assets/experience.png";
import educationIcon from "./assets/education.png";
import arrowIcon from "./assets/arrow.png";
import { MdCastForEducation } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <BsPersonWorkspace size={29} />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Data & AI Engineering, Analysis, Software Development
              </p>
            </div>
            <div className="details-container">
              <MdCastForEducation size={32} />
              <h3>Education</h3>
              <p>
                B.Sc. Computer Science <i>Specializing in AI</i>
              </p>
            </div>
          </div>
          <div className="text-container" style={{ marginLeft: "25px" }}>
            <p>
              Dynamic computer science professional specialized in AI with
              expertise in data analysis, machine learning, and software
              engineering. Experienced in leading data-driven projects, building
              ETL pipelines, and working with cloud platforms. Passionate about
              using data to drive business success and innovation.
            </p>
          </div>
        </div>
      </div>
      <MdKeyboardDoubleArrowDown
        className="icon arrow"
        size={"30px"}
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  );
};

export default About;
