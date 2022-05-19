import React, { useState } from "react";
import styled from "styled-components";
import ExternalLink from "../../imgs/external-link.svg";
import UpArrow from "../../imgs/dropdown-up.svg";
import DownArrow from "../../imgs/dropdown-down.svg";
import AnimateHeight from "react-animate-height";

const Job = ({
  logo,
  company,
  type,
  title,
  dates,
  description,
  bullets,
  links,
}) => {
  const [height, toggleHeight] = useState(0);

  const handleHeightChange = (e) => {
    var newHeight = (height === 0 ? "auto": 0);
    toggleHeight(newHeight);
    e.stopPropagation()
  }

  return (
    <JobWrapper>
      <HeaderSection
        onClick={handleHeightChange}
      >
        <Image src={logo} alt={company + " Logo"} />
        <CompanyContainer>
          <CompanyName>{company}</CompanyName>
          <CompanyType className="text">({type})</CompanyType>
        </CompanyContainer>
        {height === 0 ? (
          <DropArrow src={UpArrow} />
        ) : (
          <DropArrow src={DownArrow} />
        )}
      </HeaderSection>
        <AnimateHeight duration={500} height={height} >
          <TitleSection>
            <LeftContainer>
              <Dot />
            </LeftContainer>
            <JobTitle>
              {title}, <em>{dates}</em>
            </JobTitle>
          </TitleSection>
          <DescriptionSection>
            <LineContainer>
              <Line />
            </LineContainer>
            <JobDescription className="text">
              <p>{description}</p>
              <p>
                Duties:
                <BulletPoints>
                  {bullets.map((duty) => (
                    <li>{duty}</li>
                  ))}
                </BulletPoints>
              </p>
              {links ? (
                links.map((link) => (
                  <LinkGroup>
                    <LinkTag href={link.link} target="_blank">
                      {link.message}
                    </LinkTag>
                    <LinkImg src={ExternalLink} alt="External Link Logo" />
                  </LinkGroup>
                ))
              ) : (
                <></>
              )}
            </JobDescription>
          </DescriptionSection>
        </AnimateHeight>
    </JobWrapper>
  );
};

export default Job;

const JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 126px;
  height: 126px;
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;

const DropArrow = styled.img`
  margin-left: auto;
  width: 4rem;
  height: 4rem;
`;

const CompanyName = styled.h2`
  color: white;
  font-size: 40px;
  margin-bottom: 0px;
  /* margin-left: 3rem; */
  /* padding-bottom: 0px; */
`;

const CompanyType = styled.p`
  /* padding-top: 0px; */
  margin-top: 0px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftContainer = styled.div`
  width: 126px;
  display: flex;
  justify-content: center;
`;

const Dot = styled.div`
  height: 20px;
  width: 20px;
  background-color: #8e8e8e;
  border-radius: 50%;
`;

const JobTitle = styled.h2`
  color: white;
  font-size: 30px;
  margin-left: 3rem;
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const LineContainer = styled.div`
  min-width: 126px;
  display: flex;
  justify-content: center;
`;

const Line = styled.div`
  width: 3px;
  height: 100%;
  background-color: #8e8e8e;
`;

const JobDescription = styled.div`
  margin-left: 3rem;
`;

const BulletPoints = styled.ul`
  margin-top: auto;
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
`;

const LinkImg = styled.img`
  width: 35px;
`;

const LinkTag = styled.a`
  margin-right: 1rem;
`;

const CollapsableSection = styled.div`
  transition: all 0.5s ease 0s;

  &:before {
    transition: .3s;
  }
`;