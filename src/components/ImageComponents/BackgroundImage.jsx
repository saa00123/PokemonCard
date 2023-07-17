import React from "react";
import styled from "styled-components";
import background from "../../images/BackgroundImage.png";

const backgroundImage = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
`;

const BackgroundImage = () => <backgroundImage />;

export default BackgroundImage;
