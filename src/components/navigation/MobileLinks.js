import React from "react";
import styled, { css } from "styled-components";
import { HashLink } from "react-router-hash-link";

const MobileLink = ({links, display, toggleDisplay}) => {
    return (
        <LinkWrapper display={display}>
            {links.map((link) => (
                link.target ? 
                <SingleLink to={link.to} target="_blank" rel="noreferrer" smooth onClick={() => {toggleDisplay(!display)}} style={{color: "#7bafd4"}}>{link.label}</SingleLink>
                :
                <SingleLink to={link.to} smooth onClick={() => {toggleDisplay(!display)}} style={{color: "white"}}>{link.label}</SingleLink>
            ))}
        </LinkWrapper>
    )
}

export default MobileLink;

const LinkWrapper = styled.div`
    display: ${(props) => props.display ? "flex" : "none"};
    flex-direction: column;
    font-size: 20px;

    ${(props) => props.display
        && css`
            transition: max-height 150ms ease-in-out;
        `
    }
`;

const SingleLink = styled(HashLink)`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: solid 1px #8e8e8e;

    &:hover {
        cursor: pointer;
        background-color: #8e8e8e;
    }
`;