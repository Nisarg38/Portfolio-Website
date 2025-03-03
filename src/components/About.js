// import React from "react";
// import aboutPic from "./assets/about-pic-.svg";
// import experienceIcon from "./assets/experience.png";
// import educationIcon from "./assets/education.png";
// import arrowIcon from "./assets/arrow.png";
// import { MdCastForEducation } from "react-icons/md";
// import { BsPersonWorkspace } from "react-icons/bs";
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";

// const About = () => {
//   return (
//     <section id="about">
//       <p className="section__text__p1">Get To Know More</p>
//       <h1 className="title">About Me</h1>
//       <div className="section-container">
//         <div className="section__pic-container">
//           <img src={aboutPic} alt="Profile picture" className="about-pic" />
//         </div>
//         <div className="about-details-container">
//           <div className="about-containers">
//             <div className="details-container">
//               <BsPersonWorkspace size={29} />
//               <h3>Experience</h3>
//               <p>
//                 2+ years <br />
//                 Data & AI Engineering, Analysis, Software Development
//               </p>
//             </div>
//             <div className="details-container">
//               <MdCastForEducation size={32} />
//               <h3>Education</h3>
//               <p>
//                 B.Sc. Computer Science <i>Specializing in AI</i>
//               </p>
//             </div>
//           </div>
//           <div className="text-container" style={{ marginLeft: "25px" }}>
//             <p>
//               AI Engineer with expertise in data analysis, machine learning, and
//               software engineering. Currently focused on creating AI service agents
//               for Auto Dealership omni-channels, achieving a 10-15% increase in call
//               conversions. Passionate about product development, LLMs, agentic
//               frameworks, and sharing insights on my blog. Experienced in
//               leading data-driven projects and building ETL pipelines.
//             </p>
//           </div>
//         </div>
//       </div>
//       <MdKeyboardDoubleArrowDown
//         className="icon arrow"
//         size={"30px"}
//         onClick={() => (window.location.href = "./#experience")}
//       />
//     </section>
//   );
// };

// export default About;

import React from "react";
import aboutPic from "./assets/about-pic-.svg";
import { MdCastForEducation } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Discover More About Me</p>
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
              2.5+ years <br />
              AI & Data Engineering, Analysis, Software Development
              </p>
            </div>
            <div className="details-container">
              <MdCastForEducation size={32} />
              <h3>Passion &amp; Interests</h3>
              <p>
                Enthusiast of AI, product development, LLMs, and agentic frameworks
              </p>
            </div>
          </div>
          <div className="text-container" style={{ marginLeft: "25px", fontSize: "1.2rem" }}>
            <p>
              I am an AI Engineer creating an omni‑channel AI service agent for Auto Dealerships that handles calls—resulting in a 10–15% boost in conversions. I’m passionate about AI, product development, and exploring new frontiers in LLMs and agentic frameworks.
              <br /><br />
              I also share my thoughts, experiences, and current projects on my blog.
            </p>
            {/* <div className="blog-link" style={{ marginTop: "50px" }}>
              <a href="/blog" className="btn">
                Visit My Blog
              </a>
            </div> */}
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
