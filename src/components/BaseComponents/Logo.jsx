import React from "react";
import styled from "styled-components";
import LogoImage from "../../images/Logo.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
`;

const Image = styled.img`
  width: 100%;
  height: 8rem;
`;

const Logo = () => (
  <LogoContainer>
    <Image src={LogoImage} alt="LogoImage" />
  </LogoContainer>
);

export default Logo;
