import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";

function EmailAuth() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const Default = Color({ color: "Default" });
  const Gray2 = Color({ color: "Gray2" });

  return (
    <Div
      className="EmailAuthContainer"
      display="flex"
      flexdirection="column"
      justifycontent="start"
      alignitems="center"
      padding="12.625rem 0 1.125rem 0"
      width="100vw"
      notebookpadding="7.938rem 0 2.84rem 0"
    >
      <Logo />
      <Div
        className="EmailAuthMainContainer"
        display="flex"
        flexdirection="column"
        justifycontent="center"
        alignitems="center"
        width="56.25rem"
        height="29.438rem"
        boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
        backgroundcolor={Default}
        notebookwidth="42.75rem"
        notebookheight="20.313rem"
        notebookmargin="2.84rem 0 0 0"
      >
        <Div
          className="EmailCheckBox"
          display="flex"
          justifycontent="center"
          alignitems="center"
          width="56.25rem"
          height="5.625rem"
          margin="0 0 1.125rem 0"
          color={Gray2}
          fontsize="2rem"
          fontWeight="bold"
          notebookwidth="43.75rem"
          notebookheight="4.375rem"
          notebookmargin="0"
          notebookfontsize="2.25rem"
        >
          <Div className="EmailCheck" fontsize="2.4rem">
            {state}
          </Div>
          으로 보낸
        </Div>
        <Div
          className="EmailCheckBox"
          display="flex"
          justifycontent="center"
          alignitems="center"
          width="56.25rem"
          height="5.625rem"
          margin="0 0 1.125rem 0"
          color={Gray2}
          fontsize="2rem"
          fontWeight="bold"
          notebookwidth="43.75rem"
          notebookheight="4.375rem"
          notebookmargin="0 0 2rem 0"
          notebookfontsize="2.25rem"
        >
          이메일 인증링크를 확인하세요.
        </Div>
        <Button
          className="HomeBtn"
          width="12.5rem"
          height="4.375rem"
          fontsize="1.5rem"
          fontWeight="bold"
          borderradius="1rem"
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
