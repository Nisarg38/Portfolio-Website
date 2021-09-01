import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import reactlogo from "./reactjs-icon.svg";
import githublogo from "./github.svg";
import htmllogo from "./html.svg";
import npmlogo from "./npmjs.svg";
import csslogo from "./css.svg";
import firebaselogo from "./firebase.svg";
import jslogo from "./js.svg";
import pylogo from "./python.svg";
import livelogo from "./live.svg";
import chatapp from "./chatapp.jpeg";
import cryptotracker from "./crypto-tracker.png";
import gameofLife from "./gameoflife.png";
import weatherapp from "./weatherapp.png";
import sortalgo from "./sortingalgo.png";
import movieapp from "./movieapp.png";
import sudoku from "./sudoku.png";
import htmljs from "./html-css-js.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0b0b0b;
  padding: 0 30px;
  height: 90vh;
  width: 100vw;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 14vw;
  margin-right: 14vw;
  margin-top: 40px;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 0 10px;
  font-size: 30px;
  margin-left: -4vw;
  width: 70vw;
  color: #fff;

  @media screen and (max-width: 760px) {
    font-size: 20px;
  }
`;

const Work = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 80vh;
  padding-top: 6vh;
  margin-left: 14vw;
  margin-right: 14vw;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 240px;
  height: 170px;
  margin-left: 35px;
  margin-top: 35px;
  border: solid #fff 0.2px;
  border-radius: 1rem;
`;

const Item = styled.div`
  margin-left: 1vw;
  height: 480px;
  width: 320px;
  border: solid #d72323 5px;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
`;

const CardLangIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
`;

const CardIcon = styled.img``;

const CardDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 250px;
  margin-bottom: -20px;
  margin-left: 30px;
  color: #fff;
`;

const CardGitLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 250px;
  height: 80px;
  margin-top: 20px;
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2.5 },
  { width: 1200, itemsToShow: 3.5 },
];

function Pagetwo() {
  return (
    <Container id="mywork">
      <Content>
        <Header>
          <h1>My Work</h1>
        </Header>
        <Work>
          <Carousel breakPoints={breakPoints} style={{ marginLeft: "8.3vw" }}>
            <Item>
              <CardImage src={cryptotracker} alt="" />
              <CardLangIcons>
                <CardIcon
                  src={reactlogo}
                  style={{ width: "90px", height: "40px" }}
                />
                <CardIcon
                  src={htmllogo}
                  style={{
                    width: "90px",
                    height: "40px",
                    marginLeft: "-25px",
                  }}
                />
                <CardIcon
                  src={npmlogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-20px" }}
                />
                <CardIcon
                  src={csslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-20px" }}
                />
              </CardLangIcons>
              <CardDescription>
                <h1
                  style={{
                    fontSize: "20px",
                    marginBottom: "-20px",
                    padding: "0",
                    fontWeight: "bold",
                  }}
                >
                  Crypto Market Tracker
                </h1>
                <br /> Libraries Used:
                <br />- Axios [For API]
                <br />- Framer Motion[Animation]
                <br />- Styled-Components[CSS]
              </CardDescription>
              <CardGitLogo>
                <a
                  href="https://nisarg38.github.io/reactjs-api-crypto-tracker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={livelogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://github.com/Nisarg38/reactjs-api-crypto-tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={githublogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "-40px",
                    }}
                  />
                </a>
              </CardGitLogo>
            </Item>
            <Item>
              <CardImage src={chatapp} alt="" />
              <CardLangIcons>
                <CardIcon
                  src={reactlogo}
                  style={{ width: "90px", height: "40px" }}
                />
                <CardIcon
                  src={firebaselogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-25px" }}
                />
                <CardIcon
                  src={npmlogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-30px" }}
                />
                <CardIcon
                  src={csslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-16px" }}
                />
              </CardLangIcons>
              <CardDescription>
                <h1
                  style={{
                    fontSize: "20px",
                    marginBottom: "-20px",
                    padding: "0",
                    fontWeight: "bold",
                  }}
                >
                  Live Chat-App
                </h1>
                <br /> Libraries Used:
                <br />- Firebase
                <br />- Firebase Hooks
                <br />- Styled-Components[CSS]
              </CardDescription>
              <CardGitLogo>
                <a
                  href="https://nisarg38.github.io/ChatApp-ReactFirebase/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={livelogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://github.com/Nisarg38/ChatApp-ReactFirebase"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={githublogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "-40px",
                    }}
                  />
                </a>
              </CardGitLogo>
            </Item>
            <Item>
              <CardImage src={gameofLife} alt="" />
              <CardLangIcons>
                <CardIcon
                  src={htmllogo}
                  style={{ width: "90px", height: "40px" }}
                />
                <CardIcon
                  src={jslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-10px" }}
                />
                <CardIcon
                  src={csslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-47px" }}
                />
              </CardLangIcons>
              <CardDescription>
                <h1
                  style={{
                    fontSize: "20px",
                    marginBottom: "-20px",
                    padding: "0",
                    fontWeight: "bold",
                  }}
                >
                  Game of Life
                </h1>
                <br />
                John Conway's Famous Game of Life. More info about
                <br />
                the rules and concept
                <br />
                behind the game at Wikipedia
              </CardDescription>
              <CardGitLogo>
                <a
                  href="https://nisarg38.github.io/Game-of-Life/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={livelogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://github.com/Nisarg38/Game-of-Life"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={githublogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "-40px",
                    }}
                  />
                </a>
              </CardGitLogo>
            </Item>
            <Item>
              <CardImage src={weatherapp} alt="" />
              <CardLangIcons>
                <CardIcon
                  src={reactlogo}
                  style={{ width: "90px", height: "40px" }}
                />
                <CardIcon
                  src={npmlogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-25px" }}
                />
                <CardIcon
                  src={csslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-13px" }}
                />
              </CardLangIcons>
              <CardDescription>
                <h1
                  style={{
                    fontSize: "20px",
                    marginBottom: "-20px",
                    padding: "0",
                    fontWeight: "bold",
                  }}
                >
                  Weather-App
                </h1>
                <br /> Libraries Used:
                <br />- Axios[For API]
                <br />- Styled-Components[CSS]
                <br />
                <br />
              </CardDescription>
              <CardGitLogo>
                <a
                  href="https://nisarg38.github.io/weatherApp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={livelogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://github.com/Nisarg38/weatherApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={githublogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "-40px",
                    }}
                  />
                </a>
              </CardGitLogo>
            </Item>
            <Item>
              <CardImage src={sortalgo} alt="" />
              <CardLangIcons>
                <CardIcon
                  src={htmllogo}
                  style={{ width: "90px", height: "40px" }}
                />
                <CardIcon
                  src={jslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-10px" }}
                />
                <CardIcon
                  src={csslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-47px" }}
                />
              </CardLangIcons>
              <CardDescription>
                <h1
                  style={{
                    fontSize: "20px",
                    marginBottom: "-20px",
                    padding: "0",
                    fontWeight: "bold",
                  }}
                >
                  Sorting-Algo Visualizer
                </h1>
                <br />
                Algorithms Showed:
                <br />- Select Sort
                <br />- Bubble Sort
                <br />- Insertion Sort & Quick Sort
              </CardDescription>
              <CardGitLogo>
                <a
                  href="https://nisarg38.github.io/Sorting-Algo-Visualizer-Js/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={livelogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://github.com/Nisarg38/Sorting-Algo-Visualizer-Js"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={githublogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "-40px",
                    }}
                  />
                </a>
              </CardGitLogo>
            </Item>
            <Item>
              <CardImage src={movieapp} alt="" />
              <CardLangIcons>
                <CardIcon
                  src={reactlogo}
                  style={{ width: "90px", height: "40px" }}
                />
                <CardIcon
                  src={npmlogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-25px" }}
                />
                <CardIcon
                  src={csslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-13px" }}
                />
              </CardLangIcons>
              <CardDescription>
                <h1
                  style={{
                    fontSize: "20px",
                    marginBottom: "-20px",
                    padding: "0",
                    fontWeight: "bold",
                  }}
                >
                  Movie-App
                </h1>
                <br /> Libraries Used:
                <br />- Axios[For API]
                <br />
                <br />
                <br />
              </CardDescription>
              <CardGitLogo>
                <a
                  href="https://nisarg38.github.io/The_Shoppies_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={livelogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                </a>
                <a
                  href="https://github.com/Nisarg38/The_Shoppies_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={githublogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "-40px",
                    }}
                  />
                </a>
              </CardGitLogo>
            </Item>
            <Item>
              <CardImage />
              <CardLangIcons>
                <CardIcon
                  src={reactlogo}
                  style={{ width: "90px", height: "40px" }}
                />
                <CardIcon
                  src={npmlogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-25px" }}
                />
                <CardIcon
                  src={csslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-13px" }}
                />
              </CardLangIcons>
              <CardDescription>
                <h1
                  style={{
                    fontSize: "20px",
                    marginBottom: "-20px",
                    padding: "0",
                    fontWeight: "bold",
                  }}
                >
                  Pomodoro Timer
                </h1>
                <br />
                App made using React-Native
                <br />
                Basic React-Native App, Only
                <br />
                have 2 features.Timer
                <br />
                for Work and Break time
                <br />
                with vibration of completion
              </CardDescription>
              <CardGitLogo>
                <a
                  href="https://github.com/Nisarg38/Pomodoro_Timer_React-Native"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={githublogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "-40px",
                    }}
                  />
                </a>
              </CardGitLogo>
            </Item>
            <Item>
              <CardImage src={sudoku} alt="" />
              <CardLangIcons>
                <CardIcon
                  src={pylogo}
                  style={{ width: "90px", height: "40px", marginLeft: "5px" }}
                />
              </CardLangIcons>
              <CardDescription>
                <h1
                  style={{
                    fontSize: "20px",
                    marginBottom: "-20px",
                    padding: "0",
                    fontWeight: "bold",
                  }}
                >
                  Sudoku
                </h1>
                <br />
                1st Build
                <br /> Solving in terminal:
                <br /> using algo, run solver.py
                <br />
                2nd Build
                <br />
                Making a GUI with pygames
              </CardDescription>
              <CardGitLogo>
                <a
                  href="https://github.com/Nisarg38/sudoku"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={githublogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "-40px",
                    }}
                  />
                </a>
              </CardGitLogo>
            </Item>
            <Item>
              <CardImage src={htmljs} alt="" />
              <CardLangIcons>
                <CardIcon
                  src={htmllogo}
                  style={{ width: "90px", height: "40px" }}
                />
                <CardIcon
                  src={jslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-10px" }}
                />
                <CardIcon
                  src={csslogo}
                  style={{ width: "90px", height: "40px", marginLeft: "-47px" }}
                />
              </CardLangIcons>
              <CardDescription>
                <h1
                  style={{
                    fontSize: "20px",
                    marginBottom: "-20px",
                    padding: "0",
                    fontWeight: "bold",
                  }}
                >
                  Basic Js Projects
                </h1>
                <br />
                Projects made:
                <br />- To-Do list
                <br />- Calculator
                <br />- Contact Form
              </CardDescription>
              <CardGitLogo>
                <a
                  href="https://github.com/Nisarg38/HTML-CSS-JAVASCRIPT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardIcon
                    src={githublogo}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "-40px",
                    }}
                  />
                </a>
              </CardGitLogo>
            </Item>
          </Carousel>
        </Work>
      </Content>
    </Container>
  );
}

export default Pagetwo;
