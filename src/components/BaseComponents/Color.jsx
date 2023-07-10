import React from "react";

const Color = ({ color }) => {
  const colors = {
    Default: "#FFFFFF",
    Red: "#BE0020",
    Gray1: "#969696",
    Gray2: "#595959",
    Gray3: "#D9D9D9",
    Black: "#000000",
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
