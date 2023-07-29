import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Color from "./Color";

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.25rem;
  height: 3.125rem;
  border-radius: 15px;
  border: solid 2px ${Color({ color: "Gray2" })};
  background-color: ${Color({ color: "Default" })};
  margin: ${(props) => props.margin};
`;

const DropdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.313rem;
  height: 3.125rem;
  font-family: Inter;
  font-size: 1.25rem;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  /* margin-right: 1rem; */
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 11.25rem;
  height: 3.125rem;
  margin-top: 0.313rem;
  background-color: #fff;
`;

const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-family: Inter;
  font-size: 1.25rem;
  text-align: center;
  color: #595959;
  border: solid 1px #b8b8b8;
  margin-top: -1px;
  background-color: ${Color({ color: "Default" })};

  &:hover {
    background-color: #dddddd;
  }
`;

const Polygon = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  /* border-left: 0.8125rem solid transparent;
  border-right: 0.8125rem solid transparent;
  border-bottom: 1.313rem solid ${Color({ color: "Red" })}; */
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  border-bottom: 0.85rem solid ${Color({ color: "Red" })};
  transform: rotate(180deg);
  right: 0.7rem;
  /* margin-right: -1rem; */
  /* border: 2px solid green; */
`;

const Dropdown = ({ margin, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shouldShowInitialOption, setShouldShowInitialOption] = useState(true);

  const handleOptionClick = (option) => {
    onSelect(option);
    setSelectedOption(option);
    setIsOpen(false);
  };
  useEffect(() => {
    if (selectedOption) {
      setShouldShowInitialOption(false);
    }
  }, [selectedOption]);

  return (
    <DropdownContainer margin={margin}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : options[0].label}
        <Polygon />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map(
            (option) =>
              option !== selectedOption &&
              (!shouldShowInitialOption || option !== options[0]) && (
                <DropdownMenuItem key={option.id} onClick={() => handleOptionClick(option)}>
                  {option.label}
                </DropdownMenuItem>
              ),
          )}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
