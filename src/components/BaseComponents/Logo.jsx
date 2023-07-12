import React from "react";
import styled from "styled-components";
import LogoImage from "../../images/Logo.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.375rem;
  height: 6.25rem;
`;

const Image = styled.img`
  width: 100%;
  height: 4.375rem;
`;

const Logo = () => (
  <LogoContainer>
    <Image src={LogoImage} alt="LogoImage" />
  </LogoContainer>
);

export default Logo;
