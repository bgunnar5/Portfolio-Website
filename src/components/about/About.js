import React from "react";
import styled from "styled-components";
import AboutPic from "../../imgs/about-me.svg";
import Button from "../common/Button";
import { HashLink } from "react-router-hash-link";
import ProgressBar from "./ProgressBar";

const About = () => (
  
  <AboutSection className="section" id="about">
    <Top>
      <Picture src={AboutPic} className="left-padding"></Picture>
      <DescriptionDiv className="right-padding">
        <h1 className="title">About Me</h1>
        <p className="text">
          I'm a software engineer from Eugene, OR who enjoys problem solving, teaching, and learning. 
          I have a Bachelor of Science in Computer Information Science from the University of Oregon and 
          am one of the founders of Inquire: a website you can learn more about in the experience section below.
        </p>
        <p className="text" style={{marginTop: "0px"}}>
          Outside of software engineering, I love hiking and exploring new places. I've traveled all over the Pacific
          Northwest visiting various hiking trails, beaches, and mountains. This picture is from a trip I
          took to Blue Pool in Oregon. If you're interested in getting to know me more or have any suggestions on places
          I should visit, then...
        </p>
        <HashLink to={"#contact"} smooth>
          <Button label="Say Hello" buttonWidth={"200px"} buttonHeight={"50px"}/>
        </HashLink>
      </DescriptionDiv>
    </Top>
    <Skills>
      <h2 className="secondary-title">Technical Skills</h2>
      <SkillsDescription className="text">The following percentages represent my confidence levels with each language I've worked with.</SkillsDescription>
      <Progress>
        <ProgressBar percent={"95"} label={"Python"}  />
        <ProgressBar percent={"90"} label={"React"} bluePath />
        <ProgressBar percent={"85"} label={"C++"} />
        <ProgressBar percent={"80"} label={"C"} bluePath />
        <ProgressBar percent={"70"} label={"JavaScript"} />
        <ProgressBar percent={"85"} label={"NoSQL"} bluePath/>
        <ProgressBar percent={"50"} label={"SQL"} />
        <ProgressBar percent={"90"} label={"HTML"} bluePath/>
        <ProgressBar percent={"70"} label={"CSS"} />
        <ProgressBar percent={"90"} label={"Flask"} bluePath/>
      </Progress>
    </Skills>
  </AboutSection>
);

export default About;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const Top = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 1554px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Picture = styled.img`
  @media (max-width: 1554px) {
    padding-left: 0px;
    padding-right: 0px;
  }
  @media (max-width: 740px) {
    width: 350px;
    height: 350px;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;

  @media (max-width: 1554px) {
    margin-left: 0px;
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 1rem;
    text-align: center;
  }

  @media (max-width: 740px) {
    margin-left: 0px;
    margin-top: 1rem;
    text-align: center;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  margin-top: 5rem;
`;

const Progress = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SkillsDescription = styled.p`
  padding-bottom: 20px;
`;
