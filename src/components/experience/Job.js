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
        <CompanyContainer className="left-margin">
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
            <JobTitle className="text left-margin">
              {title}, <em>{dates}</em>
            </JobTitle>
          </TitleSection>
          <DescriptionSection>
            <LeftContainer>
              <Line />
            </LeftContainer>
            <div className="text left-margin">
              <Description>{description}</Description>
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
                  <LinkGroup  href={link.link} target="_blank">
                    <LinkTag>
                      {link.message}
                    </LinkTag>
                    <LinkImg src={ExternalLink} alt="External Link Logo" />
                  </LinkGroup>
                ))
              ) : (
                <></>
              )}
            </div>
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
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  border-bottom: 1px solid white;
`;

const Image = styled.img`
  width: 126px;
  height: 126px;

  @media (min-width: 741px) and (max-width: 1800px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 740px) {
    width: 50px;
    height: 50px;
  }
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropArrow = styled.img`
  margin-left: auto;
  width: 4rem;
  height: 4rem;

  @media (min-width: 741px) and (max-width: 1800px) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 740px) {
    width: 2rem;
    height: 2rem;
  }
`;

const CompanyName = styled.h2`
  color: white;
  font-size: 40px;
  margin-bottom: 0px;

  @media (min-width: 741px) and (max-width: 1800px) {
    font-size: 30px;
  }
  
  @media (max-width: 740px) {
    font-size: 20px;
  }
`;

const CompanyType = styled.p`
  margin-top: 0px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftContainer = styled.div`
  min-width: 120px;
  display: flex;
  justify-content: center;

  @media (min-width: 741px) and (max-width: 1800px) {
    min-width: 90px;
  }

  @media (max-width: 740px) {
    min-width: 50px;
  }
`;

const Dot = styled.div`
  height: 20px;
  width: 20px;
  background-color: #8e8e8e;
  border-radius: 50%;

  @media (max-width: 740px) {
    height: 10px;
    width: 10px;
  }
`;

const JobTitle = styled.h2`
  color: white;
`;

const DescriptionSection = styled.div`
  display: flex;
`;

const Line = styled.div`
  width: 3px;
  height: 100%;
  background-color: #8e8e8e;

  @media (max-width: 740px) {
    width: 2px;
  }
`;

const BulletPoints = styled.ul`
  margin-top: auto;
`;

const LinkGroup = styled.a`
  display: flex;
  align-items: center;
`;

const LinkImg = styled.img`
  width: 35px;

  @media (max-width: 740px) {
    width: 20px;
  }
`;

const LinkTag = styled.div`
  margin-right: 1rem;
`;

const Description = styled.p`
  margin-top: 0px;
`;