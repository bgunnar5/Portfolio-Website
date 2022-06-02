import React from "react";
import styled from "styled-components";

const ContactCard = ({img, alt, contactType, link}) => {
    return (
        <CardWrapper href={link} target="_blank">
            <Logo src={img} alt={alt} />
            <Description>{contactType}</Description>
        </CardWrapper>
    );
}

export default ContactCard;

const CardWrapper = styled.a`
    background-color: #212121;
    box-shadow: 0px 0px 15px #7bafd4;
    border-radius: 5px;

    margin: 20px;
    padding: 20px 40px;
    width: 300px;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
          transition: 150ms cubic-bezier(.19,1,.22,1);
          transform: translateY(-3px);
          background-color: #292929;
          box-shadow: 0px 0px 15px white;
    }

    @media (min-width: 741px) and (max-width: 1800px) {
        width: 250px;
        height: 250px;
    }

    @media (max-width: 740px) {
        width: 150px;
        height: 150px;
    }
`;

const Logo = styled.img`
    height: 80px;
    width: 80px;

    @media (min-width: 741px) and (max-width: 1800px) {
        width: 70px;
        height: 70px;
    }

    @media (max-width: 740px) {
        height: 60px;
        width: 60px;
    }
`;

const Description = styled.p`
    color: white;
    font-size: 20px;

    @media (max-width: 740px) {
        font-size: 15px;
    }
`;