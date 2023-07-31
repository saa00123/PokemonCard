import React from "react";
import styled from "styled-components";
import background from "../../images/BackgroundImage.png";

const BgImage = styled.img`
  position: absolute;
  width: 100vw;
  height: fit-content;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  z-index: -10;
`;
const BackgroundImage = () => <BgImage />;

export default BackgroundImage;
