import React from "react";
import styled from "styled-components";

const Education = () => (
  <EducationSection className="section" id="education">
    <h1 className="title">Education</h1>
    <EducationCard>Stuff</EducationCard>
  </EducationSection>
)

export default Education;

const EducationSection = styled.section`
  min-height: 100vh;
`;

const EducationCard = styled.div`
  box-shadow: 0px 5px 15px #3D3D3D;
  background-color: #8E8E8E;
  color: white;
`;
