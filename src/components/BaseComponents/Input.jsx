import React from "react";
import styled from "styled-components";
import Color from "./Color";

const StyledInput = styled.input`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  outline: none;
  padding: ${(props) => props.padding};

  &:focus {
    border: ${(props) => props.hoverBorder};
    border-color: ${(props) => props.hoverBorderColor};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    color: ${(props) => props.notebookColor};
    font-size: ${(props) => props.notebookFontSize};
    font-weight: ${(props) => props.notebookFontWeight};
    border: ${(props) => props.notebookBorder};
    border-radius: ${(props) => props.notebookBorderRadius};
    box-sizing: border-box;
    width: ${(props) => props.notebookWidth};
    height: ${(props) => props.notebookHeight};
    margin: ${(props) => props.notebookMargin};
    outline: none;
    padding: ${(props) => props.notebookPadding};

    &:focus {
      border: ${(props) => props.notebookHoverBorder};
      border-color: ${(props) => props.notebookHoverBorderColor};
    }
  }
`;

const Input = (props) => {
  const {
    color,
    fontSize,
    fontWeight,
    border,
    borderRadius,
    width,
    height,
    margin,
    padding,
    notebookColor,
    notebookFontSize,
    notebookFontWeight,
    notebookBorder,
    notebookBorderRadius,
    notebookWidth,
    notebookHeight,
    notebookMargin,
    notebookPadding,
    notebookHoverBorder,
    notebookHoverBorderColor,
    ...rest
  } = props;

  const Red = Color({ color: "Red" });

  return (
    <StyledInput
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      border={border}
      borderRadius={borderRadius}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      hoverBorder="2px solid"
      hoverBorderColor={Red}
      notebookColor={notebookColor}
      notebookFontSize={notebookFontSize}
      notebookFontWeight={notebookFontWeight}
      notebookBorder={notebookBorder}
      notebookBorderRadius={notebookBorderRadius}
      notebookWidth={notebookWidth}
      notebookHeight={notebookHeight}
      notebookMargin={notebookMargin}
      notebookPadding={notebookPadding}
      notebookHoverBorder="2px solid"
      notebookHoverBorderColor={notebookHoverBorderColor}
      {...rest}
    />
  );
};

export default Input;
