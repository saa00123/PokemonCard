import React from "react";

const Button = ({ children, width, height, border, borderRadius, fontSize, backgroundColor, color, ...rest }) => (
  <Button
    style={{
      width,
      height,
      border,
      borderRadius,
      fontSize,
      backgroundColor,
      color,
    }}
    {...rest}
  >
    {children}
  </Button>
);

export default Button;

// 아래는 component 사용법 예시

// const App = () => {
//     return (
//       <div>
//         <ButtonComponent
//           width="200px"
//           height="40px"
//           border="2px solid #007bff"
//           borderRadius="8px"
//           fontSize="20px"
//           backgroundColor="#ffffff"
//           color="#000000"
//         >
//           Custom Button
//         </ButtonComponent>
//       </div>
//     );
//   };

//   export default App;
