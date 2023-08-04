/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import storage from "../../Firebase/storage"; // firebase.js 파일에서 storage 인스턴스를 가져옵니다.
import Div from "../BaseComponents/BasicDiv";
import Button from "../BaseComponents/Button";

function ImageUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // 선택한 파일들의 미리보기 URL 배열 생성
    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prevUrls) => [...prevUrls, ...previewUrls]);

    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);

    // 선택한 파일들을 바로 업로드
    files.forEach(handleUpload);
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

    // Firebase Storage에서 파일 삭제
    storageRef
      .delete()
      .then(() => {
        console.log("File deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting file:", error);
      });

    // 삭제 버튼을 누른 파일의 미리보기 URL을 제거
    const updatedPreviewUrls = [...previewUrls];
    updatedPreviewUrls.splice(index, 1);
    setPreviewUrls(updatedPreviewUrls);

    // 삭제 버튼을 누른 파일을 선택한 파일 배열에서 제거
    const updatedSelectedFiles = [...selectedFiles];
    updatedSelectedFiles.splice(index, 1);
    setSelectedFiles(updatedSelectedFiles);
  };

  return (
    <Div
      className="ImageContainer"
      display="flex"
      justifycontent="start"
      alignitems="center"
      width="fit-content"
      height="28rem"
      padding="1rem 0"
      overflowx="auto"
      notebookwidth="58.626rem"
      notebookheight="27rem"
    >
      <input type="file" multiple onChange={handleFileChange} />
      <Div
        className="ImageUpload"
        display="flex"
        justifycontent="center"
        alignitems="center"
        width="fit-content"
        height="25rem"
        minwidth="18.75rem"
        margin="0 1.188rem 0 0"
        notebookwidth="18.75rem"
        notebookheight="25rem"
      >
        {previewUrls.map((url, index) => (
          <div key={index} style={{ width: "18.75rem", height: "25rem", margin: "1rem" }}>
            <img src={url} alt={`Preview ${index}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <button type="button" onClick={() => handleDelete(index)}>
              삭제
            </button>
          </div>
        ))}
      </Div>
    </Div>
  );
}

export default ImageUpload;
