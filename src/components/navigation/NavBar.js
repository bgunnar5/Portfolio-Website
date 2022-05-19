import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import HomeImg from "../../imgs/home.svg";
import HomeActiveImg from "../../imgs/blue-home.svg";
import AboutImg from "../../imgs/about.svg";
import AboutActiveImg from "../../imgs/blue-about.svg";
import ExperienceImg from "../../imgs/experience.svg";
import ExperienceActiveImg from "../../imgs/blue-experience.svg";
import EducationImg from "../../imgs/education.svg";
import EducationActiveImg from "../../imgs/blue-education.svg";
import ContactImg from "../../imgs/contact.svg";
import ContactActiveImg from "../../imgs/blue-contact.svg";
import SignatureImg from "../../imgs/website-signature.svg";

const NavBar = () => {
  // const location = useLocation();
  // const active = location.hash;
  return (
      <Nav>
        <Wrapper>
          <Signature src={SignatureImg} />
          <MenuButtons>
            <MenuItem
              to="#home"
              label="Home"
              // active={active === "#home"}
              img={HomeImg}
              // activeImg={HomeActiveImg}
            />
            <MenuItem
              to="#about"
              label="About"
              // active={active === "#about"}
              test={true}
              img={AboutImg}
              // activeImg={AboutActiveImg}
            />
            <MenuItem
              to="#experience"
              label="Experience"
              // active={active === "#experience"}
              img={ExperienceImg}
              // activeImg={ExperienceActiveImg}
            />
            <MenuItem
              to="#education"
              label="Education"
              // active={active === "#education"}
              img={EducationImg}
              // activeImg={EducationActiveImg}
            />
            <MenuItem
              to="#contact"
              label="Contact"
              // active={active === "#contact"}
              img={ContactImg}
              // activeImg={ContactActiveImg}
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
  margin: 0;
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
