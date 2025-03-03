import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import project1Img from "./assets/project-1.jpg";
import project2Img from "./assets/project-2.png";
import project3Img from "./assets/project-3.png";
import project4Img from "./assets/project-4.png";
import promptixImg from "./assets/promptix-studio-dashboard.png";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="projects-container">

        <div className="project-card">
            <div className="project-image-container">
              <img src={promptixImg} alt="Promptix" className="project-img" />
            </div>
            <h2 className="project-title">Promptix</h2>
            <p className="project-description">
              A lightweight, powerful, local-first prompt management system that brings 
              version control, dynamic templating, and a visual studio interface to your 
              LLM workflows.
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Nisarg38/promptix-python")
                }>
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://pypi.org/project/promptix/")
                }>
                PyPI
              </button>
            </div>
          </div>


          <div className="project-card">
            <div className="project-image-container">
              <img src={project1Img} alt="Project 1" className="project-img" />
            </div>
            <h2 className="project-title">ZApp</h2>
            <p className="project-description">
              A mobile application built with React Native that integrates with
              Zabbix for monitoring and visualizing data. Currently in App
              Review.
            </p>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn">
                Hopefully Live Soon 🤞
              </button>
              <button className="btn btn-color-2 project-btn">Live Demo</button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-container">
              <img src={project2Img} alt="Project 2" className="project-img" />
            </div>
            <h2 className="project-title">
              Exploring Transformer Models
            </h2>
            <p className="project-description">
              This project investigates and compares the question-answering
              capabilities of BERT, GPT and LLama models, using the SQuAD 2.0
              dataset.
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Nisarg38/ExploringQAtechniques-BERTandGPT")
                }>
                Github
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-container">
              <img src={project3Img} alt="Project 3" className="project-img" />
            </div>
            <h2 className="project-title">
              SpaceTitanic-ML
            </h2>
            <p className="project-description">
              Kaggle Spaceship Titanic Dimensional Rescue Challenge! Your
              mission is to predict which passengers were transported to an
              alternate dimension during a collision with a spacetime anomaly.
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Nisarg38/SpaceTitanic-ML")
                }>
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Nisarg38/SpaceTitanic-ML/blob/main/SpaceTitanic-ML.ipynb")
                }>
                Live Demo
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-container">
              <img src={project4Img} alt="Project 4" className="project-img" />
            </div>
            <h2 className="project-title">Fun with AI</h2>
            <p className="project-description">
              Live chatting with an AI using OpenAI's engine of user's choice.
              "Chatgpt" before Chatgpt lol.
            </p>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Nisarg38/Spacestagram")
                }>
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://nisarg38.github.io/FunWithAI/")
                }>
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
