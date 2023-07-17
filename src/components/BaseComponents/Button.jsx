/* eslint-disable react/button-has-type */
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setIsHovered } from "../../redux/state";
import Color from "./Color";

const Red = Color({ color: "Red" });
const White = Color({ color: "White" });

const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.hoverbackgroundcolor};
    color: ${(props) => props.hovercolor};
    border: ${(props) => props.hoverborder};
    border-color: ${(props) => props.hoverbordercolor};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: ${(props) => props.notebookWidth};
    height: ${(props) => props.notebookHeight};
    border: ${(props) => props.notebookBorder};
    border-radius: ${(props) => props.notebookBorderRadius};
    box-sizing: border-box;
    font-size: ${(props) => props.notebookFontSize};
    font-weight: bold;
    background-color: ${(props) => props.notebookbackgroundcolor};
    color: ${(props) => props.notebookcolor};
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${(props) => props.hovernotebookbackgroundcolor};
      color: ${(props) => props.hovernotebookcolor};
      border: ${(props) => props.hovernotebookborder};
      border-color: ${(props) => props.hovernotebookbordercolor};
    }
  }
`;

const Button = (props) => {
  const {
    notebookWidth,
    notebookHeight,
    notebookBorder,
    notebookBorderRadius,
    notebookFontSize,
    children,
    width,
    height,
    border,
    borderradius,
    fontSize,
    ...rest
  } = props;

  const dispatch = useDispatch();

  return (
    <ButtonStyle
      width={width}
      height={height}
      border={border}
      borderradius={borderradius}
      fontSize={fontSize}
      color={White}
      backgroundcolor={Red}
      hoverbackgroundcolor={White}
      hovercolor={Red}
      hoverborder="2px solid"
      hoverbordercolor={Red}
      onMouseEnter={() => dispatch(setIsHovered(true))}
      onMouseLeave={() => dispatch(setIsHovered(false))}
      notebookWidth={notebookWidth}
      notebookHeight={notebookHeight}
      notebookBorder={notebookBorder}
      notebookBorderRadius={notebookBorderRadius}
      notebookFontSize={notebookFontSize}
      notebookcolor={White}
      notebookbackgroundcolor={Red}
      notebookhoverbackgroundcolor={White}
      notebookhovercolor={Red}
      notebookhoverborder="2px solid"
      notebookhoverbordercolor={Red}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
