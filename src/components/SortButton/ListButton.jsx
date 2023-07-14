import React from "react";
import styled from "styled-components";
import Color from "../BaseComponents/Color";
import Button from "../BaseComponents/Button";
import ListImage from "../../images/List.png";

const Default = Color({ color: "Default" });
const Gray1 = Color({ color: "Gray1" });

const CenteredButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${Default};
  opacity: 0.5;
`;

const ListButton = () => (
  <CenteredButton
    className="ListButton"
    width="2.5rem"
    height="2.5rem"
    backgroundColor={Default}
    borderRadius="none"
    border={`solid 1px ${Gray1}`}
  >
    <Image src={ListImage} alt="ListImage" />
  </CenteredButton>
);

export default ListButton;
