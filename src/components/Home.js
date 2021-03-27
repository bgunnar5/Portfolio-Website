import React from "react";
import styled from "styled-components";
import ProfilePic from "../imgs/profile-pic-home.svg";

const Home = () => {
  return (
    <>
      <Wrapper>
        <TextWrapper>
          <Intro>Hi, I'm</Intro>
          <Name>Brian Gunnarson</Name>
          <Description>
            An aspiring software engineer with a passion for solving complex
            problems. I enjoy teaching and learning all there is to know about
            software development.
          </Description>
        </TextWrapper>
        <Picture src={ProfilePic}></Picture>
      </Wrapper>
    </>
  );
};

export default Home;

const Intro = styled.h3`
  color: #7bafd4;
  font-size: 25px;
  margin: 3px;
`;

const Name = styled.h1`
  color: #ffffff;
  font-size: 50px;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 25px;
  margin: 3px;
`;

const Picture = styled.img`
  padding: 40px 40px 25px 5px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 5px 25px 40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;