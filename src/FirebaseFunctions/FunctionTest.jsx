import React, { useEffect, useState } from "react";
import axios from "axios";

function FunctionTest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // GET 요청
    axios.get("http://127.0.0.1:5001/pokemon-card-auction-project/us-central1/api/getData").then((response) => {
      setData(response.data);
    });

    // POST 요청
    const postData = {
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
    };
    axios
      .post("http://127.0.0.1:5001/pokemon-card-auction-project/us-central1/api/postData", postData)
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Cloud Functions 테스트</h2>
      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

export default FunctionTest;
