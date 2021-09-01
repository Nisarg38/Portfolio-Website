import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItem,
  FooterLink,
  FooterLinkTitle,
  FooterImg,
} from "./FooterElements";
import githublogo from "./github.svg";
import twitterlogo from "./twitter.svg";
import styled from "styled-components";
import instalogo from "./instagram.svg";
import linkedinlogo from "./linkedin.svg";

const CardIcon = styled.img``;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Let's be internet BFFs</FooterLinkTitle>
              <FooterImg>
                <FooterLink>
                  <a
                    href="https://github.com/Nisarg38"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CardIcon
                      src={githublogo}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </a>
                </FooterLink>

                <FooterLink>
                  <a
                    href="https://twitter.com/Nisarg82684108"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CardIcon
                      src={twitterlogo}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </a>
                </FooterLink>

                <FooterLink>
                  <a
                    href="https://www.instagram.com/nisarggpatel/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CardIcon
                      src={instalogo}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </a>
                </FooterLink>

                <FooterLink>
                  <a
                    href="https://www.linkedin.com/in/nisarg-patel-1256b816b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CardIcon
                      src={linkedinlogo}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </a>
                </FooterLink>
              </FooterImg>
            </FooterLinkItem>
          </FooterLinkWrapper>
        </FooterLinkContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
