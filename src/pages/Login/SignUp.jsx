import React, { useState, useEffect } from "react";
import app from "../../Firebase/firebase";
import firestore from "../../Firebase/firestore";
import Color from "../../components/BaseComponents/Color";
import Logo from "../../components/BaseComponents/Logo";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";

const Red = Color({ color: "Red" });
const Gray1 = Color({ color: "Gray1" });
const Gray2 = Color({ color: "Gray2" });
const White = Color({ color: "Default" });

function SignUp() {
  const resPass = /^(?=.*[A-Za-z])(?=.*[0-9]).{8,16}$/;

  // 이메일, 비밀번호, 이름, 닉네임, 비밀번호 확인 저장
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const [data, setData] = useState([]);
  const [getNicknameArray, setGetNicknameArray] = useState([]);

  // 이메일, 비밀번호, 닉네임, 비밀번호 확인 조건에 맞는지 확인
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkRepassword, setCheckRepassword] = useState(false);
  const [checkNickname, setCheckNickname] = useState("");

  const { FieldValue } = app.firestore;

  useEffect(() => {
    if (password === repassword && checkPassword) setCheckRepassword(true);
    else setCheckRepassword(false);
    if (resPass.test(password)) setCheckPassword(true);
    else setCheckPassword(false);
  }, [password, repassword]);

  // firestore 닉네임 연결
  useEffect(() => {
    const nicknameRef = firestore.collection("nickname").doc("nickname");
    nicknameRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setGetNicknameArray(doc.data().nicknameArray);
          console.log("document data : ", getNicknameArray);
        } else console.log("no such document!");
      })
      .catch((error) => {
        console.log("Error getting document : ", error);
      });
  }, []);

  const onClickSignUp = () => {
    console.log(email, password, name, nickname);
    console.log("checkPassword : ", checkPassword, "checkEmail : ", checkEmail, "checkRepassword : ", checkRepassword);
    if (name.length === "" || !checkPassword || !checkEmail || !checkNickname) alert("입력란을 다시 확인해 주세요.");

    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // 회원가입 성공
        // const { user } = userCredential.user;
        // console.log("Logged in user:", user);
        const docData = {
          name,
          nickname,
          email,
          buy: [],
          write: [],
        };
        firestore
          .collection("user")
          .doc(email)
          .set(docData)
          .then(() => {
            console.log("Document successfully written!");
          });
        const nicknames = app.firestore.collection("nickname").doc("nickname");
        nicknames.update({
          nicknameArray: firestore.FieldValue.arrayUnion(nickname),
        });
      })
      .catch((error) => {
        // 회원가입 실패
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode : ", errorCode);
        console.error("Login error:", errorMessage);
        if (errorCode === "auth/email-already-in-use") alert("이미 존재하는 이메일입니다.");
        if (errorCode === "auth/invalid-email") alert("이메일을 다시 입력해주세요.");
      });

    console.log(data);
  };

  const onClickCheckNickname = () => {
    const nicknameRef = firestore.collection("nickname").doc("nickname");
    nicknameRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setGetNicknameArray(doc.data().nicknameArray);
          console.log("document data : ", getNicknameArray);
          if (nickname.length > 0 && doc.data().nicknameArray.includes(nickname)) {
            console.log("nope");
            setCheckNickname("nope");
          } else {
            console.log("ok");
            setCheckNickname("ok");
          }
        } else console.log("no such document!");
      })
      .catch((error) => {
        console.log("Error getting document : ", error);
      });
  };

  const onClickCheckEmail = async () => {
    console.log(email);
    try {
      const signInMethods = await app.auth().fetchSignInMethodsForEmail(email);
      console.log(signInMethods);
      setCheckEmail(signInMethods.length === 0);
    } catch (error) {
      console.error("Error checking email availability:", error);
      setCheckEmail(false);
    }
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
              // border="2px black solid"
            >
              <Div className="NameContainer" margin="0 0 1.75rem 0" float="left">
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
              <Div
                className="NicknameContainer"
                margin="0 0 0.5rem 0"
                height="fit-content"
                notebookheight="fit-content"
                notebookmargin=" 0 0 0 4rem"
              >
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
                  // border="2px solid yellow"
                >
                  닉네임
                </Div>
                <Div
                  className="InputButtonContainer"
                  position="relative"
                  display="flex"
                  flexdirection="column"
                  alignitems="center"
                  width="21.875rem"
                  // height="5.25rem"
                  notebookwidth="fit-content"
                  notebookheight="fit-content"
                >
                  <Div className="InputContainer">
                    <Input
                      placeholder="닉네임을 입력하세요."
                      padding="0 3.5rem 0 1.313rem"
                      width="21.875rem"
                      height="3.75rem"
                      fontsize="1rem"
                      borderradius="15px"
                      notebookwidth="15.625rem"
                      notebookheight="3.125rem"
                      notebookfontsize="1rem"
                      notebookepadding="0 0 0 0.8rem"
                      onChange={(e) => setNickname(e.target.value)}
                      // onBlur={handleBlur}
                    />
                  </Div>
                  <Div
                    className="ButtonContainer"
                    position="absolute"
                    width="fit-content"
                    height="fit-content"
                    right="0.4rem"
                    top="0.36rem"
                    notebooktop="0.45rem"
                    notebookright="0.35rem"
                    // border="2px solid blue"
                  >
                    <Button
                      width="3rem"
                      height="3rem"
                      border="none"
                      borderradius="10px"
                      fontWeight="bold"
                      notebookwidth="2.3rem"
                      notebookheight="2.3rem"
                      notebookfontsize="12px"
                      onClick={onClickCheckNickname}
                    >
                      확인
                    </Button>
                  </Div>
                </Div>
                {nickname.length > 0 && checkNickname === "ok" && (
                  <Div
                    className="NicknameWarning"
                    display="flex"
                    alignitems="center"
                    width="100%"
                    height="1.5rem"
                    color={Gray1}
                    fontsize="0.75rem"
                    padding="0 0 0 1.313rem"
                    boxsizing="border-box"
                    notebookwidth="15.625rem"
                    notebookheight="1.25rem"
                    notebookfontsize="0.625rem"
                    notebookepadding="0 0 0 0.8rem"
                    // border="2px solid red"
                  >
                    사용 가능한 닉네임입니다.
                  </Div>
                )}
                {nickname.length > 0 && checkNickname === "nope" && (
                  <Div
                    className="NicknameWarning"
                    display="flex"
                    alignitems="center"
                    width="100%"
                    height="1.5rem"
                    color={Red}
                    fontsize="0.75rem"
                    padding="0 0 0 1.313rem"
                    boxsizing="border-box"
                    notebookwidth="15.625rem"
                    notebookheight="1.25rem"
                    notebookfontsize="0.625rem"
                    notebookepadding="0 0 0 0.8rem"
                    // border="2px solid red"
                  >
                    이미 사용중인 닉네임입니다.
                  </Div>
                )}
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
              <Div
                className="InputButtonContainer"
                position="relative"
                display="flex"
                flexdirection="column"
                alignitems="center"
                width="21.875rem"
                // height="5.25rem"
                notebookwidth="fit-content"
                notebookheight="fit-content"
              >
                <Div className="InputContainer">
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Div>
                <Div
                  className="ButtonContainer"
                  position="absolute"
                  width="fit-content"
                  height="fit-content"
                  right="0.4rem"
                  top="0.36rem"
                  notebooktop="0.45rem"
                  notebookright="0.35rem"
                  // border="2px solid blue"
                >
                  <Button
                    width="3rem"
                    height="3rem"
                    border="none"
                    borderradius="10px"
                    fontWeight="bold"
                    notebookwidth="2.3rem"
                    notebookheight="2.3rem"
                    notebookfontsize="12px"
                    onClick={onClickCheckEmail}
                  >
                    확인
                  </Button>
                </Div>
              </Div>
              {checkEmail ? (
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
                  사용 가능한 이메일입니다.
                </Div>
              ) : (
                <Div
                  className="EmailWarning"
                  display="flex"
                  alignitems="center"
                  width="21.438rem"
                  height="1.5rem"
                  color={Red}
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
              )}
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
                  {checkPassword ? (
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
                      사용 가능한 비밀번호 입니다.
                    </Div>
                  ) : (
                    <Div
                      className="NicknameWarning"
                      display="flex"
                      alignitems="center"
                      width="21.438rem"
                      height="1.5rem"
                      color={Red}
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
                  )}
                </Div>
              </Div>
              <Div className="PasswordCheckContainer" margin="0 0 0.5rem 0" notebookmargin="0 0 0 4rem">
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
                    onChange={(e) => setRepassword(e.target.value)}
                  />
                  {repassword.length > 0 && checkRepassword && (
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
                      비밀번호가 일치합니다.
                    </Div>
                  )}
                  {repassword.length > 0 && !checkRepassword && (
                    <Div
                      className="NicknameWarning"
                      display="flex"
                      alignitems="center"
                      width="21.438rem"
                      height="1.5rem"
                      color={Red}
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
                  )}
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
              onClick={onClickSignUp}
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
