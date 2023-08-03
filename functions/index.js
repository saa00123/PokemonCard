/* eslint-disable consistent-return */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));

// GET 요청 처리 예시
app.get("/getData", (req, res) => {
  const data = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };

  // 데이터를 클라이언트로 응답
  res.json(data);
});

// POST 요청 처리 예시
app.post("/postData", (req, res) => {
  const { name, age, email } = req.body;

  if (!name || !age || !email) {
    return res.status(400).json({ error: "Please provide name, age, and email in the request body." });
  }

  // 클라이언트가 보낸 데이터를 처리하고 응답
  const result = { success: true, message: "Data received successfully" };
  res.json(result);
});

// Express 앱을 Cloud Function으로 노출합니다.
exports.api = functions.https.onRequest(app);
