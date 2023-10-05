import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../Firebase/firebase";
import firestore from "../../Firebase/firestore";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";

function Login() {
  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Gray2 = Color({ color: "Gray2" });

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    firestore
      .collection("user")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setNickname(doc.data().nickname);
          app
            .auth()
            .signInWithEmailAndPassword(id, password)
            .then((userCredential) => {
              const { user } = userCredential;
              // console.log("user uid : ", user.uid);

              sessionStorage.setItem("uid", JSON.stringify(user.uid));
              sessionStorage.setItem("email", JSON.stringify(id));
              sessionStorage.setItem("nickname", JSON.stringify(nickname));

              navigate("/");
            })
            .catch((err) => {
              console.log(err);
              alert("로그인에 실패했습니다.");
            });
        }
      })
      .catch((err) => {
        console.log("err : ", err);
        alert("정보를 가져오는데 오류가 발생했습니다.");
      });
  };

  return (
    <Div
      className="LoginContainer"
      display="flex"
      flexdirection="column"
      justifycontent="start"
      alignitems="center"
      padding="14.125rem 0 0 0"
      width="100vw"
      notebookpadding="10rem 0 0 0"
    >
      <Logo />
      <Div
        className="LoginInputContainer"
        display="flex"
        justifycontent="center"
        margin="5.813rem 0 0 0"
        width="37.625rem"
        height="10.188rem"
        notebookmargin="2.465rem 0 0 0"
        notebookwidth="31.188rem"
        notebookheight="8.813rem"
      >
        <Div className="IdPasswordContainer" display="flex" flexdirection="column" margin="0 0.75rem 0 0">
          <Div className="IdContainer" display="flex" margin="0 0 0.688rem 0">
            <Div
              className="Id"
              display="flex"
              alignitems="center"
              width="8.75rem"
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
              placeholder="Put your email"
              padding="0 0 0 1.313rem"
              width="21.875rem"
              height="3.75rem"
              fontsize="1.625rem"
              borderradius="15px"
              notebookwidth="18.75rem"
              notebookheight="3.125rem"
              notebookfontsize="1rem"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </Div>
          <Div className="PasswordContainer" display="flex">
            <Div
              className="Password"
              display="flex"
              alignitems="center"
              width="8.75rem"
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
              width="21.875rem"
              height="5.625rem"
              notebookwidth="18.75rem"
              notebookheight="5rem"
            >
              <Input
                placeholder="Put your password"
                padding="0 0 0 1.313rem"
                width="21.875rem"
                height="3.75rem"
                fontsize="1.625rem"
                borderradius="15px"
                notebookwidth="18.75rem"
                notebookheight="3.125rem"
                notebookfontsize="1rem"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Div
                className="SignAndFindContainer"
                display="flex"
                justifycontent="space-between"
                width="21.438rem"
                height="1.875rem"
                notebookwidth="18.75rem"
                notebookheight="1.875rem"
              >
                <Button
                  className="SignUpBtn"
                  color={Gray2}
                  backgroundcolor="transparent"
                  border="none"
                  fontsize="1rem"
                  hoverbackgroundcolor="none"
                  hovercolor="none"
                  hoverborder="none"
                  hoverbordercolor="none"
                  onClick={() => navigate("/SignUp")}
                  notebookcolor={Gray2}
                  notebookbackgroundcolor="transparent"
                  notebookborder="none"
                  notebookfontsize="0.875rem"
                  notebookhoverbackgroundcolor="none"
                  notebookhovercolor="none"
                  notebookhoverborder="none"
                  notebookhoverbordercolor="none"
                >
                  회원가입
                </Button>
                <Button
                  className="SignUpBtn"
                  type="submit"
                  color={Gray2}
                  backgroundcolor="transparent"
                  border="none"
                  fontsize="1rem"
                  hoverbackgroundcolor="none"
                  hovercolor="none"
                  hoverborder="none"
                  hoverbordercolor="none"
                  onClick={() => navigate("/FindIdPassword")}
                  notebookcolor={Gray2}
                  notebookbackgroundcolor="transparent"
                  notebookborder="none"
                  notebookfontsize="0.875rem"
                  notebookhoverbackgroundcolor="none"
                  notebookhovercolor="none"
                  notebookhoverborder="none"
                  notebookhoverbordercolor="none"
                >
                  이메일/비밀번호 찾기
                </Button>
              </Div>
            </Div>
          </Div>
        </Div>
        <Button
          className="LoginBtn"
          width="6.25rem"
          height="8.313rem"
          fontsize="1.25rem"
          fontWeight="bold"
          borderradius="1rem"
          border="none"
          notebookwidth="5.313rem"
          notebookheight="6.938rem"
          notebookfontsize="1rem"
          onClick={handleSignIn}
        >
          로그인
        </Button>
      </Div>
    </Div>
  );
}

export default Login;
