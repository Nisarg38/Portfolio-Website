import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import project1Img from "./assets/project-1.png";
import project2Img from "./assets/project-2.png";
import project3Img from "./assets/project-3.png";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project1Img} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}>
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}>
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project2Img} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}>
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}>
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project3Img} alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Project Three
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}>
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => (window.location.href = "https://github.com/")}>
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <MdKeyboardDoubleArrowDown
        className="icon arrow"
        size={"30px"}
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Projects;
