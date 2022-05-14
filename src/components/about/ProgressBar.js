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
        <Label>{label}</Label>
    </Wrapper>
)};

export default ProgressBar;

/*
#7BAFD4 -> hsv(205,42,83)
#8E8E8E -> hsv(0,0,56)
*/

const Wrapper = styled.div`
    margin: auto;
`;

const Label = styled.p`
    color: white;
    font-size: 30px;
    margin-top: 10px;
`;