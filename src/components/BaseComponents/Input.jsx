import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Color from "./Color";

const Red = Color({ color: "Red" });

const StyledInput = styled.input`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  outline: none;
  padding: ${(props) => props.padding};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  min:100

  &:focus {
    border: 2px solid;
    border-color: ${Red};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    color: ${(props) => props.notebookcolor};
    font-size: ${(props) => props.notebookfontsize};
    font-weight: ${(props) => props.notebookfontWeight};
    border: ${(props) => props.notebookborder};
    border-radius: ${(props) => props.notebookborderradius};
    box-sizing: border-box;
    width: ${(props) => props.notebookwidth};
    height: ${(props) => props.notebookheight};
    margin: ${(props) => props.notebookmargin};
    outline: none;
    padding: ${(props) => props.notebookpadding};

    &:focus {
      border: 2px solid;
      border-color: ${Red};
    }
  }
`;

const Input = (props) => {
  const {
    color,
    fontsize,
    fontWeight,
    border,
    borderradius,
    width,
    height,
    margin,
    padding,
    notebookcolor,
    notebookfontsize,
    notebookfontWeight,
    notebookborder,
    notebookborderradius,
    notebookwidth,
    notebookheight,
    notebookmargin,
    notebookpadding,
    notebookHoverBorder,
    disabled,
    ...rest
  } = props;

  return (
    <StyledInput
      color={color}
      fontsize={fontsize}
      fontWeight={fontWeight}
      border={border}
      borderradius={borderradius}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      notebookcolor={notebookcolor}
      notebookfontsize={notebookfontsize}
      notebookfontWeight={notebookfontWeight}
      notebookborder={notebookborder}
      notebookborderradius={notebookborderradius}
      notebookwidth={notebookwidth}
      notebookheight={notebookheight}
      notebookmargin={notebookmargin}
      notebookpadding={notebookpadding}
      disabled={disabled}
      {...rest}
    />
  );
};

Input.propTypes = {
  color: PropTypes.string,
  fontsize: PropTypes.string,
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
  fontsize: "1rem",
  fontWeight: "normal",
  border: "1px solid #ccc",
  borderradius: "4px",
  width: "100%",
  height: "40px",
  margin: "0",
  padding: "8px",
};

export default Input;
