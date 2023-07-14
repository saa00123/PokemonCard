import React from "react";
import styled from "styled-components";
import Color from "../BaseComponents/Color";
import Button from "../BaseComponents/Button";

const Default = Color({ color: "Default" });
const Gray1 = Color({ color: "Gray1" });

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.125rem;
`;

const Rectangle = styled.div`
  width: 0.938rem;
  height: 0.938rem;
  background-color: ${Gray1};
`;

const GridButton = () => (
  <Button
    className="GridButton"
    width="3rem"
    height="3rem"
    backgroundColor={Default}
    borderRadius="none"
    border={`solid 1px ${Gray1}`}
  >
    <Grid>
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </Grid>
  </Button>
);

export default GridButton;
