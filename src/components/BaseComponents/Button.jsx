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

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: ${(props) => props.notebookWidth};
    height: ${(props) => props.notebookHeight};
    border: ${(props) => props.notebookBorder};
    border-radius: ${(props) => props.notebookBorderRadius};
    box-sizing: border-box;
    font-size: ${(props) => props.notebookFontSize};
    font-weight: bold;
    background-color: ${(props) => props.notebookBackgroundColor};
    color: ${(props) => props.notebookColor};
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${(props) => props.notebookHoverBackgroundColor};
      color: ${(props) => props.notebookHoverColor};
      border: ${(props) => props.notebookHoverBorder};
      border-color: ${(props) => props.notebookHoverBorderColor};
    }
  }
`;

const Button = ({
  notebookWidth,
  notebookHeight,
  notebookBorder,
  notebookBorderRadius,
  notebookFontSize,
  children,
  width,
  height,
  border,
  borderRadius,
  fontSize,
  ...rest
}) => {
  const Red = Color({ color: "Red" });
  const White = Color({ color: "White" });

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
      notebookWidth={notebookWidth}
      notebookHeight={notebookHeight}
      notebookBorder={notebookBorder}
      notebookBorderRadius={notebookBorderRadius}
      notebookFontSize={notebookFontSize}
      notebookBackgroundColor={Red}
      notebookColor={White}
      notebookHoverBackgroundColor={White}
      notebookHoverColor={Red}
      notebookHoverBorder="2px solid"
      notebookHoverBorderColor={Red}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
