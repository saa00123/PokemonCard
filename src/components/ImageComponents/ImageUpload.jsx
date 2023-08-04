/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import storage from "../../Firebase/storage"; // firebase.js 파일에서 storage 인스턴스를 가져옵니다.

function ImageUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // 선택한 파일들의 미리보기 URL 배열 생성
    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prevUrls) => [...prevUrls, ...previewUrls]);

    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleUpload = (file) => {
    const fileName = file.name;
    const storageRef = storage.ref(fileName);

    storageRef
      .put(file)
      .then(() => {
        console.log("File uploaded successfully.");
      })
      .catch((error) => {
        console.error("Error during file upload:", error);
      });
  };

  const handleDelete = (index) => {
    const fileName = selectedFiles[index].name;
    const storageRef = storage.ref(fileName);

    storageRef
      .delete()
      .then(() => {
        console.log("File deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting file:", error);
      });

    const updatedPreviewUrls = [...previewUrls];
    updatedPreviewUrls.splice(index, 1);
    setPreviewUrls(updatedPreviewUrls);

    const updatedSelectedFiles = [...selectedFiles];
    updatedSelectedFiles.splice(index, 1);
    setSelectedFiles(updatedSelectedFiles);
  };

  return (
    <div>
      <h2>이미지 업로드 및 삭제 테스트</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {previewUrls.map((url, index) => (
          <div key={index} style={{ width: "18.75rem", height: "25rem", margin: "1rem" }}>
            <img src={url} alt={`Preview ${index}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <button type="button" onClick={() => handleDelete(index)}>
              삭제
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => selectedFiles.forEach(handleUpload)}>
        업로드
      </button>
    </div>
  );
}

export default ImageUpload;
