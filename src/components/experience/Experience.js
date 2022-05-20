import React from "react";
import styled from "styled-components";
import UOLogo from "../../imgs/uo-logo.svg";
import InquireLogo from "../../imgs/inquire-logo.svg";
import LockImg from "../../imgs/lock.svg";
import ChartImg from "../../imgs/chart.svg";
import Job from "./Job";

const Experience = () => {
  return (
    <ExperienceSection className="section" id="experience">
      <h1 className="title" style={{ alignSelf: "center" }}>
        Experience
      </h1>

      <Job
        logo={InquireLogo}
        company="Inquire"
        type="Personal Project"
        title="Full Stack Developer"
        dates="Feb. 2021 - Sep. 2021"
        description="A message board for course instructors and students to post questions, provide answers, connect, 
      and communicate. My colleagues and I built Inquire as an intuitive tool to aid professors with classroom discussion 
      and incentivize productive interaction amongst peers."
        bullets={[
          "Integrated backend resources with the Flask framework to communicate with our frontend API and store data in our MongoDB database",
          "Created frontend components using React",
          "Maintained a RESTful API to help implement CRUD operations",
          "Worked with a team of 4 other software engineers",
        ]}
        links={[
          { link: "https://inquiremb.com", message: "Visit the site" },
          {
            link: "https://github.com/5-Bits-in-a-Byte/inquiremb",
            message: "Open in GitHub",
          },
        ]}
      />

      <Job 
      logo={UOLogo}
      company="University of Oregon"
      type="Work Experience"
      title="Learning Assistant"
      dates="Sep. 2020 - Mar. 2022"
      description="At the University of Oregon, I helped instruct three introductory computer science classes: CIS 210, CIS 211, and CIS 212. 
      The topics of these classes included programming basics (conditionals, loops, etc.), object oriented programming, and data structures."
      bullets={["Helped teach Python and C basics, OOP, and data structures to students", "Increased my ability to review, understand, and develop code"]}
      />

      <Job 
        logo={LockImg}
        company="Encryption Project"
        type="School Project"
        title="Software Engineer"
        dates="Feb. 2021"
        description="Completed as a class assignment for CIS 330 at the University of Oregon, this encryption project showcases an object
        oriented approach to five different encryption techniques: Substitution, Caesar, ROT13, Running Key, and Vigenere Ciphers. This project was completed in C++."
        bullets={["Learned how 5 different types of ciphers work", "Utilized OOP in C++", "Focused on inheritence and polymorphism"]}
        links={[{"link": "https://github.com/bgunnar5/CIS-330/tree/master/homework06", "message": "Open in GitHub"}]}
      />

      <Job 
        logo={ChartImg}
        company="Time Series Analysis Library"
        type="School Project"
        title="Software Engineer"
        dates="Jan. 2021 - Feb. 2021"
        description="This time series analysis support project supplies the user with an all-inclusive library that gives the ability to create a transformation tree and execution pipeline. 
        These object-oriented data structures allow the user to create and modify the tree, and also to create pipelines that successively execute different processes regarding time series files. 
        These processes include various preprocessing methods (such as file I/O, data involving pandas DataFrame creation/manipulation, and more), modeling and forecasting, statistics, and visualization. 
        Data scientists can then use this transformation tree design to run different pipelines and see which forecasting model works best."
        bullets={["Created the visualization component using Python frameworks", "Worked alongside my colleague to construct a transformation tree capable of evaluating multiple execution pipelines for a given time series"]}
        links={[{"link": "https://github.com/bgunnar5/TimeSeries", "message": "Open in GitHub"}]}
      />
    </ExperienceSection>
  );
};

export default Experience;

const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  /* min-height: 100vh; */
  padding-top: 25px;
`;
