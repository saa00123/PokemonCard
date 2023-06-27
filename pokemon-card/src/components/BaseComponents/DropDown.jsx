import React, { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #f1f1f1;
  color: #333;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f1f1f1;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
`;

const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #dddddd;
  }
`;

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>분류</DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownMenuItem key={option.id} onClick={() => handleOptionClick(option)}>
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

// 아래는 component 사용법 예시

// const App = () => {
//     const options = [
//       { id: 1, label: '최신순' },
//       { id: 2, label: '가격낮은순' },
//       { id: 3, label: '가격높은순' },
//       // 추가적인 옵션들...
//     ];

//     const handleOptionSelect = (option) => {
//       console.log('옵션 선택:', option);
//       // 선택된 옵션에 따른 동작 구현 로직 작성
//     };

//     return (
//       <div>
//         <Dropdown options={options} onSelect={handleOptionSelect} />
//       </div>
//     );
//   };

//   export default App;
