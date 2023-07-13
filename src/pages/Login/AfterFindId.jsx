import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";

function AfterFindId() {
  const navigate = useNavigate();

  const Gray2 = Color({ color: "Gray2" });

  return (
    <Div
      className="AfterFindContainer"
      display="flex"
      direction="column"
      justify="start"
      items="center"
      padding="12.625rem 0 1.125rem 0"
      width="100vw"
    >
      <Logo />
      <Div
        className="AfterFindMainContainer"
        display="flex"
        direction="column"
        justify="center"
        items="center"
        width="56.25rem"
        height="29.438rem"
        shadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
      >
        <Div
          className="IdCheckBox"
          display="flex"
          justify="center"
          items="center"
          width="56.25rem"
          height="5.625rem"
          margin="0 0 1.125rem 0"
          color={Gray2}
          fontSize="3rem"
          fontWeight="bold"
        >
          회원님의 아이디는
        </Div>
        <Div
          className="IdCheckBox"
          display="flex"
          justify="center"
          items="center"
          width="56.25rem"
          height="5.625rem"
          margin="0 0 1.125rem 0"
          color={Gray2}
          fontSize="3rem"
          fontWeight="bold"
        >
          <Div className="IdCheck">apple134</Div>
          입니다.
        </Div>
        <Div className="BtnContainer" display="flex" justify="space-between" items="center" width="26.938rem">
          <Button
            className="LoginBtn"
            width="12.5rem"
            height="4.375rem"
            fontSize="1.5rem"
            fontWeight="bold"
            borderRadius="1rem"
            border="none"
            onClick={() => navigate("/Login")}
          >
            로그인하러 가기
          </Button>
          <Button
            className="FindPasswordBtn"
            width="12.5rem"
            height="4.375rem"
            fontSize="1.5rem"
            fontWeight="bold"
            borderRadius="1rem"
            border="none"
            onClick={() => navigate("/FindIdPassword")}
          >
            비밀번호 찾기
          </Button>
        </Div>
      </Div>
    </Div>
  );
}

export default AfterFindId;
