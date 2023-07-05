import React from "react";
import TestBtn from "../components/BaseComponents/Button";
import TestDropDown from "../components/BaseComponents/DropDown";
import TestSearch from "../components/BaseComponents/Search";
import TestSideMenu from "../components/BaseComponents/SideMenu";
import TestBackgroundImage from "../components/BaseComponents/BackgroundImages";

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

function dashboard() {
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
      <TestBtn width="200px" height="40px" border="1px solid black">
        TestBtn
      </TestBtn>
      <TestDropDown options={options} onSelect={handleOptionSelect} />
      <TestSearch onSearch={handleSearch} />
      <TestSideMenu menuItems={menuItems} onItemClick={handleItemClick} />
      <TestBackgroundImage color="fire" />
    </div>
  );
}

export default dashboard;
