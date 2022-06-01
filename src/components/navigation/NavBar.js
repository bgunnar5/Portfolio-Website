import React from "react";
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

const NavBar = () => {
  return (
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
            {/* <MenuItem
              to="#education"
              label="Education"
              img={EducationImg}
            /> */}
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
  );
};

export default NavBar;

const Wrapper = styled.ul`
  /* small change */
  display: flex;
  margin: auto;
`;

const Nav = styled.nav`
  border-bottom: solid 1px;
  background-color: #212121;
  width: 100%;
  position: fixed;
  top: 0;
  /* height: 104px; */
`;

const Signature = styled.img`
  margin: 12px 6px;
  height: 80px;
  width: 120px;
`;

const MenuButtons = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 1rem;
`;
