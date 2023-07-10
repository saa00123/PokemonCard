import React from "react";
import styled from "styled-components";

const SideMenuContainer = styled.div`
  width: 200px;
  background-color: #f1f1f1;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #dddddd;
  }
`;

const SideMenu = ({ menuItems, onItemClick }) => (
  <SideMenuContainer>
    {menuItems.map((item) => (
      <MenuItem key={item.id} onClick={() => onItemClick(item.id)}>
        {item.name}
      </MenuItem>
    ))}
  </SideMenuContainer>
);

export default SideMenu;

// 아래는 component 사용법 예시

// const App = () => {
//     const menuItems = [
//       { id: 1, name: '전체' },
//       { id: 2, name: '화이트' },
//       { id: 3, name: '블루' },
//       { id: 4, name: '레드' },
//       // 추가적인 메뉴 아이템들...
//     ];

//     const handleItemClick = (itemId) => {
//       console.log('메뉴 아이템 클릭:', itemId);
//       // 메뉴 클릭에 따른 동작 구현 로직 작성
//     };

//     return (
//       <div>
//         <SideMenu menuItems={menuItems} onItemClick={handleItemClick} />
//       </div>
//     );
//   };

//   export default App;
