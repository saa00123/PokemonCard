import React from "react";
import styled from "styled-components";
import Color from "./Color";
import HeaderLogo from "./HeaderLogo";
import Search from "./Search";

const HeaderContainer = styled.header`
  width: 100%;
  height: 6.25rem;
  border-bottom: solid 6px ${Color({ color: "Red" })};
  @media (min-width: 1024px) and (max-width: 1440px) {
    height: 4.813rem;
  }
`;

const HeaderSpaceDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    padding-left: 1rem;
  }
`;

const HeaderMenuContainer = styled.div`
  width: 37.5rem;
  height: 6.25rem;
  display: flex;
  margin-left: auto;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 31.252rem;
    height: 4.813rem;
    font-size: 1.125rem;
  }
`;

const HeaderMenu = styled.button`
  justify-content: center;
  align-items: center;
  width: 9.375rem;
  height: 6.25rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  background-color: ${Color({ color: "Default" })};
  border: none;

  &:hover {
    background-color: ${Color({ color: "Red" })};
    color: ${Color({ color: "Default" })};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 7.813rem;
    height: 4.813rem;
    font-size: 1.125rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <HeaderSpaceDiv>
      <HeaderLogo />
      <Search />
      <HeaderMenuContainer>
        <HeaderMenu>카드 등록</HeaderMenu>
        <HeaderMenu>마감된 경매</HeaderMenu>
        <HeaderMenu>마이 페이지</HeaderMenu>
        <HeaderMenu>로그인</HeaderMenu>
      </HeaderMenuContainer>
    </HeaderSpaceDiv>
  </HeaderContainer>
);

export default Header;
