import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Nisarg Patel</div>
        <div>
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
            <li>
              <a href={process.env.PUBLIC_URL + "/blog"} className="external-link" target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Nisarg Patel</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL + "/blog"} onClick={toggleMenu} className="external-link">
                Blog
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
