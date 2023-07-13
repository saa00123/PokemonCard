import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.items};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.text};
`;

const BasicDiv = (props) => {
  const {
    display,
    direction,
    justify,
    items,
    margin,
    padding,
    width,
    height,
    border,
    borderRadius,
    color,
    background,
    fontSize,
    fontWeight,
    text,
    children,
  } = props;

  return (
    <DivContainer
      display={display}
      direction={direction}
      justify={justify}
      items={items}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      color={color}
      background={background}
      fontSize={fontSize}
      fontWeight={fontWeight}
      text={text}
    >
      {children}
    </DivContainer>
  );
};

export default BasicDiv;
