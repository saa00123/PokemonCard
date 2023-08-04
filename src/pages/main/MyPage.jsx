import React from "react";
import Header from "../../components/BaseComponents/Header";
import Color from "../../components/BaseComponents/Color";
import Div from "../../components/BaseComponents/BasicDiv";
import Preview from "../../components/ImageComponents/SmallCardPreview";
import EndPreview from "../../components/ImageComponents/SmallEndAuction";

const MyPage = () => {
  const Gray2 = Color({ color: "Gray2" });
  const White = Color({ color: "Default" });
  return (
    <Div className="MainContainer">
      <Header />
      <Div>
        <Div
          className="WelcomeUser"
          width="fit-content"
          height="fit-content"
          margin="2rem 0 0 2rem"
          fontsize="4rem"
          fontWeight="bold"
          color={Gray2}
          notebookfontsize="2.5rem"
        >
          apple134 님, 환영합니다
        </Div>
        <Div
          className="BidListContainer"
          width="fit-content"
          height="fit-content"
          margin="3rem auto 2.5rem auto"
          // border="2px solid red"
        >
          <Div
            className="BidListTitle"
            width="fit-content"
            height="fit-content"
            fontsize="2.5rem"
            fontWeight="bold"
            margin="0 0 1.875rem 0"
            color={Gray2}
            notebookfontsize="1.75rem"
          >
            입찰 내역
          </Div>
          <Div
            className="MainBidListContainer"
            width="fit-content"
            height="fit-content"
            backgroundcolor={White}
            boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
            display="grid"
            gridtemplatecolumns="repeat(4, 1fr)"
          >
            <EndPreview />
            <EndPreview />
            <EndPreview />
            <EndPreview />
            <EndPreview />
            <EndPreview />
            <EndPreview />
          </Div>
          <Div
            className="Paging"
            width="fit-content"
            fontsize="2rem"
            fontWeight="700"
            margin=" 1.5rem auto 0 auto"
            notebookfontsize="1.5rem"
          >
            {"<"} 1 2 3 4 5 6 {">"}
          </Div>
        </Div>
        <Div
          className="SaleListContainer"
          width="fit-content"
          height="fit-content"
          margin="0rem auto 4rem auto"
          // border="2px solid red"
        >
          <Div
            className="SaleListTitle"
            width="fit-content"
            height="fit-content"
            fontsize="2.5rem"
            fontWeight="bold"
            margin="0 0 1.875rem 0"
            color={Gray2}
            notebookfontsize="1.75rem"
          >
            판매 내역
          </Div>
          <Div
            className="MainSaleListContainer"
            width="fit-content"
            height="fit-content"
            backgroundcolor={White}
            boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
            display="grid"
            gridtemplatecolumns="repeat(4, 1fr)"
          >
            <EndPreview />
            <Preview />
            <EndPreview />
            <EndPreview />
            <Preview />
            <EndPreview />
            <EndPreview />
          </Div>
          <Div
            className="Paging"
            width="fit-content"
            fontsize="2rem"
            fontWeight="700"
            margin=" 1.5rem auto 0 auto"
            notebookfontsize="1.5rem"
          >
            {"<"} 1 2 3 4 5 6 {">"}
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default MyPage;
