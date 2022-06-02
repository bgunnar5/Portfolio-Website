import React from "react";
import styled from "styled-components";
import ProfilePic from "../imgs/profile-pic-home.svg";

const Home = () => {
  return (
    <>
      <HomeSection className="section" id="home">
        <TextWrapper className="left-padding">
          <Intro>Hi, I'm</Intro>
          <Name className="title">Brian Gunnarson</Name>
          <Description className="text">
            A software engineer with a passion for solving complex
            problems. I enjoy teaching and learning all there is to know about
            software development.
          </Description>
        </TextWrapper>
        <Picture src={ProfilePic} className="right-padding"></Picture>
      </HomeSection>
    </>
  );
};

export default Home;

const Intro = styled.h3`
  color: #7bafd4;
  font-size: 35px;
  margin: 3px;

  @media (min-width: 741px) and (max-width: 1500px) {
    font-size: 27px;
  }

  @media (max-width: 740px) {
    font-size: 20px;
    margin: auto;
  }
`;

const Name = styled.h1`
  font-size: 70px;
  margin: 10px 0;

  @media (min-width: 741px) and (max-width: 1500px) {
    font-size: 52px;
  }

  @media (max-width: 740px) {
    font-size: 35px;
    margin: auto;
  }
`;

const Description = styled.p`
  margin: 3px;
`;

const Picture = styled.img`
  @media (min-width: 741px) and (max-width: 1500px) {
    height: 300px;
    width: 300px;
  }

  @media (max-width: 740px) {
    height: 200px;
    width: 200px;
    padding-bottom: 10px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 740px) {
    text-align: center;
  }
`;

const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-height: 100vh;

  @media (max-width: 740px) {
    flex-direction: column-reverse;
  }
`;
