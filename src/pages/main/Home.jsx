import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import TestBtn from "../../components/BaseComponents/Button";
import TestDropDown from "../../components/BaseComponents/DropDown";
import TestSearch from "../../components/BaseComponents/Search";
import TestSideMenu from "../../components/BaseComponents/SideMenu";
import TestInput from "../../components/BaseComponents/Input";

const options = [
  { id: 1, label: "최신순" },
  { id: 2, label: "마감순" },
  { id: 3, label: "높은 가격순" },
  { id: 4, label: "낮은 가격순" },
  { id: 5, label: "높은 등급순" },
  { id: 6, label: "낮은 등급순" },
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
    <Provider store={store}>
      <TestBtn width="12.5rem" height="4.063rem" border="none" borderRadius="0.937rem" fontSize="1.5rem">
        입찰하기
      </TestBtn>
      <TestDropDown options={options} onSelect={handleOptionSelect} />
      {/* <TestSearch onSearch={handleSearch} />
      <TestSideMenu menuItems={menuItems} onItemClick={handleItemClick} />
      <TestInput
        fontSize="1.625rem"
        width="21.875rem"
        height="3.75rem"
        borderRadius="0.937rem"
        placeholder="비밀번호를 입력하시오"
      /> */}
    </Provider>
  );
};

export default Home;
