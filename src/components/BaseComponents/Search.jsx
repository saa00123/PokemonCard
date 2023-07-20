import React from "react";
import styled from "styled-components";
import Color from "./Color";
import SearchImage from "../../images/SearchImage.png";
import HoverSearchImage from "../../images/HoverSearchImage.png";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 3.775rem;
  padding-left: 1.5rem;
  border: 4px solid;
  border-color: ${(props) => props.bordercolor};
  border-radius: 10rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 28.438rem;
    height: 2.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border: 3px solid;
    border-color: ${(props) => props.bordercolor};
  }
`;

const SearchWrapContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInputContainer = styled.div`
  width: 36rem;
  height: 3.775rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 25.438rem;
    height: 2.5rem;
  }
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 36rem;
  height: 3.775rem;
  font-size: 1.75rem;
  outline: none;
  border: none;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 25.438rem;
    height: 2.5rem;
    font-size: 1.25rem;
  }
`;

const SearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 4.5rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 2.5rem;
    height: 3rem;
  }
`;

const SearchButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${(props) => props.buttonbackgroundcolor};
  background-image: url(${SearchImage});
  background-repeat: no-repeat;
  background-size: 4.375rem;
  background-position: center;
  border: none;
  border-radius: 4rem;
  transition: background-image 0.2s ease;
  cursor: pointer;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 2.313rem;
    height: 2.313rem;
    background-size: 3rem;
  }

  &:hover {
    background-image: url(${HoverSearchImage});
  }
`;

const Search = ({ onSearch }) => {
  const Red = Color({ color: "Red" });
  const White = Color({ color: "Default" });

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    onSearch(searchTerm);
  };

  return (
    <SearchContainer bordercolor={Red}>
      <SearchWrapContainer onSubmit={handleSearch}>
        <SearchInputContainer>
          <SearchInput type="text" name="searchTerm" spellCheck="false" placeholder="Search" />
        </SearchInputContainer>
        <SearchButtonContainer>
          <SearchButton type="submit" buttonbackgroundcolor={White} />
        </SearchButtonContainer>
      </SearchWrapContainer>
    </SearchContainer>
  );
};

export default Search;
