import React, { useState, useEffect } from "react";
import database from "../Firebase/database";

function PriceGet() {
  const [dataKey, setDataKey] = useState(null);
  const [price, setPrice] = useState("");
  const [users, setUsers] = useState({});

  useEffect(() => {
    // 실시간 데이터베이스에서 'users' 경로의 데이터를 읽어옵니다.
    const usersRef = database.ref("users");
    usersRef.on("value", (snapshot) => {
      setUsers(snapshot.val());
    });

    // 컴포넌트가 언마운트될 때 리스너를 제거합니다.
    return () => {
      usersRef.off();
    };
  }, []);

  const writeData = () => {
    // ... 기존의 writeData 함수 내용 ...
  };

  const deleteData = () => {
    // ... 기존의 deleteData 함수 내용 ...
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button type="button" onClick={writeData}>
        데이터 쓰기
      </button>
      <button type="button" onClick={deleteData}>
        데이터 삭제
      </button>

      <div>
        <h2>실시간 입찰가 불러오기</h2>
        {Object.entries(users).map(([key, user]) => (
          <div key={key}>
            <p>Price: {user.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceGet;
