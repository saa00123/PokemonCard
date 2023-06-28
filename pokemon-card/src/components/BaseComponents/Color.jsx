import React from "react";

const Color = ({ color }) => {
  const colors = {
    Default: "#FFFFFF",
    Colorless: "#F6F6F6",
    Water: "#0097FF",
    Fire: "#FF0000",
    Grass: "#75F84B",
    Dragon: "#FFBE18",
    Fighting: "#AB1D1D",
    Psychic: "#A77BC1",
    Darkness: "#5F5D5D",
    Lightning: "#F8FB6E",
    Metal: "#D9D9D9",
    Fairy: "#FE85D5",
  };

  const colorValue = colors[color] || colors.Default;

  return (
    <div style={{ backgroundColor: colorValue, width: "50px", height: "50px" }}>
      {/* Optional: Display color name or code */}
      {/* <p>{colorValue}</p> */}
    </div>
  );
};

export default Color;

// 아래는 props시 사용법 예시

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ColorfulCard = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: ${({ color }) => color};
// `;

// const App = () => {
//   return (
//     <Container>
//       <ColorfulCard color="#FF0000">
//         <ColorComponent color="Fire" />
//       </ColorfulCard>
//     </Container>
//   );
// };

// export default App;
