import React from "react";
import { useNavigate } from "react-router-dom";
import Div from "../../components/BaseComponents/BasicDiv";
import Color from "../../components/BaseComponents/Color";
import Button from "../../components/BaseComponents/Button";

function Auction() {
  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Gray1 = Color({ color: "Gray1" });

  return (
    <Div
      className="AuctionContainer"
      display="flex"
      justifycontent="center"
      alignitems="center"
      margin="auto"
      padding="5rem 0 0 0"
      width="100.688rem"
      height="43.125rem"
    >
      <Div
        className="AuctionMainContainer"
        display="flex"
        justifycontent="center"
        alignitems="center"
        width="71.25rem"
        height="43.125rem"
        boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
        backgroundcolor={Default}
      >
        <Div className="UploadImageContainer" width="24.125rem" height="37.5rem" border="solid 1px" />
        <Div
          className="AuctionDetailContainer"
          display="flex"
          flexdirection="column"
          justifycontent="start"
          alignitems="center"
          width="39.438rem"
          height="39.188rem"
          margin="0 0 0 2rem"
        >
          <Div
            className="AuctionTitle"
            display="flex"
            justifycontent="start"
            alignitems="center"
            width="39.438rem"
            height="4.688rem"
            fontsize="2.25rem"
            borderbottom="solid 0.188rem"
          >
            마샤도 싸게 가져가세요
          </Div>
          <Div
            className="StartDateAndSeller"
            display="flex"
            justifycontent="between"
            alignitems="center"
            width="39.438rem"
            height="1.875rem"
            margin="0.688rem 0 0 0"
          >
            <Div
              className="StartDate"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="15rem"
              height="1.875rem"
              fontsize="1rem"
              color={Gray1}
            >
              시작일 : 2023.07.19 00:09:00
            </Div>
            <Div
              className="Seller"
              display="flex"
              justifycontent="end"
              alignitems="center"
              width="15.938rem"
              height="1.875rem"
              color={Gray1}
              margin="0 0 0 auto"
            >
              판매자 : apple134
            </Div>
          </Div>
          <Div
            className="EndDate"
            display="flex"
            justifycontent="start"
            alignitems="center"
            width="39.438rem"
            height="1.875rem"
            fontsize="1rem"
            color={Gray1}
          >
            종료일 2023.07.22 00:21:00
          </Div>
          <Div
            className="CardInformation"
            display="flex"
            justifycontent="start"
            alignitems="center"
            width="39.438rem"
            height="2.5rem"
            margin="1.8rem 0 0 0"
          >
            <Div
              className="CardRating"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="4.375rem"
              height="2.5rem"
              fontsize="1.5rem"
            >
              RRR
            </Div>
            <Div
              className="Toploader"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="6.25rem"
              height="2.5rem"
              fontsize="1.5rem"
            >
              탑로더 X
            </Div>
            <Div
              className="CardSeries"
              display="flex"
              justifycontent="start"
              alignitems="center"
              height="2.5rem"
              fontsize="1.5rem"
            >
              [S5a] 쌍벽의 파이터
            </Div>
          </Div>
          <Div
            className="OnlineTradingPossibility"
            display="flex"
            justifycontent="start"
            alignitems="center"
            width="39.438rem"
            height="1.875rem"
            margin="1.8rem 0 0 0"
          >
            <Div
              className="OnlineTrading"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="7.5rem"
              height="2.5rem"
              fontsize="1.5rem"
            >
              온라인 거래
            </Div>
            <Div
              className="Possiblity"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="4rem"
              height="2.5rem"
              fontsize="1.5rem"
            >
              가능
            </Div>
          </Div>
          <Div
            className="OfflineTradingPossibility"
            display="flex"
            justifycontent="start"
            alignitems="center"
            width="39.438rem"
            height="1.875rem"
          >
            <Div
              className="OfflineTrading"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="12.5rem"
              height="2.5rem"
              fontsize="1.5rem"
            >
              오프라인 거래 장소 :
            </Div>
            <Div
              className="Possiblity"
              display="flex"
              justifycontent="start"
              alignitems="center"
              height="2.5rem"
              fontsize="1.5rem"
            >
              강동구 천호동 피의 사거리
            </Div>
          </Div>
          <Div
            className="StartPriceContainer"
            display="flex"
            justifycontent="start"
            alignitems="center"
            width="39.438rem"
            height="3.125rem"
            margin="1.8rem 0 0 0"
          >
            <Div
              className="StartPriceTitle"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="9.375rem"
              height="3.125rem"
              fontsize="1.5rem"
            >
              시작가
            </Div>
            <Div
              className="StartPriceContainer"
              display="flex"
              justifycontent="end"
              alignitems="center"
              width="13.75rem"
              height="3.125rem"
            >
              <Div
                className="StartPirce"
                display="flex"
                justifycontent="end"
                alignitems="end"
                width="12.75rem"
                height="3.125rem"
                fontsize="2rem"
                fontWeight="bold"
              >
                9,000,000
              </Div>
              <Div
                className="StartPirceUnit"
                display="flex"
                justifycontent="end"
                alignitems="end"
                width="2rem"
                height="3.125rem"
                fontsize="1.5rem"
              >
                원
              </Div>
            </Div>
          </Div>
          <Div
            className="BidUnitContainer"
            display="flex"
            justifycontent="start"
            alignitems="center"
            width="39.438rem"
            height="3.125rem"
          >
            <Div
              className="BidUnitTitle"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="9.375rem"
              height="3.125rem"
              fontsize="1.5rem"
            >
              입찰단위
            </Div>
            <Div
              className="BidContainer"
              display="flex"
              justifycontent="end"
              alignitems="center"
              width="13.75rem"
              height="3.125rem"
            >
              <Div
                className="BidUnitPrice"
                display="flex"
                justifycontent="end"
                alignitems="end"
                width="12.75rem"
                height="3.125rem"
                fontsize="2rem"
                fontWeight="bold"
              >
                10,000
              </Div>
              <Div
                className="BidUnit"
                display="flex"
                justifycontent="end"
                alignitems="end"
                width="2rem"
                height="3.125rem"
                fontsize="1.5rem"
              >
                원
              </Div>
            </Div>
          </Div>
          <Div
            className="TimeLimitContainer"
            display="flex"
            justifycontent="end"
            alignitems="center"
            width="39.438rem"
            height="3.125rem"
            margin="3.063rem 0 0 0"
          >
            <Div
              className="TimeLimitTitle"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="9.375rem"
              height="3.125rem"
              fontsize="1.5rem"
            >
              남은시간
            </Div>
            <Div
              className="TimeLimit"
              display="flex"
              justifycontent="end"
              alignitems="end"
              width="12.75rem"
              height="3.125rem"
              fontsize="2.5rem"
              fontWeight="bold"
            >
              24 : 03 : 12
            </Div>
          </Div>
          <Div
            className="PresentPriceContainer"
            display="flex"
            justifycontent="end"
            alignitems="center"
            width="39.438rem"
            height="5.313rem"
          >
            <Div
              className="PresentPriceTitle"
              display="flex"
              justifycontent="start"
              alignitems="end"
              width="5.5rem"
              height="5.313rem"
              fontsize="2rem"
            >
              현재가
            </Div>
            <Div
              className="PriceContainer"
              display="flex"
              justifycontent="end"
              alignitems="center"
              width="22.125rem"
              height="5.313rem"
            >
              <Div
                className="PresentPrice"
                display="flex"
                justifycontent="end"
                alignitems="end"
                width="20.125rem"
                height="5.313rem"
                fontsize="3.75rem"
                fontWeight="bold"
              >
                9,000,000
              </Div>
              <Div
                className="PriceUnit"
                display="flex"
                justifycontent="end"
                alignitems="end"
                width="2.25rem"
                height="5.313rem"
                fontsize="2.25rem"
              >
                원
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div
        className="AuctionClickContainer"
        display="flex"
        flexdirection="column"
        justifycontent="center"
        alignitems="center"
        width="21.875rem"
        height="32.437rem"
        margin="0 0 0 6rem"
        notebookwidth="12.25rem"
        notebookheight="19.375rem"
        notebookmargin="0 0 0 1.125rem"
      >
        <Div
          className="RandomPokemonImage"
          display="flex"
          justifycontent="center"
          alignitems="center"
          width="18.75rem"
          height="18.75rem"
          border="solid 1px"
          notebookwidth="9.188rem"
          notebookheight="9.125rem"
        />
        <Div
          className="AuctionPriceContainer"
          display="flex"
          justifycontent="center"
          alignitems="center"
          width="21.875rem"
          height="6.25rem"
          boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
          backgroundcolor={Default}
          margin="2rem 0 1.375rem 0"
          notebookwidth="12.25rem"
          notebookheight="3.75rem"
          notebookmargin="1.813rem 0 1.125rem 0"
        >
          <Button
            className="MinusBtn"
            width="3rem"
            height="4.688rem"
            fontsize="3rem"
            border="none"
            backgroundcolor={Default}
            color="#000000"
            notebookwidth="1.688rem"
            notebookheight="3.25rem"
            notebookfontsize="1.5rem"
            notebookborder="none"
            notebookbackgroundcolor={Default}
            notebookcolor="#000000"
          >
            -
          </Button>
          <Div
            className="AuctionPrice"
            display="flex"
            justifycontent="center"
            alignitems="center"
            width="11.25rem"
            height="4.688rem"
            fontsize="2rem"
            fontWeight="bold"
            margin="0 1.188rem"
            notebookwidth="7.75rem"
            notebookheight="3.25rem"
            notebookfontsize="1.25rem"
            notebookmargin="0"
          >
            9,010,000
          </Div>
          <Button
            className="PlusBtn"
            width="3rem"
            height="4.688rem"
            fontsize="3rem"
            border="none"
            backgroundcolor={Default}
            color="#000000"
            notebookwidth="1.688rem"
            notebookheight="3.25rem"
            notebookfontsize="1.5rem"
            notebookborder="none"
            notebookbackgroundcolor={Default}
            notebookcolor="#000000"
          >
            +
          </Button>
        </Div>
        <Button
          className="AuctinoBtn"
          type="submit"
          width="12.5rem"
          height="4.063rem"
          borderradius="1rem"
          border="none"
          fontsize="1.5rem"
          notebookwidth="6rem"
          notebookheight="2.25rem"
          notebookfontsize="0.875rem"
          notebookborderradius="0.5rem"
        >
          입찰하기
        </Button>
      </Div>
    </Div>
  );
}

export default Auction;
