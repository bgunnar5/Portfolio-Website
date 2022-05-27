import React from "react";
import styled from "styled-components";
import ContactCard from "./ContactCard";
import GitHubLogo from "../../imgs/github-logo.svg";
import GmailLogo from "../../imgs/gmail-logo.svg";
import InstagramLogo from "../../imgs/instagram-logo.svg";
import LinkedInLogo from "../../imgs/linkedin-logo.svg";

const Contact = () => (
  <ContactSection className="section" id="contact">
    <h1 className="title">Contact</h1>
    <p className="text">Thanks for viewing my website! Feel free to reach out to me by email if you have any questions or comments for me.</p>
    <CardSection>
      <ContactCard img={GmailLogo} alt="Gmail Logo" contactType="Email" link="mailto:brianfunnarson14@gmail.com" />
      <ContactCard img={LinkedInLogo} alt="LinkedIn Logo" contactType="LinkedIn" link="https://www.linkedin.com/in/brian-gunnarson-7736701a2/"/>
      <ContactCard img={GitHubLogo} alt="GitHub Logo" contactType="GitHub" link="https://github.com/bgunnar5"/>
      <ContactCard img={InstagramLogo} alt="Instagram Logo" contactType="Instagram" link="https://www.instagram.com/mr_funnarson"/>
    </CardSection>
    <CopyrightSection>
      <CopyrightNotice>Copyright© Brian Gunnarson</CopyrightNotice>
      <AuthorsNote>Designed &amp; Created by Brian Gunnarson - <a href="https://github.com/bgunnar5/Portfolio-Website" target="_blank">View on GitHub</a></AuthorsNote>
    </CopyrightSection>
  </ContactSection>
);

export default Contact;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardSection = styled.div`
  display: flex;
  align-items: center;
`;

const CopyrightSection = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CopyrightNotice = styled.p`
  margin-bottom: 2px;
`;

const AuthorsNote = styled.p`
  margin-top: 2px;
`;