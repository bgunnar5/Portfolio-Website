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
          I’m a great programmer, enthusiastic teacher, and most of all a team player. 
          I’m a recent college grad out of the University of Oregon and one of the founders of Inquire. 
          I find joy in software engineering and exploring new places. I’ve never shied away from a challenge 
          and am more than willing to learn from my mistakes. If you’re interested in getting to know me, then...
        </p>
        <HashLink to={"#contact"} smooth>
          <Button label="Say Hello" buttonWidth={"200px"} buttonHeight={"50px"}/>
        </HashLink>
      </DescriptionDiv>
    </Top>
    <Skills>
      <SecondaryTitle className="title">Technical Skills</SecondaryTitle>
      <SkillsDescription>The following percentages represent my confidence levels with each language I've worked with.</SkillsDescription>
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
  padding-top: 0px;
`;

const Top = styled.div`
  display: flex;
  height: 100%;
`;

const Picture = styled.img``;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  margin-top: 5rem;
`;

const SecondaryTitle = styled.h2`
  font-size: 45px;
`;

const Progress = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SkillsDescription = styled.p`
  padding-bottom: 20px;
  font-size: 25px;
`;