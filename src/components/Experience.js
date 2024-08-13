import React from "react";
import checkmarkIcon from "./assets/checkmark.png";
import arrowIcon from "./assets/arrow.png";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <IoCheckmarkCircle className="icon" size={"30px"} />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <IoCheckmarkCircle className="icon" size={"30px"} />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <IoCheckmarkCircle className="icon" size={"30px"} />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <IoCheckmarkCircle className="icon" size={"30px"} />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <IoCheckmarkCircle className="icon" size={"30px"} />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <IoCheckmarkCircle className="icon" size={"30px"} />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <IoCheckmarkCircle className="icon" size={"30px"} />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <IoCheckmarkCircle className="icon" size={"30px"} />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <IoCheckmarkCircle className="icon" size={"30px"} />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <IoCheckmarkCircle className="icon" size={"30px"} />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      /> */}
      <MdKeyboardDoubleArrowDown
        className="icon arrow"
        size={"30px"}
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;
