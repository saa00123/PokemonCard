import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Color from "./Color";

const Red = Color({ color: "Red" });

const StyledInput = styled.input`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  outline: none;
  padding: ${(props) => props.padding};

  &:focus {
    border: 2px solid;
    border-color: ${Red};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    color: ${(props) => props.notebookColor};
    font-size: ${(props) => props.notebookFontSize};
    font-weight: ${(props) => props.notebookFontWeight};
    border: ${(props) => props.notebookBorder};
    border-radius: ${(props) => props.notebookborderradius};
    box-sizing: border-box;
    width: ${(props) => props.notebookWidth};
    height: ${(props) => props.notebookHeight};
    margin: ${(props) => props.notebookMargin};
    outline: none;
    padding: ${(props) => props.notebookPadding};

    &:focus {
      border: 2px solid;
      border-color: ${Red};
    }
  }
`;

const Input = (props) => {
  const {
    color,
    fontSize,
    fontWeight,
    border,
    borderradius,
    width,
    height,
    margin,
    padding,
    notebookColor,
    notebookFontSize,
    notebookFontWeight,
    notebookBorder,
    notebookborderradius,
    notebookWidth,
    notebookHeight,
    notebookMargin,
    notebookPadding,
    notebookHoverBorder,
    ...rest
  } = props;

  return (
    <StyledInput
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      border={border}
      borderradius={borderradius}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      notebookColor={notebookColor}
      notebookFontSize={notebookFontSize}
      notebookFontWeight={notebookFontWeight}
      notebookBorder={notebookBorder}
      notebookborderradius={notebookborderradius}
      notebookWidth={notebookWidth}
      notebookHeight={notebookHeight}
      notebookMargin={notebookMargin}
      notebookPadding={notebookPadding}
      {...rest}
    />
  );
};

Input.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  border: PropTypes.string,
  borderradius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

Input.defaultProps = {
  color: "black",
  fontSize: "1rem",
  fontWeight: "normal",
  border: "1px solid #ccc",
  borderradius: "4px",
  width: "100%",
  height: "40px",
  margin: "0",
  padding: "8px",
};

export default Input;
