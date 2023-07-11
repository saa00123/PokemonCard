import React from "react";
import styled from "styled-components";
import Color from "./Color";
import SearchImage from "../../images/SearchImage.png";
import HoverSearchImage from "../../images/HoverSearchImage.png";

const SearchContainer = styled.div`
  align-items: center;
  width: 50rem;
  height: 4.375rem;
  display: flex;
`;

const SearchInputContainer = styled.div`
  width: 50rem;
  height: 4.375rem;
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
  outline: none;
`;

const SearchButtonContainer = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  margin-left: 46rem;
  margin-top: -4rem;
`;

const SearchButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${(props) => props.buttonBackgroundColor};
  background-image: url(${SearchImage});
  background-repeat: no-repeat;
  background-size: 4.375rem;
  background-position: center;
  border: none;
  border-radius: 4rem;
  transition: background-image 0.2s ease;
  cursor: pointer;

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
    <SearchContainer>
      <form onSubmit={handleSearch}>
        <SearchInputContainer>
          <SearchInput type="text" name="searchTerm" spellCheck="false" placeholder="Search" borderColor={Red} />
        </SearchInputContainer>
        <SearchButtonContainer>
          <SearchButton type="submit" buttonBackgroundColor={White} />
        </SearchButtonContainer>
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
