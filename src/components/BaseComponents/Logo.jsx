import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../images/Logo.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 9em;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 5.5rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    height: 4.3rem;
  }
`;

const Logo = () => {
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

export default Logo;
