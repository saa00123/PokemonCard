/* eslint-disable no-plusplus */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firestore from "../../Firebase/firestore";
import Header from "../../components/BaseComponents/Header";
import Color from "../../components/BaseComponents/Color";
import Div from "../../components/BaseComponents/BasicDiv";
import Button from "../../components/BaseComponents/Button";
import Preview from "../../components/ImageComponents/SmallCardPreview";
import DropDown from "../../components/BaseComponents/DropDown";
import GridButton from "../../components/SortButton/GridButton";
import ListButton from "../../components/SortButton/ListButton";

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/Auction/${id}`);
  };

  const Gray2 = Color({ color: "Gray2" });
  const White = Color({ color: "Default" });
  const Red = Color({ color: "Red" });

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        const querySnapshot = await firestore.collection("CardRegistration").get();
        const cardData = [];
        querySnapshot.forEach((doc) => {
          cardData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCards(cardData);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchAllCards();
  }, []);

  /** 페이징 */
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 16;

  const indexOfLastCard = currentPage * perPage;
  const indexOfFirstCard = indexOfLastCard - perPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);
  const handleNextPage = () => {
    if (currentPage < Math.ceil(cards.length / perPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cards.length / perPage); i++) {
    pageNumbers.push(i);
  }

  /** 정렬 */
  const [viewMode, setViewMode] = useState("grid");

  return (
    <Div className="MainContainer">
      <Header />
      <Div className="HomeContainer" width="fit-content" height="fit-content" margin="2rem auto">
        <Div className="TopContainer" display="flex">
          <Div
            className="MainTitle"
            width="13.75rem"
            height="6.25rem"
            color={Gray2}
            fontsize="2.5rem"
            fontWeight="bold"
            display="flex"
            alignitems="center"
            notebookwidth="9.125rem"
            notebookheight="4.875rem"
            notebookfontsize="1.75rem"
          >
            검색 결과
          </Div>
          <Div className="OptionContainer" height="fit-content" display="flex" margin="auto 0 auto auto">
            <GridButton isActive={viewMode === "grid"} onClick={() => setViewMode("grid")} />
            <ListButton isActive={viewMode === "list"} margin="0 0 0 4px" onClick={() => setViewMode("list")} />
          </Div>
          <DropDown
            margin="auto 0 auto 0.5rem"
            width="11.25rem"
            height="3.125rem"
            buttonwidth="9.375rem"
            buttonheight="3.125rem"
            buttonfontsize="1.25rem"
            menuwidth="11.25rem"
            menufontsize="1.25rem"
            borderradius="15px"
            notebookwidth="7.5rem"
            notebookheight="2.375rem"
            notebookbuttonwidth="6.25rem"
            notebookbuttonheight="2.375ßßrem"
            notebookbuttonfontsize="0.875rem"
            notebookmenuwidth="7.5rem"
            notebookmenuheight="11.7rem"
            notebookmenufontsize="0.875rem"
            notebookborderradius="10px"
            options={[
              { id: 1, label: "낮은 등급순" },
              { id: 2, label: "마감순" },
              { id: 3, label: "높은 가격순" },
              { id: 4, label: "낮은 가격순" },
              { id: 5, label: "높은 등급순" },
              { id: 6, label: "낮은 등급순" },
            ]}
          />
        </Div>
        <Div
          className="HomeMainContainer"
          width="fit-content"
          height="fit-content"
          backgroundcolor={White}
          boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
          display={viewMode === "grid" ? "grid" : "flex"}
          flexdirection={viewMode === "list" ? "column" : "row"}
          gridtemplatecolumns={viewMode === "grid" ? "repeat(4, 1fr)" : "none"}
        >
          {currentCards.map((card) => (
            <Preview
              key={card.id}
              card={card}
              isListView={viewMode === "list"}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </Div>
        <Div
          className="Paging"
          width="fit-content"
          fontsize="2rem"
          fontWeight="700"
          margin=" 1.5rem auto 3rem auto"
          notebookfontsize="1.5rem"
        >
          <Button
            type="button"
            width="fit-content"
            fontsize="2rem"
            fontWeight="700"
            border="none"
            backgroundcolor="none"
            color="#000"
            margin=" 1.5rem auto 3rem auto"
            notebookfontsize="1.5rem"
            notebookborder="none"
            notebookbackgroundcolor="none"
            notebookcolor="#000"
            onClick={handlePrevPage}
          >
            {"<"}
          </Button>
          {pageNumbers.map((number) => (
            <Button
              type="button"
              className={number === currentPage ? "paging-button active" : "paging-button"}
              width="fit-content"
              fontsize="2rem"
              fontWeight="700"
              border="none"
              backgroundcolor="none"
              color={number === currentPage ? Red : "#000"}
              margin=" 1.5rem auto 3rem auto"
              notebookfontsize="1.5rem"
              notebookborder="none"
              notebookbackgroundcolor="none"
              notebookcolor={number === currentPage ? Red : "#000"}
              key={number}
              onClick={() => handlePageClick(number)}
            >
              {number}
            </Button>
          ))}
          <Button
            type="button"
            width="fit-content"
            fontsize="2rem"
            fontWeight="700"
            border="none"
            backgroundcolor="none"
            color="#000"
            margin=" 1.5rem auto 3rem auto"
            notebookfontsize="1.5rem"
            notebookborder="none"
            notebookbackgroundcolor="none"
            notebookcolor="#000"
            onClick={handleNextPage}
          >
            {">"}
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default Home;
