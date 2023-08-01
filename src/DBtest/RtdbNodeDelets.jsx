import React from "react";
import database from "../firebase";

function RtdbNodeDelete() {
  const writeData = () => {
    // 쓰기할 데이터
    const data = {
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
    };

    // 데이터베이스의 'users' 경로에 데이터 쓰기
    database
      .ref("users")
      .push(data)
      .then(() => {
        console.log("데이터 쓰기 성공!");
      })
      .catch((error) => {
        console.error("데이터 쓰기 실패:", error);
      });
  };

  const deleteUsersNode = () => {
    // 데이터베이스의 'users' 노드 삭제
    database
      .ref("users")
      .remove()
      .then(() => {
        console.log("'users' 노드 삭제 성공!");
      })
      .catch((error) => {
        console.error("'users' 노드 삭제 실패:", error);
      });
  };

  return (
    <div>
      <button type="button" onClick={writeData}>
        데이터 쓰기
      </button>
      <button type="button" onClick={deleteUsersNode}>
        노드 삭제
      </button>
    </div>
  );
}

export default RtdbNodeDelete;
