import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";

function EmailAuth() {
  const navigate = useNavigate();

  const Gray2 = Color({ color: "Gray2" });

  return (
    <Div
      className="EmailAuthContainer"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      padding="12.625rem 0 1.125rem 0"
      width="100vw"
    >
      <Logo />
      <Div
        className="EmailAuthMainContainer"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="56.25rem"
        height="29.438rem"
        boxShadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
      >
        <Div
          className="EmailCheckBox"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="56.25rem"
          height="5.625rem"
          margin="0 0 1.125rem 0"
          color={Gray2}
          fontSize="3rem"
          fontWeight="bold"
        >
          <Div className="EmailCheck">aaa@naver.com</Div>
          으로 보낸
        </Div>
        <Div
          className="EmailCheckBox"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="56.25rem"
          height="5.625rem"
          margin="0 0 1.125rem 0"
          color={Gray2}
          fontSize="3rem"
          fontWeight="bold"
        >
          이메일 인증링크를 확인하세요.
        </Div>
        <Button
          className="HomeBtn"
          width="12.5rem"
          height="4.375rem"
          fontSize="1.5rem"
          fontWeight="bold"
          borderRadius="1rem"
          border="none"
          onClick={() => navigate("/")}
        >
          홈으로 이동
        </Button>
      </Div>
    </Div>
  );
}

export default EmailAuth;
