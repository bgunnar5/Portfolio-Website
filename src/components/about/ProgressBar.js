import React from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({percent, label, bluePath}) => { 
    const pathColor = bluePath ? "#7BAFD4" : "#8E8E8E";
    return (
    <Wrapper>
        <CircularProgressbar 
            value={percent} 
            text={percent + "%"} 
            styles={{
                path: {
                    stroke: pathColor
                },
                trail: {
                    stroke: "white"
                },
                text: {
                    fill: "white"
                }
            }} />
        <Label className="text">{label}</Label>
    </Wrapper>
)};

export default ProgressBar;

const Wrapper = styled.div`
    margin: auto;

    @media (min-width: 741px) and (max-width: 1800px) {
        width: 210px;
    }

    @media (max-width: 740px) {
        width: 100px;
    }
`; 

const Label = styled.p`
    color: white;
    margin-top: 10px;
`;