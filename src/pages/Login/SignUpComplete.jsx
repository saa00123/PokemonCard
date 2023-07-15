import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../../components/BaseComponents/Color";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";

function SignUpComplete() {
  const navigate = useNavigate();

  const Gray2 = Color({ color: "Gray2" });

  return (
    <Div
      className="SignUpCompleteContainer"
      display="flex"
      flexdirection="column"
      justifycontent="start"
      alignitems="center"
      padding="7.625rem 0 0 0"
      width="100vw"
    >
      <Div
        className="SignUpGif"
        display="flex"
        justifycontent="center"
        alignitems="center"
        width="27.313rem"
        height="20.125rem"
        margin="0 0 2.938rem 0"
        border="solid 1px black"
      >
        gif 추가
      </Div>
      <Div
        className="CompeleteMessage"
        display="flex"
        justifycontent="center"
        alignitems="center"
        width="59.813rem"
        height="7.188rem"
        color={Gray2}
        fontSize="3rem"
        fontWeight="bold"
      >
        회원가입이 완료되었습니다.
      </Div>
      <Button
        className="LoginBtn"
        width="12.5rem"
        height="4.375rem"
        fontSize="1.5rem"
        fontWeight="bold"
        borderradius="1rem"
        border="none"
        onClick={() => navigate("/Login")}
      >
        로그인하러 가기
      </Button>
    </Div>
  );
}

export default SignUpComplete;
