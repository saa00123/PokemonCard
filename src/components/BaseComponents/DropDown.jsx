import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Color from "./Color";

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 15px;
  border: solid 2px ${Color({ color: "Gray2" })};
  background-color: ${Color({ color: "Default" })};

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: ${(props) => props.notebookwidth};
    height: ${(props) => props.notebookheight};
  }
`;

const DropdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.buttonwidth};
  height: ${(props) => props.buttonheight};
  font-family: Inter;
  font-size: ${(props) => props.buttonfontsize};
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  border: none;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: ${(props) => props.notebookbuttonwidth};
    height: ${(props) => props.notebookbuttonheight};
    height: ${(props) => props.notebookbuttonfontsize};
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: ${(props) => props.menuwidth};
  height: ${(props) => props.menuheight};
  margin-top: 0.313rem;
  background-color: #fff;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: ${(props) => props.notebookmenuwidth};
    height: ${(props) => props.notebookmenuheight};
  }
`;

const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-family: Inter;
  font-size: ${(props) => props.menufontsize};
  text-align: center;
  border: solid 1px black;

  &:hover {
    background-color: ${Color({ color: "Gray2" })};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    height: ${(props) => props.notebookmenufontsize};
  }
`;

const Polygon = styled.div`
  width: 0;
  height: 0;
  border-left: 0.8125rem solid transparent;
  border-right: 0.8125rem solid transparent;
  border-bottom: 1.313rem solid ${Color({ color: "Red" })};
  transform: rotate(180deg);
`;

const Dropdown = ({
  options,
  onSelect,
  width,
  height,
  buttonwidth,
  buttonheight,
  buttonfontsize,
  menuwidth,
  menuheight,
  menufontsize,
  notebookwidth,
  notebookheight,
  notebookbuttonwidth,
  notebookbuttonheight,
  notebookbuttonfontsize,
  notebookmenuwidth,
  notebookmenuheight,
  notebookmenufontsize,
}) => {
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
    <DropdownContainer width={width} height={height} notebookwidth={notebookwidth} notebookheight={notebookheight}>
      <DropdownButton
        buttonwidth={buttonwidth}
        buttonheight={buttonheight}
        buttonfontsize={buttonfontsize}
        notebookbuttonwidth={notebookbuttonwidth}
        notebookbuttonheight={notebookbuttonheight}
        notebookbuttonfontsize={notebookbuttonfontsize}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : options[0].label}
        <Polygon />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu
          menuwidth={menuwidth}
          menuheight={menuheight}
          notebookmenuwidth={notebookmenuwidth}
          notebookmenuheight={notebookmenuheight}
        >
          {options.map(
            (option) =>
              option !== selectedOption &&
              (!shouldShowInitialOption || option !== options[0]) && (
                <DropdownMenuItem
                  menufontsize={menufontsize}
                  notebookmenufontsize={notebookmenufontsize}
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                >
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
