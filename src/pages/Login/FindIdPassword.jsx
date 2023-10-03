import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../Firebase/firebase";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";

function FindIdPassword() {
  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Gray2 = Color({ color: "Gray2" });

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // 비밀번호 재설정
  const onClickFindPassword = () => {
    if (email !== "") {
      console.log(email);
      app
        .auth()
        .sendPasswordResetEmail(email)
        .then((res) => {
          console.log("비밀번호 reset, email 전송");
          // console.log(res);
          navigate("/EmailAuth", { state: email });
        })
        .catch((err) => {
          console.log("에러 메세지 : ", err.message);
        });
    }
  };

  return (
    <Div
      className="FindIdPasswordContainer"
      display="flex"
      flexdirection="column"
      justifycontent="start"
      alignitems="center"
      padding="5.938rem 0 0 0"
      width="100vw"
    >
      <Logo />
      <Div
        className="MainContainer"
        display="flex"
        justifycontent="center"
        alignitems="center"
        width="90.438rem"
        notebookwidth="60rem"
      >
        <Div
          className="FindIdContainer"
          display="flex"
          flexdirection="column"
          width="40.625rem"
          height="46.064rem"
          margin="5.375rem 2.938rem 0 0"
          notebookwidth="31.813rem"
          notebookheight="21.1rem"
          notebookmargin="5.375rem 1.938rem 0 0"
        >
          <Div
            className="FindIdHeader"
            width="13.75rem"
            height="5rem"
            color={Gray2}
            fontsize="2rem"
            fontWeight="bold"
            notebookwidth="9.125rem"
            notebookheight="3.875rem"
            notebookfontsize="1.75rem"
          >
            이메일 찾기
          </Div>
          <Div
            className="FindIdMainContainer"
            display="flex"
            flexdirection="column"
            justifycontent="center"
            alignitems="center"
            width="40.75rem"
            height="22.375rem"
            boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
            backgroundcolor={Default}
            notebookwidth="28.813rem"
            notebookheight="17.25rem"
          >
            <Div
              className="FindIdNotice"
              display="flex"
              justifycontent="center"
              alignitems="center"
              width="32.25rem"
              height="3.75rem"
              margin="0 0 0.813rem 0"
              fontsize="1.5rem"
              notebookwidth="26.188rem"
              notebookheight="3.125rem"
              notebookfontsize="1.25rem"
            >
              회원정보에 등록한 이름과 닉네임을 입력해주세요.
            </Div>
            <Div
              className="NameContainer"
              display="flex"
              width="35.375rem"
              margin="0 0 0.688rem 0"
              notebookwidth="23.563rem"
            >
              <Div
                className="Name"
                display="flex"
                alignitems="center"
                width="7.5rem"
                height="3.75rem"
                textalign="left"
                fontsize="1.625rem"
                notebookwidth="5rem"
                notebookheight="2.5rem"
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
                notebookwidth="14.375rem"
                notebookheight="2.5rem"
                notebookfontsize="1rem"
                notebookborderradius="10px"
                onChange={onChangeName}
              />
            </Div>
            <Div className="EmailContainer" display="flex" margin="0 0 0.688rem 0">
              <Div
                className="Email"
                display="flex"
                alignitems="center"
                width="7.5rem"
                height="3.75rem"
                textalign="left"
                fontsize="1.625rem"
                notebookwidth="5rem"
                notebookheight="2.5rem"
                notebookfontsize="1.25rem"
              >
                닉네임
              </Div>
              <Input
                placeholder="닉네임을 입력하세요."
                padding="0 0 0 1.313rem"
                margin="0 0.375rem 0 0"
                width="21.875rem"
                height="3.75rem"
                fontsize="1.625rem"
                borderradius="15px"
                notebookwidth="14.375rem"
                notebookheight="2.5rem"
                notebookfontsize="1rem"
                notebookborderradius="10px"
                onChange={onChangeNickname}
              />
              <Button
                type="submit"
                width="5.625rem"
                height="3.75rem"
                fontsize="1.25rem"
                fontWeight="bold"
                borderradius="1rem"
                border="none"
                notebookwidth="3.75rem"
                notebookheight="2.5rem"
                notebookfontsize="1rem"
                notebookborderradius="10px"
              >
                확인
              </Button>
            </Div>
          </Div>
        </Div>
        <Div
          className="FindPasswordContainer"
          display="flex"
          flexdirection="column"
          width="40.625rem"
          height="46.064rem"
          margin="5.375rem 0 0 0"
          notebookwidth="31.813rem"
          notebookheight="21.1rem"
        >
          <Div
            className="FindPasswordHeader"
            width="13.75rem"
            height="5rem"
            color={Gray2}
            fontsize="2rem"
            fontWeight="bold"
            notebookwidth="10.625rem"
            notebookheight="3.875rem"
            notebookfontsize="1.75rem"
          >
            비밀번호 찾기
          </Div>
          <Div
            className="FindPasswordMainContainer"
            display="flex"
            flexdirection="column"
            justifycontent="center"
            alignitems="center"
            width="40.75rem"
            height="22.375rem"
            boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
            backgroundcolor={Default}
            notebookwidth="28.813rem"
            notebookheight="17.25rem"
          >
            <Div
              className="FindPasswordNotice"
              display="flex"
              justifycontent="center"
              alignitems="center"
              width="32.25rem"
              height="3.75rem"
              margin="0 0 0.813rem 0"
              fontsize="1.5rem"
              notebookwidth="26.188rem"
              notebookheight="3.125rem"
              notebookfontsize="1.25rem"
            >
              회원정보에 등록한 아이디와 이메일을 입력해주세요.
            </Div>
            {/* <Div
              className="IdContainer"
              display="flex"
              width="35.375rem"
              margin="0 0 0.688rem 0"
              notebookwidth="23.563rem"
            >
              <Div
                className="Id"
                display="flex"
                alignitems="center"
                width="7.5rem"
                height="3.75rem"
                textalign="left"
                fontsize="1.625rem"
                notebookwidth="5rem"
                notebookheight="2.5rem"
                notebookfontsize="1.25rem"
              >
                아이디
              </Div>
              <Input
                placeholder="아이디를 입력하세요."
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontsize="1.625rem"
                borderradius="15px"
                notebookwidth="14.375rem"
                notebookheight="2.5rem"
                notebookfontsize="1rem"
                notebookborderradius="10px"
                onChange={onChangeId}
              />
            </Div> */}
            <Div className="EmailContainer" display="flex" margin="0 0 0.688rem 0">
              <Div
                className="Email"
                display="flex"
                alignitems="center"
                width="7.5rem"
                height="3.75rem"
                textalign="left"
                fontsize="1.625rem"
                notebookwidth="5rem"
                notebookheight="2.5rem"
                notebookfontsize="1.25rem"
              >
                이메일
              </Div>
              <Input
                placeholder="이메일을 입력하세요."
                padding="0 0 0 1.313rem"
                margin="0 0.375rem 0 0"
                width="21.875rem"
                height="3.75rem"
                fontsize="1.625rem"
                borderradius="15px"
                notebookwidth="14.375rem"
                notebookheight="2.5rem"
                notebookfontsize="1rem"
                notebookborderradius="10px"
                onChange={onChangeEmail}
              />
              <Button
                type="submit"
                width="5.625rem"
                height="3.75rem"
                fontsize="1.25rem"
                fontWeight="bold"
                borderradius="1rem"
                border="none"
                notebookwidth="3.75rem"
                notebookheight="2.5rem"
                notebookfontsize="1rem"
                notebookborderradius="10px"
                onClick={onClickFindPassword}
              >
                확인
              </Button>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

export default FindIdPassword;
