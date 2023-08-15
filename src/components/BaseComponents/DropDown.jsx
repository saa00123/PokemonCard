import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Color from "./Color";

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderradius};
  border: solid 2px ${Color({ color: "Gray2" })};
  background-color: ${Color({ color: "Default" })};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: ${(props) => props.notebookwidth};
    height: ${(props) => props.notebookheight};
    border-radius: ${(props) => props.notebookborderradius};
  }
`;

const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.buttonwidth};
  height: ${(props) => props.buttonheight};
  padding: 0 1rem;
  font-family: Inter;
  font-size: ${(props) => props.buttonfontsize};
  text-align: left;
  cursor: pointer;
  background-color: transparent;
  border: none;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: ${(props) => props.notebookbuttonwidth};
    height: ${(props) => props.notebookbuttonheight};
    font-size: ${(props) => props.notebookbuttonfontsize};
    text-align: center;
    padding: 0 0.5rem;
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
  /* max-height: 30.1rem; */
  height: 15.375rem;
  margin-top: 0.313rem;
  background-color: #fff;
  overflow-y: auto;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: ${(props) => props.notebookmenuwidth};
    height: ${(props) => props.notebookmenuheight};
  }
`;

const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-family: Inter;
  color: #595959;
  border: solid 1px #b8b8b8;
  margin-bottom: -1px;
  background-color: ${Color({ color: "Default" })};
  font-size: ${(props) => props.menufontsize};
  text-align: center;

  &:hover {
    background-color: ${Color({ color: "Gray1" })};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: ${(props) => props.notebookmenufontsize};
  }
`;

const Polygon = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  border-bottom: 0.85rem solid ${Color({ color: "Red" })};
  transform: rotate(180deg);
  right: 1rem;

  @media (min-width: 1024px) and (max-width: 1440px) {
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-bottom: 0.5rem solid ${Color({ color: "Red" })};
  }
`;

const Dropdown = ({
  options,
  onSelect,
  width,
  height,
  margin,
  buttonwidth,
  buttonheight,
  buttonfontsize,
  menuwidth,
  menufontsize,
  borderradius,
  notebookwidth,
  notebookheight,
  notebookbuttonwidth,
  notebookbuttonheight,
  notebookbuttonfontsize,
  notebookmenuwidth,
  notebookmenuheight,
  notebookmenufontsize,
  notebookborderradius,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [shouldShowInitialOption, setShouldShowInitialOption] = useState(true);

  const handleOptionClick = (option, e) => {
    e.stopPropagation();
    e.preventDefault();
    onSelect(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer
      width={width}
      height={height}
      margin={margin}
      borderradius={borderradius}
      notebookwidth={notebookwidth}
      notebookheight={notebookheight}
      notebookborderradius={notebookborderradius}
      disabled={disabled}
      ref={dropdownRef}
    >
      <DropdownButton
        type="button"
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
                  onClick={(e) => handleOptionClick(option, e)}
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
