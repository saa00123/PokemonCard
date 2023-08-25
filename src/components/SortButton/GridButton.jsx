import React from "react";
import styled from "styled-components";
import Color from "../BaseComponents/Color";
import Button from "../BaseComponents/Button";
import GridImage from "../../images/Grid.png";

const Default = Color({ color: "Default" });
const Gray1 = Color({ color: "Gray1" });
const Red = Color({ color: "Red" });
const White = Color({ color: "White" });

const CenteredButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Default};
  border: solid 3px ${(props) => (props.isActive ? Red : Gray1)};
  &:hover {
    border: solid 3px ${Red};
  }
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  background-color: ${Default};
  opacity: 0.5;
`;

const GridButton = ({ onClick, isActive }) => (
  <CenteredButton className="GridButton" onClick={onClick} isActive={isActive}>
    <Image src={GridImage} alt="GridImage" />
  </CenteredButton>
);

export default GridButton;
