import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../images/Logo.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.375rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 7.375rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 4.375rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    height: 2.25rem;
  }
`;

const HeaderLogo = () => {
  const navigate = useNavigate();

  return (
    <LogoContainer
      onClick={() => {
        navigate("/");
      }}
    >
      <Image src={LogoImage} alt="LogoImage" />
    </LogoContainer>
  );
};

export default HeaderLogo;
