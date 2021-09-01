import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import WorkSection from "../components/WorkSection/WorkSection";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import Contact from "../components/ContactSection/Contact";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <HeroSection />
      <AboutMeSection />
      <WorkSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
