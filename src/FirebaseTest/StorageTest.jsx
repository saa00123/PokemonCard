import React, { useState } from "react";
import { storage } from "../firebase"; // firebase.js 파일에서 storage 인스턴스를 가져옵니다.

function StorageTest() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    const fileName = selectedFile.name;
    const storageRef = storage.ref(fileName);

    storageRef
      .put(selectedFile)
      .then(() => {
        console.log("File uploaded successfully.");
      })
      .catch((error) => {
        console.error("Error during file upload:", error);
      });
  };

  const handleDelete = () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    const fileName = selectedFile.name;
    const storageRef = storage.ref(fileName);

    storageRef
      .delete()
      .then(() => {
        console.log("File deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting file:", error);
      });
  };

  return (
    <div>
      <h2>이미지 업로드 및 삭제 테스트</h2>
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={handleUpload}>
        업로드
      </button>
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
    </div>
  );
}

export default StorageTest;
