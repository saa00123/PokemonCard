import React from "react";
import PropTypes from "prop-types";
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
`;

const Input = (props) => {
  const { color, fontSize, fontWeight, border, borderRadius, width, height, margin, padding, placeholder, ...rest } =
    props;

  const Red = Color({ color: "Red" });
  const White = Color({ color: "Default" });

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
      placeholder={placeholder}
      hoverBorder="2px solid"
      hoverBorderColor={Red}
      {...rest}
    />
  );
};

Input.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
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
  borderRadius: "4px",
  width: "100%",
  height: "40px",
  margin: "0",
  padding: "8px",
};

export default Input;