import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const BackgroundImages = ({ color }) => {
  let imageName;

  switch (color.toLowerCase()) {
    case "default":
      imageName = "default.png";
      break;
    case "colorless":
      imageName = "colorless.png";
      break;
    case "water":
      imageName = "water.png";
      break;
    case "fire":
      imageName = "fire.png";
      break;
    case "grass":
      imageName = "grass.png";
      break;
    case "dragon":
      imageName = "dragon.png";
      break;
    case "fighting":
      imageName = "fighting.png";
      break;
    case "psychic":
      imageName = "psychic.png";
      break;
    case "darkness":
      imageName = "darkness.png";
      break;
    case "lightning":
      imageName = "lightning.png";
      break;
    case "metal":
      imageName = "metal.png";
      break;
    case "fairy":
      imageName = "fairy.png";
      break;
    default:
      imageName = "default.png";
      break;
  }

  const imagePath = require(`../images/${imageName}`).default;

  return <BackgroundImage image={imagePath} />;
};

export default BackgroundImages;

// 아래는 porps시 사용법 예시

// const App = () => {
//   return (
//     <div>
//       <h1>Background Images Example</h1>
//       <BackgroundImages color="fire" />
//       <BackgroundImages color="water" />
//       <BackgroundImages color="grass" />
//       {/* Add more BackgroundImages instances with different colors */}
//     </div>
//   );
// };

// export default App;
