import React from "react";
import styled from "styled-components";
import EducationCard from "./EducationCard";
import UOLatinLogo from "../../imgs/uo-logo-latin.svg";
import Award from "./Award";

const Education = () => (
  <EducationSection className="section" id="education">
    <h1 className="title">Education</h1>
    <EducationCard
      img={UOLatinLogo}
      alt="UO Logo with Latin"
      university="University of Oregon"
      dates="Sep. 2017 - Mar. 2022"
      major="B.S. Computer Information Science"
      gpa="3.91"
      minors={["Computer Information Technology", "Mathematics"]}
      />
      <AwardTitle className="secondary-title">Awards</AwardTitle>
      <Award 
        award="WSC/SD Silver Award" 
        description="In 2024 I recieved a silver award from the WSC department at LLNL.
        The WSC Silver Award is described as: 'Recognition and award for significant achievement or 
        contribution that has an impact typically at the division or department level.'
        This reward was granted for consistent and high-quality Merlin development resulting in a major new release."
        reverse
      />
      <Award 
        award="Mercer Family Foundation Grant" 
        description="I received the Mercer Family Foundation Grant for my research
         in space-based solar energy conducted my sophomore year of college. This is a solar
          energy system where the energy obtained from the sun is harvested in space and transferred
         to the ground on Earth via electromagnetic transmission."
      />
      <Award 
        award="Magna Cum Laude Honors" 
        description="In 2022, after recieving my degree, the University of Oregon awarded me with Magna Cum Laude Honors for graduating in the top 5% of my class."
        reverse
      />
      <Award 
        award="Dean's List Honors x4" 
        description="I've received Dean's List Honors from the University of Oregon four different times
         (March 2018, December 2018, March 2019, and June 2019). This is awarded for having 4 classes and finishing with a 4.0 GPA or higher for the term."
      />
      <Award 
        award="Heart of Service Award" 
        description="In 2017 Panera Bread awarded me the Heart of Service Award for outstanding customer service."
        reverse
      />
  </EducationSection>
)

export default Education;

const EducationSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AwardTitle = styled.h2`
  padding: 20px;
  margin-bottom: 50px;
`;