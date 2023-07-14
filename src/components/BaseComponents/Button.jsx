/* eslint-disable react/button-has-type */
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setIsHovered } from "../../redux/state";
import Color from "./Color";

const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
    border: ${(props) => props.hoverBorder};
    border-color: ${(props) => props.hoverBorderColor};
  }
`;

const Button = ({ children, width, height, border, borderRadius, fontSize, ...rest }) => {
  const Red = Color({ color: "Red" });
  const White = Color({ color: "Default" });

  const dispatch = useDispatch();

  return (
    <ButtonStyle
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight="bold"
      backgroundColor={Red}
      color={White}
      hoverBackgroundColor={White}
      hoverColor={Red}
      hoverBorder="2px solid"
      hoverBorderColor={Red}
      onMouseEnter={() => dispatch(setIsHovered(true))}
      onMouseLeave={() => dispatch(setIsHovered(false))}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
};

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
