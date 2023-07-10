import React, { useState } from "react";

const ImageUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    onImageUpload(file);
  };

  return (
    <div>
      <h2>이미지 업로더</h2>
      {selectedImage && <img src={selectedImage} alt="Uploaded" />}
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUpload;

// // 사용 예시
// import React from "react";
// import ImageUploader from "./ImageUpload";

// const ParentComponent = () => {
//   const handleImageUpload = (file) => {
//     // 이미지 파일을 이용한 로직을 작성
//     console.log("업로드된 이미지:", file);
//   };

//   return (
//     <div>
//       <h1>부모 컴포넌트</h1>
//       <ImageUpload onImageUpload={handleImageUpload} />
//     </div>
//   );
// };

// export default ParentComponent;
