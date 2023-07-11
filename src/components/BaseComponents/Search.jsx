import React from "react";
import styled from "styled-components";
import Color from "./Color";
import SearchImage from "../images/SearchImage.png";
import HoverSearchImage from "../images/HoverSearchImage.png";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 55rem;
  height: 4.375rem;
  border: 1px solid black;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 50rem;
  height: 4.375rem;
  padding-left: 2rem;
  border: 4px solid;
  border-color: ${(props) => props.borderColor};
  border-radius: 10rem;
  font-size: 1.75rem;
`;

const SearchButton = styled.button`
  position: absolute;
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.buttonBackgroundColor};
  background-image: url(${SearchImage});
  background-repeat: no-repeat;
  background-size: 4.375rem;
  color: #ffffff;
  border: none;
  border-radius: 4rem;
  transition: background-image 0.2s ease;
  left: 5rem;
  cursor: pointer;
  /* font-size: 14px; */

  &:hover {
    /* background-color: #0056b3; */
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
    <SearchContainer>
      <form onSubmit={handleSearch}>
        <SearchInput type="text" name="searchTerm" placeholder="Search" borderColor={Red} />
        <SearchButton type="submit" buttonBackgroundColor={White} />
      </form>
    </SearchContainer>
  );
};

export default Search;

// 아래는 component 사용법 예시

// const App = () => {
//     const handleSearch = (searchTerm) => {
//       console.log('검색어:', searchTerm);
//       // 검색 기능 구현 로직 작성
//     };

//     return (
//       <div>
//         <SearchComponent onSearch={handleSearch} />
//       </div>
//     );
//   };

//   export default App;
