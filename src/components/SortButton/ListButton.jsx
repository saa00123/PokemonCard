import React from "react";
import styled from "styled-components";
import Color from "../BaseComponents/Color";
import Button from "../BaseComponents/Button";
import ListImage from "../../images/List.png";

const Default = Color({ color: "Default" });
const Gray1 = Color({ color: "Gray1" });

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
  border: solid 1px ${Gray1};
`;

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${Default};
  opacity: 0.5;
`;

const ListButton = ({ margin }) => (
  <ButtonConatiner margin={margin}>
    <CenteredButton className="ListButton">
      <Image src={ListImage} alt="ListImage" />
    </CenteredButton>
  </ButtonConatiner>
);

export default ListButton;
