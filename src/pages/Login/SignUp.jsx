import React, { useState } from "react";
import app from "../../Firebase/firebase";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";

const Gray1 = Color({ color: "Gray1" });
const Gray2 = Color({ color: "Gray2" });
const White = Color({ color: "Default" });

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onClickSignUp = () => {
    console.log(email, password, name, nickname);
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // 로그인 성공
        const { user } = userCredential;
        console.log("Logged in user:", user);
      })
      .catch((error) => {
        // 로그인 실패
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorMessage);
      });
  };
  return (
    <Div
      className="SignUpContainer"
      display="flex"
      flexdirection="column"
      justifycontent="start"
      alignitems="center"
      padding="3.875rem 0 0 0"
      margin="0 0 3rem 0"
      width="100vw"
    >
      <Logo />
      <Div
        className="SignContainer"
        display="flex"
        flexdirection="column"
        width="fit-content"
        height="fit-content"
        notebookwidth="fit-content"
        notebookheight="fit-content"
      >
        <Div
          className="SignHeader"
          width="7.625rem"
          height="2.313rem"
          color={Gray2}
          fontsize="1.7rem"
          fontWeight="bold"
          notebookheight="40px"
          notebookfontsize="1.25rem"
        >
          회원가입
        </Div>
        <Div
          className="SignMainContainer"
          width="32rem"
          height="fit-content"
          backgroundcolor={White}
          boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
          boxsizing="border-box"
          notebookwidth="45rem"
          notebookheight="fit-content"
        >
          <Div className="WrapContainer" width="fit-content" height="fit-content" margin="2.5rem auto 0 auto">
            <Div
              className="TopContainer"
              width="fit-content"
              height="fit-content"
              notebookdisplay="flex"
              margin="0 auto"
              notebookmargin="0 0 0 0"
            >
              <Div className="NameContainer" margin="0 0 1.75rem 0">
                <Div
                  className="Name"
                  display="flex"
                  alignitems="center"
                  width="fit-content"
                  height="50px"
                  textalign="left"
                  fontsize="1.25rem"
                  color={Gray2}
                  fontWeight="bold"
                  notebookwidth="6.25rem"
                  notebookheight="35px"
                  notebookfontsize="1rem"
                >
                  이름
                </Div>
                <Input
                  placeholder="이름을 입력하세요."
                  padding="0 0 0 1.313rem"
                  width="350px"
                  height="55px"
                  fontsize="1rem"
                  borderradius="15px"
                  notebookwidth="15.625rem"
                  notebookheight="3.125rem"
                  notebookfontsize="1rem"
                  onChange={(e) => setName(e.target.value)}
                />
              </Div>
              <Div className="NicknameContainer" margin="0 0 0.5rem 0" notebookmargin="0 0 0 2rem">
                <Div
                  className="Nickname"
                  display="flex"
                  alignitems="center"
                  width="fit-content"
                  height="50px"
                  textalign="left"
                  fontsize="1.25rem"
                  color={Gray2}
                  fontWeight="bold"
                  notebookwidth="6.25rem"
                  notebookheight="35px"
                  notebookfontsize="1rem"
                >
                  닉네임
                </Div>
                <Div
                  display="flex"
                  flexdirection="column"
                  alignitems="center"
                  width="21.875rem"
                  height="5.25rem"
                  notebookwidth="fit-content"
                  notebookheight="fit-content"
                >
                  <Input
                    placeholder="닉네임을 입력하세요."
                    padding="0 0 0 1.313rem"
                    width="21.875rem"
                    height="3.75rem"
                    fontsize="1rem"
                    borderradius="15px"
                    notebookwidth="15.625rem"
                    notebookheight="3.125rem"
                    notebookfontsize="1rem"
                    notebookepadding="0 0 0 0.8rem"
                    onChange={(e) => setNickname(e.target.value)}
                  />
                  <Div
                    className="NicknameWarning"
                    display="flex"
                    alignitems="center"
                    width="21.438rem"
                    height="1.5rem"
                    color={Gray1}
                    fontsize="0.75rem"
                    padding="0 0 0 1.313rem"
                    boxsizing="border-box"
                    notebookwidth="15.625rem"
                    notebookheight="1.25rem"
                    notebookfontsize="0.625rem"
                    notebookepadding="0 0 0 0.8rem"
                  >
                    사용 불가능한 닉네임입니다.
                  </Div>
                </Div>
              </Div>
            </Div>
            <Div className="EmailContainer" margin="0 0 0.5rem 0" width="fit-content" height="fit-content">
              <Div
                className="Email"
                display="flex"
                alignitems="center"
                width="fit-content"
                height="50px"
                textalign="left"
                fontsize="1.25rem"
                color={Gray2}
                fontWeight="bold"
                notebookwidth="6.25rem"
                notebookheight="35px"
                notebookfontsize="1rem"
              >
                이메일
              </Div>
              <Input
                placeholder="이메일을 입력하세요."
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontsize="1rem"
                borderradius="15px"
                notebookwidth="15.625rem"
                notebookheight="3.125rem"
                notebookfontsize="1rem"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Div
                className="EmailWarning"
                display="flex"
                alignitems="center"
                width="21.438rem"
                height="1.5rem"
                color={Gray1}
                fontsize="0.75rem"
                padding="0 0 0 1.313rem"
                boxsizing="border-box"
                notebookwidth="15.625rem"
                notebookheight="1.25rem"
                notebookfontsize="0.625rem"
                notebookepadding="0 0 0 0.8rem"
              >
                사용 불가능한 이메일입니다.
              </Div>
            </Div>

            <Div className="BottomContainer" width="fit-content" height="fit-content" notebookdisplay="flex">
              <Div className="PasswordContainer" margin="0 0 0.5rem 0">
                <Div
                  className="Password"
                  display="flex"
                  alignitems="center"
                  width="fit-content"
                  height="50px"
                  textalign="left"
                  fontsize="1.25rem"
                  color={Gray2}
                  fontWeight="bold"
                  notebookwidth="6.25rem"
                  notebookheight="35px"
                  notebookfontsize="1rem"
                >
                  비밀번호
                </Div>
                <Div
                  display="flex"
                  flexdirection="column"
                  alignitems="center"
                  width="21.875rem"
                  height="5.25rem"
                  notebookwidth="fit-content"
                  notebookheight="fit-content"
                >
                  <Input
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    padding="0 0 0 1.313rem"
                    width="21.875rem"
                    height="3.75rem"
                    fontsize="1rem"
                    borderradius="15px"
                    notebookwidth="15.625rem"
                    notebookheight="3.125rem"
                    notebookfontsize="1rem"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Div
                    className="NicknameWarning"
                    display="flex"
                    alignitems="center"
                    width="21.438rem"
                    height="1.5rem"
                    color={Gray1}
                    fontsize="0.75rem"
                    padding="0 0 0 1.313rem"
                    boxsizing="border-box"
                    notebookwidth="15.625rem"
                    notebookheight="1.25rem"
                    notebookfontsize="0.625rem"
                    notebookepadding="0 0 0 0.8rem"
                  >
                    숫자, 영어 조합 8자 이상으로 만들어주세요.
                  </Div>
                </Div>
              </Div>
              <Div className="PasswordCheckContainer" margin="0 0 0.5rem 0" notebookmargin="0 0 0 2rem">
                <Div
                  className="PasswordCheck"
                  display="flex"
                  alignitems="center"
                  width="fit-content"
                  height="50px"
                  textalign="left"
                  fontsize="1.25rem"
                  color={Gray2}
                  fontWeight="bold"
                  notebookwidth="6.25rem"
                  notebookheight="35px"
                  notebookfontsize="1rem"
                >
                  비밀번호 확인
                </Div>
                <Div
                  display="flex"
                  flexdirection="column"
                  alignitems="center"
                  width="21.875rem"
                  height="5.25rem"
                  notebookwidth="fit-content"
                  notebookheight="fit-content"
                >
                  <Input
                    type="password"
                    placeholder="비밀번호를 다시 입력하세요."
                    padding="0 0 0 1.313rem"
                    width="21.875rem"
                    height="3.75rem"
                    fontsize="1rem"
                    borderradius="15px"
                    notebookwidth="15.625rem"
                    notebookheight="3.125rem"
                    notebookfontsize="1rem"
                    onChange={(e) => setPasswordCheck(e.target.value)}
                  />
                  <Div
                    className="NicknameWarning"
                    display="flex"
                    alignitems="center"
                    width="21.438rem"
                    height="1.5rem"
                    color={Gray1}
                    fontsize="0.75rem"
                    padding="0 0 0 1.313rem"
                    boxsizing="border-box"
                    notebookwidth="15.625rem"
                    notebookheight="1.25rem"
                    notebookfontsize="0.625rem"
                    notebookepadding="0 0 0 0.8rem"
                  >
                    비밀번호가 다릅니다.
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
          <Div className="ButtonContainer" width="fit-content" height="fit-content" margin="2rem auto">
            <Button
              className="SighUpBtn"
              type="submit"
              width="350px"
              height="70px"
              borderradius="1rem"
              border="none"
              fontsize="1.5rem"
              fontWeight="bold"
              notebookwidth="7.5rem"
              notebookheight="3.125rem"
              notebookfontsize="1rem"
              notebookborderradius="10px"
              onclick={onClickSignUp}
            >
              회원 가입
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

export default SignUp;
