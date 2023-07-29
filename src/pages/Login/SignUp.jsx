import React from "react";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";

function SignUp() {
  const Gray1 = Color({ color: "Gray1" });
  const Gray2 = Color({ color: "Gray2" });
  const White = Color({ color: "Default" });

  return (
    <Div
      className="SignUpContainer"
      display="flex"
      flexdirection="column"
      justifycontent="start"
      alignitems="center"
      padding="3.875rem 0 0 0"
      width="100vw"
    >
      <Logo />
      <Div
        className="SignContainer"
        display="flex"
        flexdirection="column"
        width="40.625rem"
        height="46.064rem"
        notebookwidth="fit-content"
        notebookheight="fit-content"
      >
        <Div
          className="SignHeader"
          width="7.625rem"
          height="2.313rem"
          margin="0 0 0.688rem 0"
          color={Gray2}
          fontsize="2rem"
          fontWeight="bold"
          notebookfontsize="1.75rem"
        >
          회원가입
        </Div>
        <Div
          className="SignMainContainer"
          width="40.625rem"
          height="43.063rem"
          backgroundcolor={White}
          boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
          boxsizing="border-box"
          notebookwidth="55.625rem"
          notebookheight="25rem"
        >
          <Div
            className="WrapContainer"
            width="fit-content"
            height="fit-content"
            notebookdisplay="flex"
            margin="2.5rem auto 0 auto"
          >
            <Div
              className="LeftContainer"
              width="fit-content"
              height="fit-content"
              margin="0 auto"
              notebookmargin="0 1.375rem 0 0"
            >
              <Div className="NameContainer" display="flex" margin="0 0 1.75rem 0">
                <Div
                  className="Name"
                  display="flex"
                  alignitems="center"
                  width="11.001rem"
                  height="3.75rem"
                  textalign="left"
                  fontsize="1.625rem"
                  notebookwidth="6.25rem"
                  notebookheight="3.125rem"
                  notebookfontsize="1.25rem"
                >
                  이름
                </Div>
                <Input
                  placeholder="이름을 입력하세요."
                  padding="0 0 0 1.313rem"
                  width="21.875rem"
                  height="3.75rem"
                  fontsize="1.625rem"
                  borderradius="15px"
                  notebookwidth="15.625rem"
                  notebookheight="3.125rem"
                  notebookfontsize="1rem"
                />
              </Div>
              <Div className="NicknameContainer" display="flex" margin="0 0 0.5rem 0">
                <Div
                  className="Nickname"
                  display="flex"
                  alignitems="center"
                  width="11.001rem"
                  height="3.75rem"
                  textalign="left"
                  fontsize="1.625rem"
                  notebookwidth="6.25rem"
                  notebookheight="3.125rem"
                  notebookfontsize="1.25rem"
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
                    fontsize="1.625rem"
                    borderradius="15px"
                    notebookwidth="15.625rem"
                    notebookheight="3.125rem"
                    notebookfontsize="1rem"
                    notebookepadding="0 0 0 0.8rem"
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
              <Div className="EmailContainer" display="flex" margin="0 0 0.5rem 0">
                <Div
                  className="Email"
                  display="flex"
                  alignitems="center"
                  width="11.001rem"
                  height="3.75rem"
                  textalign="left"
                  fontsize="1.625rem"
                  notebookwidth="6.25rem"
                  notebookheight="3.125rem"
                  notebookfontsize="1.25rem"
                >
                  이메일
                </Div>
                <Input
                  placeholder="이메일을 입력하세요."
                  padding="0 0 0 1.313rem"
                  width="21.875rem"
                  height="3.75rem"
                  fontsize="1.625rem"
                  borderradius="15px"
                  notebookwidth="15.625rem"
                  notebookheight="3.125rem"
                  notebookfontsize="1rem"
                />
              </Div>
            </Div>
            <Div
              className="RightContainer"
              width="fit-content"
              height="fit-content"
              margin="0 auto"
              notebookmargin="0 0 0 1.375rem"
            >
              <Div className="IdContainer" display="flex" margin="0 0 0.5rem 0">
                <Div
                  className="Id"
                  display="flex"
                  alignitems="center"
                  width="11.001rem"
                  height="3.75rem"
                  textalign="left"
                  fontsize="1.625rem"
                  notebookwidth="6.25rem"
                  notebookheight="3.125rem"
                  notebookfontsize="1.25rem"
                >
                  아이디
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
                    placeholder="아이디를 입력하세요."
                    padding="0 0 0 1.313rem"
                    width="21.875rem"
                    height="3.75rem"
                    fontsize="1.625rem"
                    borderradius="15px"
                    notebookwidth="15.625rem"
                    notebookheight="3.125rem"
                    notebookfontsize="1rem"
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
                    사용 불가능한 아이디입니다.
                  </Div>
                </Div>
              </Div>
              <Div className="PasswordContainer" display="flex" margin="0 0 0.5rem 0">
                <Div
                  className="Password"
                  display="flex"
                  alignitems="center"
                  width="11.001rem"
                  height="3.75rem"
                  textalign="left"
                  fontsize="1.625rem"
                  notebookwidth="6.25rem"
                  notebookheight="3.125rem"
                  notebookfontsize="1.25rem"
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
                    fontsize="1.625rem"
                    borderradius="15px"
                    notebookwidth="15.625rem"
                    notebookheight="3.125rem"
                    notebookfontsize="1rem"
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
                    8자 이상, 숫자, 영어, 특수분자 포함
                  </Div>
                </Div>
              </Div>
              <Div
                className="PasswordCheckContainer"
                display="flex"
                margin="0 0 0 0"
                notebookwidth="fit-content"
                notebookheight="fit-content"
              >
                <Div
                  className="PasswordCheck"
                  display="flex"
                  alignitems="center"
                  width="11.001rem"
                  height="3.75rem"
                  textalign="left"
                  fontsize="1.625rem"
                  notebookwidth="6.25rem"
                  notebookheight="3.125rem"
                  notebookfontsize="1.1rem"
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
                    fontsize="1.625rem"
                    borderradius="15px"
                    notebookwidth="15.625rem"
                    notebookheight="3.125rem"
                    notebookfontsize="1rem"
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
              width="12.5rem"
              height="4.375rem"
              borderradius="1rem"
              border="none"
              fontsize="1.5rem"
              fontWeight="bold"
              notebookwidth="7.5rem"
              notebookheight="3.125rem"
              notebookfontsize="1rem"
              notebookborderradius="10px"
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
