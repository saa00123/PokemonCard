import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";

function AfterFindId() {
  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Gray2 = Color({ color: "Gray2" });

  return (
    <Div
      className="AfterFindContainer"
      display="flex"
      flexdirection="column"
      justifycontent="start"
      alignitems="center"
      padding="12.625rem 0 1.125rem 0"
      width="100vw"
      notebookpadding="5.938rem 0 0 0"
    >
      <Logo />
      <Div
        className="AfterFindMainContainer"
        display="flex"
        flexdirection="column"
        justifycontent="center"
        alignitems="center"
        width="56.25rem"
        height="29.438rem"
        boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
        backgroundcolor={Default}
        notebookwidth="37.5rem"
        notebookheight="22.688rem"
        notebookmargin="2.25rem 0 0 0"
      >
        <Div
          className="IdCheckBox"
          display="flex"
          justifycontent="center"
          alignitems="center"
          width="56.25rem"
          height="5.625rem"
          margin="0 0 1.125rem 0"
          color={Gray2}
          fontSize="3rem"
          fontWeight="bold"
          notebookwidth="37.5rem"
          notebookheight="4.313rem"
          notebookfontSize="2.25rem"
          notebookmargin="0"
        >
          회원님의 아이디는
        </Div>
        <Div
          className="IdCheckBox"
          display="flex"
          justifycontent="center"
          alignitems="center"
          width="56.25rem"
          height="5.625rem"
          margin="0 0 1.125rem 0"
          color={Gray2}
          fontSize="3rem"
          fontWeight="bold"
          notebookwidth="37.5rem"
          notebookheight="4.313rem"
          notebookfontSize="2.25rem"
          notebookmargin="0 0 3rem 0"
        >
          <Div className="IdCheck">apple134</Div>
          입니다.
        </Div>
        <Div
          className="BtnContainer"
          display="flex"
          justifycontent="space-between"
          alignitems="center"
          width="26.938rem"
          notebookwidth="17.939rem"
        >
          <Button
            className="LoginBtn"
            width="12.5rem"
            height="4.375rem"
            fontSize="1.5rem"
            fontWeight="bold"
            borderradius="1rem"
            border="none"
            onClick={() => navigate("/Login")}
            notebookwidth="8.313rem"
            notebookheight="3.375rem"
            notebookfontSize="1rem"
          >
            로그인하러 가기
          </Button>
          <Button
            className="FindPasswordBtn"
            width="12.5rem"
            height="4.375rem"
            fontSize="1.5rem"
            fontWeight="bold"
            borderradius="1rem"
            border="none"
            onClick={() => navigate("/FindIdPassword")}
            notebookwidth="8.313rem"
            notebookheight="3.375rem"
            notebookfontSize="1rem"
          >
            비밀번호 찾기
          </Button>
        </Div>
      </Div>
    </Div>
  );
}

export default AfterFindId;
