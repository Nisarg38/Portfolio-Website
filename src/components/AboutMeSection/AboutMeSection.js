import React from "react";
import styled from "styled-components";
import reactlogo from "./reactjs-icon.svg";
import htmllogo from "./html.svg";
import csslogo from "./css.svg";
import jslogo from "./js.svg";
import bootstraplogo from "./Bootstrap.svg";
import xdlogo from "./xd.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0b0b0b;
  height: 90vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;
const Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 14vw;
  margin-right: 9vw;
  margin-top: 40px;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Header1 = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 27px;
  margin-left: -4vw;
  height: 8vh;
  width: 70vw;
  color: #fff;

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
`;

const Header2 = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 26px;
  height: 8vh;
  margin-left: -4vw;
  width: 70vw;
  color: #fff;

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 25vh;
  margin-left: 14vw;
  margin-right: 14vw;
  margin-top: 40px;
  overflow: hidden;
  color: #ffe5db;
`;

const AboutMeContent = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-right: 16.5vw;
  font-size: 19px;

  @media screen and (max-width: 760px) {
    font-size: 15px;
    margin-right: 6.7vw;
  }
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 48vh;

  overflow: hidden;
`;

const Icon = styled.img`
  margin-top: 4%;
`;

function AboutMeSection() {
  return (
    <Container id="aboutme">
      <Content>
        <Header1>
          <h1>About Me</h1>
        </Header1>
        <AboutMe>
          <AboutMeContent>
            I’m a FrontEnd-Developer with a passion for making beautiful,
          </AboutMeContent>
          <AboutMeContent>
            responsive web applications. Technology has always been a major
          </AboutMeContent>
          <AboutMeContent>
            interest in my life, and to combine modern web technology with
            attention
          </AboutMeContent>
          <AboutMeContent>
            to details and a creative stroke is the best way to guarantee a
            beautiful mordern website.
          </AboutMeContent>
        </AboutMe>
        <Header2>
          <h1>Skills</h1>
        </Header2>
        <Skills>
          <Icon src={htmllogo} style={{ width: "10vw", height: "16vh" }} />
          <Icon
            src={csslogo}
            style={{ width: "10vw", height: "16vh", marginLeft: "0vw" }}
          />
          <Icon
            src={jslogo}
            style={{ width: "10vw", height: "16vh", marginLeft: "1vw" }}
          />
          <Icon
            src={reactlogo}
            style={{ width: "10vw", height: "16vh", marginLeft: "-1vw" }}
          />
          <Icon
            src={bootstraplogo}
            style={{ width: "10vw", height: "16vh", marginLeft: "1vw" }}
          />
          <Icon
            src={xdlogo}
            style={{ width: "10vw", height: "16vh", marginLeft: "1.5vw" }}
          />
        </Skills>
      </Content>
    </Container>
  );
}

export default AboutMeSection;
