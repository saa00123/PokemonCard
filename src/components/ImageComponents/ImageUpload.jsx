import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import storage from "../../Firebase/storage";
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

const ImagePreview = ({ url, onDelete }) => (
  <div style={{ width: "18.75rem", height: "22rem", margin: "1rem" }}>
    <img src={url} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    <Button type="button" width="3rem" height="1.5rem" border="none" onClick={onDelete}>
      삭제
    </Button>
  </div>
);

function ImageUpload({ onImageUrlsUpdate }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = useCallback(
    (e) => {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...newFiles]);

      const newUrls = newFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newUrls]);

      newFiles.forEach((file) => {
        const fileName = `${uuidv4()}_${file.name}`;
        const storageRef = storage.ref(fileName);

        storageRef
          .put(file)
          .then(() => storageRef.getDownloadURL())
          .then((url) => {
            onImageUrlsUpdate((prevUrls) => [...prevUrls, url]);
            console.log("File uploaded successfully.");
          })
          .catch(console.error);
      });
    },
    [onImageUrlsUpdate],
  );

  const handleDelete = useCallback(
    (index) => {
      const file = selectedFiles[index];
      const storageRef = storage.ref(`${uuidv4()}_${file.name}`);

      storageRef
        .delete()
        .then(() => {
          onImageUrlsUpdate((prev) => {
            const updated = [...prev];
            updated.splice(index, 1);
            return updated;
          });
          console.log("File deleted successfully.");
        })
        .catch(console.error);

      setSelectedFiles((prev) => {
        const updated = [...prev];
        updated.splice(index, 1);
        return updated;
      });

      setPreviewUrls((prev) => {
        const updated = [...prev];
        updated.splice(index, 1);
        return updated;
      });
    },
    [selectedFiles, onImageUrlsUpdate],
  );

  return (
    <Div className="ImageContainer">
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
      <Div className="ImageUpload">
        {previewUrls.map((url, index) => (
          <ImagePreview key={url} url={url} onDelete={() => handleDelete(index)} />
        ))}
      </Div>
    </Div>
  );
}

export default ImageUpload;
