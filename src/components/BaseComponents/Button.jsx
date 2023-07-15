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
    width: ${(props) => props.notebookwidth};
    height: ${(props) => props.notebookheight};
    border: ${(props) => props.notebookborder};
    border-radius: ${(props) => props.notebookborderradius};
    box-sizing: border-box;
    font-size: ${(props) => props.notebookfontSize};
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
    notebookwidth,
    notebookheight,
    notebookborder,
    notebookborderradius,
    notebookfontSize,
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
      onMouseEnter={() => dispatch(setIsHovered(true))}
      onMouseLeave={() => dispatch(setIsHovered(false))}
      notebookwidth={notebookwidth}
      notebookheight={notebookheight}
      notebookborder={notebookborder}
      notebookborderradius={notebookborderradius}
      notebookfontSize={notebookfontSize}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
