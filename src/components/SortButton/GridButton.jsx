import React from "react";
import styled from "styled-components";
import Color from "../BaseComponents/Color";
import Button from "../BaseComponents/Button";
import GridImage from "../../images/Grid.png";

const Default = Color({ color: "Default" });
const Gray1 = Color({ color: "Gray1" });

const CenteredButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  background-color: ${Default};
  opacity: 0.5;
`;

const GridButton = () => (
  <CenteredButton
    className="GridButton"
    width="2.5rem"
    height="2.5rem"
    backgroundcolor={Default}
    borderradius="none"
    border={`solid 1px ${Gray1}`}
  >
    <Image src={GridImage} alt="GridImage" />
  </CenteredButton>
);

export default GridButton;
