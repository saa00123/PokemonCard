import React from "react";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";

function ResetPassword() {
  const Default = Color({ color: "Default" });
  const Gray1 = Color({ color: "Gray1" });
  const Gray2 = Color({ color: "Gray2" });

  return (
    <Div
      className="ResetPasswordContainer"
      display="flex"
      flexdirection="column"
      justifycontent="start"
      alignitems="center"
      padding="7.188rem 0 0 0"
      width="100vw"
    >
      <Logo />
      <Div
        className="ResetContainer"
        display="flex"
        flexdirection="column"
        width="fit-content"
        height="fit-content"
        margin="3.063rem 0 0 0"
      >
        <Div
          className="ResetPasswordHeader"
          width="13.75rem"
          height="3.75rem"
          color={Gray2}
          fontsize="2rem"
          fontWeight="bold"
          notebookwidth="12.5rem"
          notebookheight="2.875rem"
          notebookfontsize="1.75rem"
        >
          비밀번호 재설정
        </Div>
        <Div
          className="ResetIdMainContainer"
          display="flex"
          flexdirection="column"
          justifycontent="center"
          alignitems="center"
          width="40.625rem"
          height="25rem"
          boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
          backgroundcolor={Default}
          notebookwidth="27.125rem"
          notebookheight="19.25rem"
        >
          <Div className="PasswordContainer" display="flex" margin="0 0 0.5rem 0">
            <Div
              className="Password"
              display="flex"
              alignitems="center"
              width="11.001rem"
              height="3.75rem"
              textalign="left"
              fontsize="1.625rem"
              notebookwidth="8.125rem"
              notebookheight="2.5rem"
              notebookfontsize="1.25rem"
            >
              비밀번호
            </Div>
            <Div display="flex" flexdirection="column" width="fit-content" height="fit-content">
              <Input
                placeholder="비밀번호를 입력하세요."
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontsize="1.625rem"
                borderradius="15px"
                notebookwidth="14.375rem"
                notebookheight="2.5rem"
                notebookfontsize="1rem"
                notebookborderradius="0.625rem"
                notebookpadding="0 0 0 0.863rem"
              />
              <Div
                className="PasswordWarning"
                display="flex"
                alignitems="center"
                width="21.438rem"
                height="1.5rem"
                boxsizing="border-box"
                color={Gray1}
                padding="0 0 0 1.313rem"
                fontsize="0.75rem"
                notebookwidth="10rem"
                notebookheight="1.25rem"
                notebookfontsize="0.625rem"
                notebookpadding="0 0 0 0.863rem"
              >
                8자 이상, 숫자, 영어, 특수분자 포함
              </Div>
            </Div>
          </Div>
          <Div className="PasswordCheckContainer" display="flex" margin="0 0 0.5rem 0">
            <Div
              className="Password"
              display="flex"
              alignitems="center"
              width="11.001rem"
              height="3.75rem"
              textalign="left"
              fontsize="1.625rem"
              notebookwidth="8.125rem"
              notebookheight="2.5rem"
              notebookfontsize="1.25rem"
            >
              비밀번호 확인
            </Div>
            <Div display="flex" flexdirection="column" width="fit-content" height="fit-content" margin="0 0 2.688rem 0">
              <Input
                placeholder="비밀번호를 다시 입력하세요."
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontsize="1.625rem"
                borderradius="15px"
                notebookwidth="14.375rem"
                notebookheight="2.5rem"
                notebookfontsize="1rem"
                notebookborderradius="0.625rem"
                notebookpadding="0 0 0 0.863rem"
              />
              <Div
                className="PasswordCheckWarning"
                display="flex"
                alignitems="center"
                width="21.438rem"
                height="1.5rem"
                boxsizing="border-box"
                padding="0 0 0 1.313rem"
                color={Gray1}
                fontsize="0.75rem"
                notebookwidth="10rem"
                notebookheight="1.25rem"
                notebookfontsize="0.625rem"
                notebookpadding="0 0 0 0.863rem"
              >
                비밀번호가 일치하지 않습니다.
              </Div>
            </Div>
          </Div>
          <Button
            type="submit"
            width="12.5rem"
            height="3.75rem"
            fontsize="1.5rem"
            fontWeight="bold"
            borderradius="1rem"
            border="none"
            notebookwidth="8.438rem"
            notebookheight="3.125rem"
            notebookfontsize="1rem"
            notebookborderradius="10px"
          >
            비밀번호 변경
          </Button>
        </Div>
      </Div>
    </Div>
  );
}

export default ResetPassword;
