import React from "react";
import styled from "styled-components";

const Button = ({label, clickHandler, ...props}) => {
    return (
        <Btn onClick={clickHandler} {...props}>{label}</Btn>
    )
};

export default Button;

const Btn = styled.button`
    cursor: pointer;

    border: 2px solid #7bafd4;
    border-radius: 3px;

    width: ${(props) => (props.buttonWidth ? props.buttonWidth : "100%")};
    height: ${(props) => (props.buttonHeight ? props.buttonHeight : "")};

    color: #7bafd4;
    background-color: #212121;

    font-size: 25px;

    :hover {
        background-color: #3F3F3F;
    }

    @media (max-width: 740px) {
        width: 150px;
        height: 40px;
        font-size: 18px;
    }
`;