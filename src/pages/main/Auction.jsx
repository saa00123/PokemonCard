import React from "react";
import { useNavigate } from "react-router-dom";
import Div from "../../components/BaseComponents/BasicDiv";
import Color from "../../components/BaseComponents/Color";
import Button from "../../components/BaseComponents/Button";
import Header from "../../components/BaseComponents/Header";

function Auction() {
  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Gray1 = Color({ color: "Gray1" });

  return (
    <Div className="MainContainer">
      <Header />
      <Div
        className="AuctionContainer"
        display="flex"
        justifycontent="center"
        alignitems="center"
        margin="auto"
        padding="5rem 0 0 0"
        width="100.688rem"
        height="43.125rem"
        notebookwidth="61.313rem"
        notebookheight="25.375rem"
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
          notebookwidth="47.938rem"
          notebookheight="25.375rem"
        >
          <Div
            className="UploadImageContainer"
            width="24.125rem"
            height="37.5rem"
            border="solid 1px"
            notebookwidth="15.625rem"
            notebookheight="20.813rem"
          />
          <Div
            className="AuctionDetailContainer"
            display="flex"
            flexdirection="column"
            justifycontent="start"
            alignitems="center"
            width="39.438rem"
            height="39.188rem"
            margin="0 0 0 2rem"
            notebookwidth="27.438rem"
            notebookheight="22.374rem"
            notebookmargin="0 0 0 1.563rem"
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
              notebookwidth="27.438rem"
              notebookheight="2.5rem"
              notebookfontsize="1.5rem"
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
              notebookwidth="27.438rem"
              notebookheight="1rem"
              notebookmargin="0.25rem 0 0 0"
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
                notebookwidth="8.625rem"
                notebookheight="1rem"
                notebookfontsize="0.563rem"
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
                notebookwidth="18.813rem"
                notebookheight="1rem"
                notebookfontsize="0.563rem"
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
              notebookwidth="27.438rem"
              notebookheight="1rem"
              notebookfontsize="0.563rem"
            >
              종료일 : 2023.07.22 00:21:00
            </Div>
            <Div
              className="CardInformation"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="39.438rem"
              height="2.5rem"
              margin="1.8rem 0 0 0"
              notebookwidth="27.438rem"
              notebookheight="1.625rem"
              notebookmargin="0.875rem 0 0 0"
            >
              <Div
                className="Toploader"
                display="flex"
                justifycontent="center"
                alignitems="center"
                width="6.25rem"
                height="2.5rem"
                fontsize="1.25rem"
                border="solid 2px #000"
                borderradius="5px"
                margin="0 1rem 0 0"
                notebookwidth="3.5rem"
                notebookheight="1.625rem"
                notebookfontsize="0.75rem"
                notebookborder="solid 1px #000"
                notebookborderradius="5px"
                notebookmargin="0 0.188rem 0 0"
              >
                탑로더 X
              </Div>
              <Div
                className="CardRating"
                display="flex"
                justifycontent="center"
                alignitems="center"
                width="3.375rem"
                height="2.5rem"
                fontsize="1.25rem"
                border="solid 2px #000"
                borderradius="5px"
                margin="0 1rem 0 0"
                notebookwidth="2.188rem"
                notebookheight="1.625rem"
                notebookfontsize="0.75rem"
                notebookborder="solid 1px #000"
                notebookborderradius="5px"
                notebookmargin="0 0.188rem 0 0"
              >
                RRR
              </Div>
              <Div
                className="CardSeries"
                display="flex"
                justifycontent="start"
                alignitems="center"
                width="fit-content"
                height="2.5rem"
                fontsize="1.25rem"
                border="solid 2px #000"
                borderradius="5px"
                padding="0 1rem"
                notebookwidth="fit-content"
                notebookheight="1.625rem"
                notebookfontsize="0.75rem"
                notebookborder="solid 1px #000"
                notebookborderradius="5px"
                notebookpadding="0 0.313rem"
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
              notebookwidth="27.438rem"
              notebookheight="1.75rem"
              notebookmargin="0.813rem 0 0 0"
            >
              <Div
                className="OnlineTrading"
                display="flex"
                justifycontent="start"
                alignitems="center"
                width="7.5rem"
                height="2.5rem"
                fontsize="1.5rem"
                notebookwidth="4.4rem"
                notebookheight="1.75rem"
                notebookfontsize="0.875rem"
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
                notebookwidth="4rem"
                notebookheight="1.75rem"
                notebookfontsize="0.875rem"
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
              notebookwidth="27.438rem"
              notebookheight="1.75rem"
            >
              <Div
                className="OfflineTrading"
                display="flex"
                justifycontent="start"
                alignitems="center"
                width="12.5rem"
                height="2.5rem"
                fontsize="1.5rem"
                notebookwidth="7.938rem"
                notebookheight="1.75rem"
                notebookfontsize="0.875rem"
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
                notebookwidth="19.5rem"
                notebookheight="1.75rem"
                notebookfontsize="0.875rem"
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
              notebookwidth="27.438rem"
              notebookheight="1.875rem"
              notebookmargin="0.5rem 0 0 0"
            >
              <Div
                className="StartPriceTitle"
                display="flex"
                justifycontent="start"
                alignitems="center"
                width="9.375rem"
                height="3.125rem"
                fontsize="1.5rem"
                notebookwidth="3.063rem"
                notebookheight="1.875rem"
                notebookfontsize="0.875rem"
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
                notebookwidth="11.75rem"
                notebookheight="1.875rem"
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
                  notebookwidth="10rem"
                  notebookheight="1.875rem"
                  notebookfontsize="1.375rem"
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
                  notebookwidth="1rem"
                  notebookheight="1.875rem"
                  notebookfontsize="0.875rem"
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
              notebookwidth="27.438rem"
              notebookheight="1.875rem"
            >
              <Div
                className="BidUnitTitle"
                display="flex"
                justifycontent="start"
                alignitems="center"
                width="9.375rem"
                height="3.125rem"
                fontsize="1.5rem"
                notebookwidth="3.813rem"
                notebookheight="1.875rem"
                notebookfontsize="0.875rem"
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
                notebookwidth="11rem"
                notebookheight="1.875rem"
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
                  notebookwidth="9.5rem"
                  notebookheight="1.875rem"
                  notebookfontsize="1.375rem"
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
                  notebookwidth="1rem"
                  notebookheight="1.875rem"
                  notebookfontsize="0.875rem"
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
              notebookwidth="27.438rem"
              notebookheight="2.188rem"
              notebookmargin="1.25rem 0 0 0"
            >
              <Div
                className="TimeLimitTitle"
                display="flex"
                justifycontent="end"
                alignitems="end"
                width="9.375rem"
                height="3.125rem"
                fontsize="1.5rem"
                notebookwidth="4.625rem"
                notebookheight="2.188rem"
                notebookfontsize="0.875rem"
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
                notebookwidth="9.5rem"
                notebookheight="2.188rem"
                notebookfontsize="1.375rem"
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
              notebookwidth="27.438rem"
              notebookheight="3rem"
            >
              <Div
                className="PresentPriceTitle"
                display="flex"
                justifycontent="start"
                alignitems="end"
                width="5.5rem"
                height="5.313rem"
                fontsize="2rem"
                notebookwidth="5.188rem"
                notebookheight="3rem"
                notebookfontsize="1.375rem"
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
                notebookwidth="12.5rem"
                notebookheight="3rem"
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
                  notebookwidth="11rem"
                  notebookheight="3rem"
                  notebookfontsize="1.875rem"
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
                  notebookwidth="1.5rem"
                  notebookheight="3rem"
                  notebookfontsize="1.375rem"
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
    </Div>
  );
}

export default Auction;
