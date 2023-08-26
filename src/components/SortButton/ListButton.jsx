import React from "react";
import styled from "styled-components";
import Color from "../BaseComponents/Color";
import ListImage from "../../images/List.png";

const Default = Color({ color: "Default" });
const Gray1 = Color({ color: "Gray1" });
const Red = Color({ color: "Red" });

const ButtonConatiner = styled.div`
  width: fit-content;
  height: fit-content;
  margin: ${(props) => props.margin};
`;

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
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${Default};
  opacity: 0.5;
`;

const ListButton = ({ margin, onClick, isActive }) => (
  <ButtonConatiner margin={margin}>
    <CenteredButton className="ListButton" onClick={onClick} isActive={isActive}>
      <Image src={ListImage} alt="ListImage" />
    </CenteredButton>
  </ButtonConatiner>
);

export default ListButton;
