import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const BasicDiv = (props) => {
  const { width, height, border, borderRadius, color, background, fontSize, fontWeight } = props;

  return (
    <DivContainer
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      color={color}
      background={background}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {/* Content of the div */}
    </DivContainer>
  );
};

export default BasicDiv;
