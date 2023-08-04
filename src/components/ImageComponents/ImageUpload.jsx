/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import styled from "styled-components";
import storage from "../../Firebase/storage"; // firebase.js 파일에서 storage 인스턴스를 가져옵니다.
import Div from "../BaseComponents/BasicDiv";
import Input from "../BaseComponents/Input";
import Button from "../BaseComponents/Button";
import Color from "../BaseComponents/Color";

const Red = Color({ color: "Red" });

const ImageUploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.75rem;
  height: 22rem;
  min-width: 18.75rem;
  font-size: 5.5rem;
  font-weight: bolder;
  color: ${Red};
  border: solid 1px black;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 17rem;
    height: 22rem;
    min-width: 18.75rem;
  }
`;

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
      width="68rem"
      height="32rem"
      padding="1rem 0"
      overflowx="auto"
      notebookwidth="56.5rem"
      notebookheight="27rem"
    >
      <ImageUploadLabel htmlFor="fileInput">
        <Input
          type="file"
          id="fileInput"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        +
      </ImageUploadLabel>
      <Div className="ImageUpload" display="flex" justifycontent="center" alignitems="center" margin="0 1.188rem 0 0">
        {previewUrls.map((url, index) => (
          <div key={index} style={{ width: "18.75rem", height: "22rem", margin: "1rem" }}>
            <img src={url} alt={`Preview ${index}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <Button type="button" width="3rem" height="1.5rem" border="none" onClick={() => handleDelete(index)}>
              삭제
            </Button>
          </div>
        ))}
      </Div>
    </Div>
  );
}

export default ImageUpload;
