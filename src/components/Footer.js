import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Nisarg Patel. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
