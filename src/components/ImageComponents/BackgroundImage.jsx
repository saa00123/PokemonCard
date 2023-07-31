import React from "react";
import styled from "styled-components";
import background from "../../images/BackgroundImage.png";

const BgImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  z-index: -10;
`;
const BackgroundImage = () => <BgImage />;

export default BackgroundImage;
