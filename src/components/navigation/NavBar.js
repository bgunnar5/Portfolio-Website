import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import AboutImg from "../../imgs/about.svg";
import ExperienceImg from "../../imgs/experience.svg";
import EducationImg from "../../imgs/education.svg";
import ContactImg from "../../imgs/contact.svg";
import ResumeImg from "../../imgs/resume.svg";
import SignatureImg from "../../imgs/website-signature.svg";
import { HashLink } from "react-router-hash-link";
import PDF from "../../static/brian-gunnarson-resume.pdf";
import HamburgerIcon from "../../imgs/hamburger-menu.svg";
import MobileLinks from "./MobileLinks";
import UseWindowDims from "../common/UseWindowDims";

const NavBar = () => {
  const [display, toggleDisplay] = useState(false);
  const {width, height} = UseWindowDims();

  useEffect(() => {
    if (width >= 740) {
      toggleDisplay(false);
    }
  }, [width])
  
  return (
    <NavWrapper display={display}>
      <Nav>
        <Wrapper>
          <HashLink to="#home" smooth>
            <Signature src={SignatureImg} />
          </HashLink>
          <MenuButtons>
            <MenuItem
              to="#about"
              label="About"
              test={true}
              img={AboutImg}
            />
            <MenuItem
              to="#experience"
              label="Experience"
              img={ExperienceImg}
            />
            <MenuItem
              to="#education"
              label="Education"
              img={EducationImg}
            />
            <MenuItem
              to="#contact"
              label="Contact"
              img={ContactImg}
            />
            <MenuItem
              to={PDF}
              label="Resume"
              img={ResumeImg}
              color
              blank
            />
          </MenuButtons>
        </Wrapper>
      </Nav>
      <MobileSection>
        <MobileWrapper>
          <HashLink to="#home" smooth style={{paddingLeft: "20px"}}>
            <Signature src={SignatureImg} />
          </HashLink>
          <MenuButtons style={{paddingRight: "20px"}}>
            {display ? <CloseIcon onClick={() => {toggleDisplay(!display)}} >X</CloseIcon> : <Icon src={HamburgerIcon} alt="hamburger menu icon" onClick={() => {toggleDisplay(!display)}} />}
          </MenuButtons>
        </MobileWrapper>
          <MobileLinks links={[{"label": "About", "to": "#about"}, {"label": "Experience", "to": "#experience"}, {"label": "Education", "to": "#education"}, {"label": "Contact", "to": "#contact"}, {"label": "Resume", "to": PDF, "target": true}]} display={display} toggleDisplay={toggleDisplay} />
      </MobileSection>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.div`
  border-bottom: ${(props) => props.display ? "none" : "solid 1px"};
  background-color: #212121;
  width: 100%;
  position: fixed;
  z-index: 2;
`;

const Nav = styled.nav`
  @media (max-width: 740px) {
    display: none;
  }
`;

const Wrapper = styled.ul`
  display: flex;
  margin: auto;
`;

const Signature = styled.img`
  margin: 12px 6px;

  @media (min-width: 741px) and (max-width: 1800px) {
    height: 60px;
    width: 80px;
  }

  @media (max-width: 740px) {
    height: 50px;
    width: 70px;
  }
`;

const MenuButtons = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const MobileSection = styled.div`
  display: none;

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
  }
`;

const Icon = styled.img`
  height: 50px;
  width: 50px;
  margin: 12px 6px;
  &:hover {
      cursor: pointer;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  border-bottom: solid 1px;
`;

const CloseIcon = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin: 12px 6px;
  padding-right: 10px;
  &:hover {
      cursor: pointer;
  }
`;