import React from "react";
import styled from "styled-components";

const EducationCard = ({img, alt, university, dates, major, gpa, minors}) => {
    return (
    <CardWrapper>
      <TopCardSection>
        <UOLogo src={img} alt={alt} />
        <TopTextWrapper>
          <UniversityName>{university}</UniversityName>
          <Dates className="text">{dates}</Dates>
        </TopTextWrapper>
      </TopCardSection>
      <BottomWrapper>
        <BottomCardSection>
          <Major className="text">{major}</Major>
          {gpa ? <GPA className="text">GPA: {gpa}</GPA> : <></>}
          {minors ? 
            <Minors className="text">
                Minors:
                <br />
                <Bullets>
                    {minors.map((minor) => (
                        <li>{minor}</li>
                    ))}
                </Bullets>
            </Minors>
            :
            <></>}
        </BottomCardSection>
      </BottomWrapper>
    </CardWrapper>
    )
}

export default EducationCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 800px;
  height: 500px;

  box-shadow: 0px 0px 15px #007030;
  background-color: #212121;
  color: white;

  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 741px) and (max-width: 1800px) {
      width: 700px;
      height: 400px;
  }

  @media (max-width: 740px) {
      width: 400px;
      height: 250px;
  }
`;

const TopCardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UOLogo = styled.img`
  width: 175px;
  height: 175px;
  margin-top: 10px;

  @media (max-width: 740px) {
      width: 75px;
      height: 75px;
  }
`;

const TopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: 12px;

  @media (max-width: 740px) {
      margin-left: 1rem;
  }
`;

const UniversityName = styled.h2`
  font-size: 35px;
  margin: 0px;
  padding-bottom: 5px;

  @media (max-width: 740px) {
      font-size: 20px;
      padding-bottom: 0px;
  }
`;

const Dates = styled.p`
  margin: 0px;
  padding-top: 5px;
  font-size: 25px;
  color: white;

  @media (max-width: 740px) {
      font-size: 17px;
  }
`;

// Need this wrapper to have center alignment
const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// Need this wrapper to have left aligned text
const BottomCardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;

  @media (max-width: 740px) {
      margin-left: 0px;
  }
`;

const Major = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
`;

const GPA = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Minors = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
`;

const Bullets = styled.ul`
  margin-top: 5px;
`;