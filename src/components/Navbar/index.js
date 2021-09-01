import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  Logo,
  Contact,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
import logo from "./Logo.svg";
import sayhello from "./sayhello.svg";

const Navbar = ({ toggle }) => {
  const [scrollNav, setscrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setscrollNav(true);
    else setscrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scroll={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo src={logo} alt="" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks
                to="aboutme"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                About Me
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="mywork"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                My Work
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="contact"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact Me
              </NavLinks>
            </NavItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
