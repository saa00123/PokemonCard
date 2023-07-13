import React from "react";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";

function SignUp() {
  const Gray1 = Color({ color: "Gray1" });
  const Gray2 = Color({ color: "Gray2" });

  return (
    <Div
      className="SignUpContainer"
      display="flex"
      direction="column"
      justify="start"
      items="center"
      padding="3.875rem 0 0 0"
      width="100vw"
    >
      <Logo />
      <Div className="SignContainer" display="flex" direction="column" width="40.625rem" height="46.064rem">
        <Div
          className="SignHeader"
          width="7.625rem"
          height="2.313rem"
          margin="0 0 0.688rem 0"
          color={Gray2}
          fontSize="2rem"
          fontWeight="bold"
        >
          회원가입
        </Div>
        <Div
          className="SignMainContainer"
          display="flex"
          direction="column"
          justify="center"
          items="center"
          width="40.625rem"
          height="43.063rem"
          shadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
        >
          <Div className="NameContainer" display="flex" margin="0 0 0.688rem 0">
            <Div
              className="Name"
              display="flex"
              items="center"
              width="11.001rem"
              height="3.75rem"
              text="left"
              fontSize="1.625rem"
            >
              이름
            </Div>
            <Input
              placeholder="이름을 입력하세요."
              padding="0 0 0 1.313rem"
              width="21.875rem"
              height="3.75rem"
              fontSize="1.625rem"
              borderRadius="15px"
            />
          </Div>
          <Div className="NicknameContainer" display="flex" margin="0 0 0.5rem 0">
            <Div
              className="Nickname"
              display="flex"
              items="center"
              width="11.001rem"
              height="5.25rem"
              text="left"
              fontSize="1.625rem"
            >
              닉네임
            </Div>
            <Div display="flex" direction="column" items="center" width="21.875rem" height="5.25rem">
              <Input
                placeholder="닉네임을 입력하세요."
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontSize="1.625rem"
                borderRadius="15px"
              />
              <Div
                className="NicknameWarning"
                display="flex"
                items="center"
                width="21.438rem"
                height="1.5rem"
                color={Gray1}
                fontSize="0.75rem"
              >
                사용 불가능한 닉네임입니다.
              </Div>
            </Div>
          </Div>
          <Div className="IdContainer" display="flex" margin="0 0 0.5rem 0">
            <Div
              className="Id"
              display="flex"
              items="center"
              width="11.001rem"
              height="5.25rem"
              text="left"
              fontSize="1.625rem"
            >
              아이디
            </Div>
            <Div display="flex" direction="column" items="center" width="21.875rem" height="5.25rem">
              <Input
                placeholder="아이디를 입력하세요."
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontSize="1.625rem"
                borderRadius="15px"
              />
              <Div
                className="NicknameWarning"
                display="flex"
                items="center"
                width="21.438rem"
                height="1.5rem"
                color={Gray1}
                fontSize="0.75rem"
              >
                사용 불가능한 아이디입니다.
              </Div>
            </Div>
          </Div>
          <Div className="PasswordContainer" display="flex" margin="0 0 0.5rem 0">
            <Div
              className="Password"
              display="flex"
              items="center"
              width="11.001rem"
              height="5.25rem"
              text="left"
              fontSize="1.625rem"
            >
              비밀번호
            </Div>
            <Div display="flex" direction="column" items="center" width="21.875rem" height="5.25rem">
              <Input
                type="password"
                placeholder="비밀번호를 입력하세요."
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontSize="1.625rem"
                borderRadius="15px"
              />
              <Div
                className="NicknameWarning"
                display="flex"
                items="center"
                width="21.438rem"
                height="1.5rem"
                color={Gray1}
                fontSize="0.75rem"
              >
                사용 불가능한 비밀번호입니다.
              </Div>
            </Div>
          </Div>
          <Div className="PasswordCheckContainer" display="flex" margin="0 0 0.5rem 0">
            <Div
              className="PasswordCheck"
              display="flex"
              items="center"
              width="11.001rem"
              height="5.25rem"
              text="left"
              fontSize="1.625rem"
            >
              비밀번호 확인
            </Div>
            <Div display="flex" direction="column" items="center" width="21.875rem" height="5.25rem">
              <Input
                type="password"
                placeholder="비밀번호를 다시 입력하세요."
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontSize="1.625rem"
                borderRadius="15px"
              />
              <Div
                className="NicknameWarning"
                display="flex"
                items="center"
                width="21.438rem"
                height="1.5rem"
                color={Gray1}
                fontSize="0.75rem"
              >
                비밀번호가 다릅니다.
              </Div>
            </Div>
          </Div>
          <Div className="EmailContainer" display="flex" margin="0 0 1.5rem 0">
            <Div
              className="Email"
              display="flex"
              items="center"
              width="11.001rem"
              height="3.75rem"
              text="left"
              fontSize="1.625rem"
            >
              이메일
            </Div>
            <Input
              placeholder="이메일을 입력하세요."
              padding="0 0 0 1.313rem"
              width="21.875rem"
              height="3.75rem"
              fontSize="1.625rem"
              borderRadius="15px"
            />
          </Div>
          <Button
            className="SighUpBtn"
            width="12.5rem"
            height="4.375rem"
            borderRadius="1rem"
            border="none"
            fontSize="1.5rem"
            fontWeight="bold"
          >
            회원 가입
          </Button>
        </Div>
      </Div>
    </Div>
  );
}

export default SignUp;
