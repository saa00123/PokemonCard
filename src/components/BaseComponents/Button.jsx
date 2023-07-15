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
  border-radius: ${(props) => props.borderRadius};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  background-color: ${Red};
  color: ${(props) => props.color};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${White};
    color: ${Red};
    border: 2px solid;
    border-color: ${Red};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: ${(props) => props.notebookWidth};
    height: ${(props) => props.notebookHeight};
    border: ${(props) => props.notebookBorder};
    border-radius: ${(props) => props.notebookBorderRadius};
    box-sizing: border-box;
    font-size: ${(props) => props.notebookFontSize};
    font-weight: bold;
    background-color: ${Red};
    color: ${White};
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${White};
      color: ${Red};
      border: 2px solid;
      border-color: ${Red};
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
    borderRadius,
    fontSize,
    ...rest
  } = props;

  const dispatch = useDispatch();

  return (
    <ButtonStyle
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      color={White}
      onMouseEnter={() => dispatch(setIsHovered(true))}
      onMouseLeave={() => dispatch(setIsHovered(false))}
      notebookWidth={notebookWidth}
      notebookHeight={notebookHeight}
      notebookBorder={notebookBorder}
      notebookBorderRadius={notebookBorderRadius}
      notebookFontSize={notebookFontSize}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
