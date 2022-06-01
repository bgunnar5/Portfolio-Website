import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const MenuItem = ({ img, label, to, color, blank }) => {
  return (
    <Item data-testid={"menu-item-" + label}>
      {blank ? (
        <HashLink
          to={to}
          target="_blank"
          smooth
          style={{ textDecoration: "none" }}
        >
          <Icon src={img} />
          <Label color={color}>{label}</Label>
        </HashLink>
      ) : (
        <HashLink to={to} smooth style={{ textDecoration: "none" }}>
          <Icon src={img} />
          <Label color={color}>{label}</Label>
        </HashLink>
      )}
    </Item>
  );
};

export default MenuItem;

const Item = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  text-align: center;
  margin: 12px 6px;
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
  color: ${(props) => (props.color ? "#7bafd4" : "#ffffff")};
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
  text-decoration: none;
`;
