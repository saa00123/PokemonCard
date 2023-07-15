import React from "react";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";

function FindIdPassword() {
  const Gray2 = Color({ color: "Gray2" });

  return (
    <Div
      className="FindIdPasswordContainer"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      padding="5.938rem 0 0 0"
      width="100vw"
    >
      <Logo />
      <Div className="MainContainer" display="flex" justifyContent="space-between" width="90.438rem">
        <Div
          className="FindIdContainer"
          display="flex"
          flexDirection="column"
          width="40.625rem"
          height="46.064rem"
          margin="5.375rem 0 0 0"
        >
          <Div className="FindIdHeader" width="13.75rem" height="5rem" color={Gray2} fontSize="2rem" fontWeight="bold">
            아이디 찾기
          </Div>
          <Div
            className="FindIdMainContainer"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="40.75rem"
            height="22.375rem"
            boxShadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
          >
            <Div
              className="FindIdNotice"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="32.25rem"
              height="3.75rem"
              margin="0 0 0.813rem 0"
              fontSize="1.5rem"
            >
              회원정보에 등록한 이름과 이메일을 입력해주세요.
            </Div>
            <Div className="NameContainer" display="flex" width="35.375rem" margin="0 0 0.688rem 0">
              <Div
                className="Name"
                display="flex"
                alignItems="center"
                width="7.5rem"
                height="3.75rem"
                textAlign="left"
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
            <Div className="EmailContainer" display="flex" margin="0 0 0.688rem 0">
              <Div
                className="Email"
                display="flex"
                alignItems="center"
                width="7.5rem"
                height="3.75rem"
                textAlign="left"
                fontSize="1.625rem"
              >
                이메일
              </Div>
              <Input
                placeholder="이메일을 입력하세요."
                padding="0 0 0 1.313rem"
                margin="0 0.375rem 0 0"
                width="21.875rem"
                height="3.75rem"
                fontSize="1.625rem"
                borderRadius="15px"
              />
              <Button
                type="submit"
                width="5.625rem"
                height="3.75rem"
                fontSize="1.25rem"
                fontWeight="bold"
                borderRadius="1rem"
                border="none"
              >
                확인
              </Button>
            </Div>
          </Div>
        </Div>
        <Div
          className="FindPasswordContainer"
          display="flex"
          flexDirection="column"
          width="40.625rem"
          height="46.064rem"
          margin="5.375rem 0 0 0"
        >
          <Div
            className="FindPasswordHeader"
            width="13.75rem"
            height="5rem"
            color={Gray2}
            fontSize="2rem"
            fontWeight="bold"
          >
            비밀번호 찾기
          </Div>
          <Div
            className="FindPasswordMainContainer"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="40.75rem"
            height="22.375rem"
            boxShadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
          >
            <Div
              className="FindPasswordNotice"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="32.25rem"
              height="3.75rem"
              margin="0 0 0.813rem 0"
              fontSize="1.5rem"
            >
              회원정보에 등록한 아이디와 이메일을 입력해주세요.
            </Div>
            <Div className="IdContainer" display="flex" width="35.375rem" margin="0 0 0.688rem 0">
              <Div
                className="Id"
                display="flex"
                alignItems="center"
                width="7.5rem"
                height="3.75rem"
                textAlign="left"
                fontSize="1.625rem"
              >
                아이디
              </Div>
              <Input
                placeholder="아이디를 입력하세요."
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontSize="1.625rem"
                borderRadius="15px"
              />
            </Div>
            <Div className="EmailContainer" display="flex" margin="0 0 0.688rem 0">
              <Div
                className="Email"
                display="flex"
                alignItems="center"
                width="7.5rem"
                height="3.75rem"
                textAlign="left"
                fontSize="1.625rem"
              >
                이메일
              </Div>
              <Input
                placeholder="이메일을 입력하세요."
                padding="0 0 0 1.313rem"
                margin="0 0.375rem 0 0"
                width="21.875rem"
                height="3.75rem"
                fontSize="1.625rem"
                borderRadius="15px"
              />
              <Button
                type="submit"
                width="5.625rem"
                height="3.75rem"
                fontSize="1.25rem"
                fontWeight="bold"
                borderRadius="1rem"
                border="none"
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
