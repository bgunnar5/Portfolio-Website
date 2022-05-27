import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const MenuItem = ({ img, label, to, }) => {
  return (
    <Item data-testid={"menu-item-" + label}>
      <HashLink to={to} smooth style={{ textDecoration: "none" }}>
        <Icon src={img} />
        <Label>{label}</Label>
      </HashLink>
    </Item>
  );
};

export default MenuItem;

const Item = styled.li`
  list-style-type: none;
  margin: 12px 6px;
  text-align: center;
  padding: 3px;
  :hover {
    opacity: 70%;
  }
`;

const Icon = styled.img`
  height: 40px;
  width: 40px;
`;

const Label = styled.p`
  color: ${(props) => (props.active ? "#7bafd4" : "#ffffff")};
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
  text-decoration: none;
`;
