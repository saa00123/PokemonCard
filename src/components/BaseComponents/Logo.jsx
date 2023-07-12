import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.375rem;
  height: 6.25rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const Logo = () => <LogoContainer>PGA</LogoContainer>;

export default Logo;
