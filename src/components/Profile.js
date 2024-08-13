import React from "react";
import { Link } from "react-scroll";
import profilePic from "./assets/cropped-image.png";
import linkedinIcon from "./assets/LinkedIn-Logos/LinkedIn-Logos/LI-In-Bug.png";
import githubIcon from "./assets/github-mark-c791e9551fe4/github-mark/github-mark-white.png";
import resume from "./assets/resume.pdf";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Nisarg Patel</h1>
        <p className="section__text__p2">Full-Stack Data & AI Engineer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(resume, "_blank")}>
            Download CV
          </button>
          <Link to="contact" smooth={true} duration={1000}>
            <button className="btn btn-color-1">Contact Info</button>
          </Link>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/nisarg-patel-1256b816b/",
                "_blank"
              )
            }
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() => window.open("https://github.com/Nisarg38", "_blank")}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
