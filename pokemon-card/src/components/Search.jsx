import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  padding: 5px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
`;

const SearchButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Search = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    onSearch(searchTerm);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSearch}>
        <SearchInput type="text" name="searchTerm" placeholder="검색어 입력" />
        <SearchButton type="submit">검색</SearchButton>
      </form>
    </SearchContainer>
  );
};

export default Search;
