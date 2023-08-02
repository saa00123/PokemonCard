import React, { useState } from "react";
import app from "../firebase"; // firebase.js 파일에서 Firebase 인스턴스를 가져옵니다.

function AuthTest() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = () => {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // 회원가입 성공 시 처리
        console.log("회원가입 성공:", userCredential.user);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignIn = () => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // 로그인 성공 시 처리
        console.log("로그인 성공:", userCredential.user);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>회원가입 및 로그인 테스트</h2>
      <div>
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button type="button" onClick={handleSignUp}>
          회원가입
        </button>
        <button type="button" onClick={handleSignIn}>
          로그인
        </button>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
}

export default AuthTest;
