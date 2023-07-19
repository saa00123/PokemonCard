import React from "react";
import styled from "styled-components";
import LogoImage from "../../images/Logo.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 12.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 8rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    height: 5.472rem;
  }
`;

const Logo = () => (
  <LogoContainer>
    <Image src={LogoImage} alt="LogoImage" />
  </LogoContainer>
);

export default Logo;
