import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #0b0b0b;
  overflow: hidden;
  border-radius: 0.5 rem;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;

  margin: 0 auto;
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
  color: #fff;
`;

export const FooterLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  margin-right: 20px;
  font-size: 14px;

  &:hover {
    color: #d72323;
    transition: 0.3s ease-in-out;
  }
`;

export const FooterImg = styled.div`
  display: flex;
  flex-direction: row;
`;
