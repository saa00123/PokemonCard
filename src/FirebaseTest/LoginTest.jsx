import React, { useState } from "react";
import app from "../Firebase/firebase";

const LoginTest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
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
    <div>
      <input type="text" placeholder="아이디" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};

export default LoginTest;
