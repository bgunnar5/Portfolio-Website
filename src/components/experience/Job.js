import React from "react";
import styled from "styled-components";
import ExternalLink from "../../imgs/external-link.svg";

const Job = ({logo, company, type, title, dates, description, bullets, links}) => {
    return (
    <JobWrapper>
    <HeaderSection>
      <Image src={logo} alt={company + " Logo"} />
      <CompanyContainer>
        <CompanyName>{company}</CompanyName>
        <CompanyType className="text">({type})</CompanyType>
      </CompanyContainer>
    </HeaderSection>
    <TitleSection>
      <LeftContainer>
        <Dot />
      </LeftContainer>
      <JobTitle>{title}, <em>{dates}</em></JobTitle>
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
            {bullets.map(duty => (
                <li>{duty}</li>
            ))}
          </BulletPoints>
        </p>
        {links ? links.map(link => (
            <LinkGroup>
                <LinkTag href={link.link} target="_blank">{link.message}</LinkTag>
                <LinkImg src={ExternalLink} alt="External Link Logo"/>
            </LinkGroup>
        )) : <></>}
      </JobDescription>
    </DescriptionSection>
  </JobWrapper>
)};

export default Job;

const JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 2rem;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  background-color: #8E8E8E;
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
  background-color: #8E8E8E;
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