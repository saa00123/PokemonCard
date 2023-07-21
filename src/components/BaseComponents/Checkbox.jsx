import React, { useState } from "react";
import styled from "styled-components";
import Color from "./Color";

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 2px solid ${(props) => (props.checked ? Color({ color: "Red" }) : Color({ color: "Red" }))};
  background-color: ${(props) => (props.checked ? Color({ color: "Red" }) : Color({ color: "Red" }))};
  cursor: pointer;
  position: relative;
`;

const CheckIcon = styled.svg`
  fill: none;
  stroke: #fff;
  stroke-width: 3px;
  visibility: ${(props) => (props.checked ? "visible" : "hidden")};
`;

const CheckboxLabel = styled.span`
  font-size: 1.5rem;
  margin-left: 1.25rem;
`;

const Checkbox = ({ width, height, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={isChecked} onChange={handleChange} />
      <StyledCheckbox width={width} height={height} checked={isChecked}>
        <CheckIcon viewBox="0 0 24 24" checked={isChecked}>
          <polyline points="20 6 9 17 4 12" />
        </CheckIcon>
      </StyledCheckbox>
      <CheckboxLabel>{children}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
