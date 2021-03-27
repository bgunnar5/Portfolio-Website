import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItem = ({ img, label, to, active, activeImg }) => {
  return (
    <Item active={active} data-testid={"menu-item-" + label}>
      <Link to={to} style={{ textDecoration: "none" }}>
        <Icon src={active ? activeImg : img} />
        <Label active={active}>{label}</Label>
      </Link>
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
