import React from "react";
import styled from "styled-components";

const About = () => (
  <AboutSection id="about">
    <h2>About Page</h2>
  </AboutSection>
);

export default About;

const AboutSection = styled.section`
  align-items: center;
  position: relative;
  padding-top: 1000px;
  padding-bottom: 100px;
  /* @media (max-width: 1046px) {
    flex-direction: column;
  } */
`;