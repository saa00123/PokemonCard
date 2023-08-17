import React from "react";
import Header from "../../components/BaseComponents/Header";
import Color from "../../components/BaseComponents/Color";
import Div from "../../components/BaseComponents/BasicDiv";
import Preview from "../../components/ImageComponents/SmallCardPreview";
import DropDown from "../../components/BaseComponents/DropDown";
import GridButton from "../../components/SortButton/GridButton";
import ListButton from "../../components/SortButton/ListButton";

const Home = () => {
  const Gray2 = Color({ color: "Gray2" });
  const White = Color({ color: "Default" });

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
          <Div
            className="OptionContainer"
            height="fit-content"
            display="flex"
            // border="2px blue solid"
            margin="auto 0 auto auto"
          >
            <GridButton />
            <ListButton margin="0 0 0 4px" />
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
          display="grid"
          gridtemplatecolumns="repeat(4, 1fr)"
        >
          <Preview />
        </Div>
        <Div
          className="Paging"
          width="fit-content"
          fontsize="2rem"
          fontWeight="700"
          margin=" 1.5rem auto 3rem auto"
          notebookfontsize="1.5rem"
        >
          {"<"} 1 2 3 4 5 6 {">"}
        </Div>
      </Div>
    </Div>
  );
};

export default Home;
