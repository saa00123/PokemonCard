import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";

function Login() {
  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Gray2 = Color({ color: "Gray2" });

  return (
    <Div
      className="LoginContainer"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      padding="14.125rem 0 0 0"
      width="100vw"
    >
      <Logo />
      <Div
        className="LoginInputContainer"
        display="flex"
        justifyContent="center"
        margin="5.813rem 0 0 0"
        width="37.625rem"
        height="10.188rem"
      >
        <Div className="IdPasswordContainer" display="flex" flexDirection="column" margin="0 0.75rem 0 0">
          <Div className="IdContainer" display="flex" margin="0 0 0.813rem 0">
            <Div
              className="Id"
              display="flex"
              alignItems="center"
              width="8.75rem"
              height="3.75rem"
              textAlign="left"
              fontSize="1.625rem"
            >
              아이디
            </Div>
            <Input
              placeholder="Put your id"
              padding="0 0 0 1.313rem"
              width="21.875rem"
              height="3.75rem"
              fontSize="1.625rem"
              borderRadius="15px"
            />
          </Div>
          <Div className="PasswordContainer" display="flex">
            <Div
              className="Password"
              display="flex"
              alignItems="center"
              width="8.75rem"
              height="3.75rem"
              textAlign="left"
              fontSize="1.625rem"
            >
              비밀번호
            </Div>
            <Div display="flex" flexDirection="column" alignItems="center" width="21.875rem" height="5.625rem">
              <Input
                placeholder="Put your password"
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontSize="1.625rem"
                borderRadius="15px"
              />
              <Div
                className="SignAndFindContainer"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="21.438rem"
                height="1.875rem"
              >
                <Button
                  className="SignUpBtn"
                  color={Gray2}
                  backgroundColor={Default}
                  border="none"
                  fontSize="1rem"
                  hoverBackgroundColor="none"
                  hoverColor="none"
                  hoverBorder="none"
                  hoverBorderColor="none"
                  onClick={() => navigate("/SignUp")}
                >
                  회원가입
                </Button>
                <Button
                  className="SignUpBtn"
                  type="submit"
                  color={Gray2}
                  backgroundColor={Default}
                  border="none"
                  fontSize="1rem"
                  hoverBackgroundColor="none"
                  hoverColor="none"
                  hoverBorder="none"
                  hoverBorderColor="none"
                  onClick={() => navigate("/FindIdPassword")}
                >
                  아이디/비밀번호 찾기
                </Button>
              </Div>
            </Div>
          </Div>
        </Div>
        <Button
          className="LoginBtn"
          width="6.25rem"
          height="8.313rem"
          fontSize="1.25rem"
          fontWeight="bold"
          borderRadius="1rem"
          border="none"
        >
          로그인
        </Button>
      </Div>
    </Div>
  );
}

export default Login;
