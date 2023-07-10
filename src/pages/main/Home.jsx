import React from "react";
<<<<<<< Updated upstream:src/pages/main/Home.jsx
import TestBtn from "../../components/BaseComponents/Button";
import TestDropDown from "../../components/BaseComponents/DropDown";
import TestSearch from "../../components/BaseComponents/Search";
import TestSideMenu from "../../components/BaseComponents/SideMenu";
=======
import TestBtn from "../components/BaseComponents/Button";
import TestDropDown from "../components/BaseComponents/DropDown";
import TestSearch from "../components/BaseComponents/Search";
import TestSideMenu from "../components/BaseComponents/SideMenu";
import Color from "../components/BaseComponents/Color";
>>>>>>> Stashed changes:PokemonCardAuction/src/pages/Home.jsx

const options = [
  { id: 1, label: "최신순" },
  { id: 2, label: "가격낮은순" },
  { id: 3, label: "가격높은순" },
  { id: 4, label: "등급높은순" },
  { id: 5, label: "등급낮은순" },
];

const menuItems = [
  { id: 1, name: "전체" },
  { id: 2, name: "화이트" },
  { id: 3, name: "블루" },
  { id: 4, name: "레드" },
];

const Home = () => {
  const handleOptionSelect = (option) => {
    console.log("옵션 선택: ", option);
  };

  const handleSearch = (searchTerm) => {
    console.log("검색어: ", searchTerm);
  };

  const handleItemClick = (itemId) => {
    console.log("메뉴 아이템 클릭: ", itemId);
  };
  return (
    <div>
      <TestBtn width="12.5rem" height="4.063rem" border="none" borderRadius="0.937rem" fontSize="1.5rem">
        입찰하기
      </TestBtn>
      <TestDropDown options={options} onSelect={handleOptionSelect} />
      <TestSearch onSearch={handleSearch} borderRadius="0.937rem" />
      <TestSideMenu menuItems={menuItems} onItemClick={handleItemClick} />
    </div>
  );
};

export default Home;
