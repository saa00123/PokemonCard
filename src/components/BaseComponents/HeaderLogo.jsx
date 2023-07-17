import React from "react";
import styled from "styled-components";
import LogoImage from "../../images/Logo.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.375rem;
`;

const Image = styled.img`
  width: 100%;
  height: 4.375rem;
`;

const HeaderLogo = () => (
  <LogoContainer>
    <Image src={LogoImage} alt="LogoImage" />
  </LogoContainer>
);

export default HeaderLogo;
