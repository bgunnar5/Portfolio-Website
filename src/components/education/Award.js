import React from "react";
import styled, { css } from "styled-components";
import Medal from "../../imgs/medal.svg";

const Award = ({award, description, reverse}) => {
    return (
        <AwardWrapper reverse={reverse}>
            <MedalIcon src={Medal} alt="Symbol of a medal" reverse={reverse} />
            <Rectangle reverse={reverse}>
                <TextWrapper>
                    <AwardTitle>{award}</AwardTitle>
                    <p className="text">{description}</p>
                </TextWrapper>
            </Rectangle>
        </AwardWrapper>
    )
}

export default Award;

const AwardWrapper = styled.div`
    display: flex;
    ${(props) => props.reverse && css`
        flex-direction: row-reverse;
    `}

    margin-bottom: 100px;
`;

const MedalIcon = styled.img`
    ${(props) => !props.reverse && css`
        margin-right: -150px;
    `}

    ${(props) => props.reverse && css`
        margin-left: -150px;
    `}
    
    margin-top: -50px;
    z-index: 1;

    @media (max-width: 740px) {
        width: 250px;
        height: 250px;
    }
`;

const Rectangle = styled.div`
    background-color: #212121;
    box-shadow: 0px 0px 15px #8e8e8e;

    display: flex;
    justify-content: ${(props) => props.reverse ? "flex-start" : "flex-end"};

    max-width: 800px;
    padding-left: ${(props) => props.reverse ? "30px" : "150px"};
    padding-right: ${(props) => props.reverse ? "150px" : "30px"};
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const AwardTitle = styled.h2`
    color: #7bafd4;
    font-size: 40px;
    margin-bottom: 0px;

    @media (min-width: 741px) and (max-width: 1800px) {
        font-size: 35px;
    }

    @media (max-width: 740px) {
        font-size: 23px;
    }
`; 