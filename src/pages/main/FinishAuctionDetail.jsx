import React from "react";
import styled from "styled-components";
import Header from "../../components/BaseComponents/Header";
import Div from "../../components/BaseComponents/BasicDiv";
import Color from "../../components/BaseComponents/Color";
import Input from "../../components/BaseComponents/Input";
import Button from "../../components/BaseComponents/Button";
import Send from "../../images/Send.png";
import SendHover from "../../images/SendHover.png";

const SendImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${Send});
  background-repeat: no-repeat;
  background-size: 2.5rem 2.5rem;
  &:hover {
    background-image: url(${SendHover});
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 1.3rem;
    height: 1.3rem;
    background-size: 1.1rem 1.3rem;
  }
`;

function FinishAuctionDetail() {
  const Default = Color({ color: "Default" });
  const Red = Color({ color: "Red" });
  const Gray1 = Color({ color: "Gray1" });

  return (
    <Div className="MainContainer">
      <Header />
      <Div
        className="FinishAuctionContainer"
        display="flex"
        justifycontent="center"
        alignitems="center"
        margin="auto"
        padding="5rem 0 0 0"
        width="102.563rem"
        height="43.125rem"
        notebookflexdirection="column"
        notebookwidth="47.938rem"
        notebookheight="41.2rem"
        notebookpadding="2rem 0 2rem 0"
      >
        <Div
          className="FinishAuctionMainContainer"
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
              className="DateAndSellerContainer"
              display="flex"
              justifycontent="between"
              alignitems="center"
              margin="0.688rem 0 0 0"
              width="39.438rem"
              notebookwidth="27.438rem"
              notebookmargin="0.25rem 0 0 0"
            >
              <Div
                className="StartDateAndEndDate"
                display="flex"
                flexdirection="column"
                justifycontent="start"
                alignitems="center"
                width="15rem"
                height="3.75rem"
                notebookwidth="8.625rem"
                notebookheight="2rem"
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
                  className="EndDate"
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
                  종료일 : 2023.07.22 00:21:00
                </Div>
              </Div>
              <Div
                className="SellerAndBuyer"
                display="flex"
                flexdirection="column"
                justifycontent="start"
                alignitems="start"
                width="fit-content"
                height="3.75rem"
                margin="0 0 0 auto"
                notebookheight="2rem"
              >
                <Div
                  className="Seller"
                  display="flex"
                  justifycontent="start"
                  alignitems="center"
                  width="fit-content"
                  height="1.875rem"
                  color={Gray1}
                  notebookheight="1rem"
                  notebookfontsize="0.563rem"
                >
                  판매자 : apple134
                </Div>
                <Div
                  className="Buyer"
                  display="flex"
                  justifycontent="start"
                  alignitems="center"
                  width="fit-content"
                  height="1.875rem"
                  color={Gray1}
                  notebookheight="1rem"
                  notebookfontsize="0.563rem"
                >
                  낙찰자 : apple13444
                </Div>
              </Div>
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
              margin="0.5rem 0 0 0"
              notebookwidth="27.438rem"
              notebookheight="1.75rem"
              notebookmargin="-0.3rem 0 0 0"
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
              className="PresentPriceContainer"
              display="flex"
              justifycontent="end"
              alignitems="center"
              width="39.438rem"
              height="5.313rem"
              margin="6.188rem 0 0 0"
              notebookwidth="27.438rem"
              notebookheight="3rem"
              notebookmargin="3.438rem 0 0 0"
            >
              <Div
                className="AuctionPriceTitle"
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
                낙찰가
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
          className="ChatContainer"
          display="flex"
          flexdirection="column"
          justifycontent="center"
          alignitems="center"
          width="30rem"
          height="43.125rem"
          margin="0 0 0 1.313rem"
          boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
          backgroundcolor={Default}
          notebookwidth="47.938rem"
          notebookheight="15rem"
          notebookmargin="0.813rem 0 0 0"
        >
          <Div
            className="ChatLogContainer"
            display="flex"
            flexdirection="column"
            justifycontent="start"
            alignitems="start"
            width="25.374rem"
            height="36rem"
            margin="2rem 2.313rem"
            overflowy="auto"
            notebookwidth="44.812rem"
            notebookheight="11.374rem"
            notebookmargin="0.938rem 1.563rem"
          >
            <Div
              className="ChatLog"
              width="25.374rem"
              height="5rem"
              borderbottom={`solid 1px ${Gray1}`}
              notebookwidth="44.812rem"
              notebookheight="3.5rem"
            >
              <Div
                className="Nickname"
                width="fit-content"
                height="1.875rem"
                borderbottom={`solid 0.188rem ${Red}`}
                fontsize="1.25rem"
                margin="0.3rem 0 0 0"
                notebookheight="1.313rem"
                notebookfontsize="0.875rem"
              >
                apple134
              </Div>
              <Div
                className="ChatMainContainer"
                display="flex"
                justifycontent="start"
                alignitems="center"
                width="fit-content"
                height="2.5rem"
                fontsize="1rem"
                notebookheight="1.5rem"
                notebookfontsize="0.75rem"
              >
                안녕하세요
              </Div>
            </Div>
            <Div
              className="ChatLog"
              width="25.374rem"
              height="5rem"
              borderbottom={`solid 1px ${Gray1}`}
              notebookwidth="44.812rem"
              notebookheight="3.5rem"
            >
              <Div
                className="Nickname"
                width="fit-content"
                height="1.875rem"
                borderbottom={`solid 0.188rem ${Red}`}
                fontsize="1.25rem"
                margin="0.3rem 0 0 0"
                notebookheight="1.313rem"
                notebookfontsize="0.875rem"
              >
                apple134
              </Div>
              <Div
                className="ChatMainContainer"
                display="flex"
                justifycontent="start"
                alignitems="center"
                width="fit-content"
                height="2.5rem"
                fontsize="1rem"
                notebookheight="1.5rem"
                notebookfontsize="0.75rem"
              >
                안녕하세요
              </Div>
            </Div>
          </Div>
          <Div
            className="ChatInputContainer"
            display="flex"
            justifycontent="center"
            alignitems="center"
            width="30rem"
            height="3.125rem"
            border={`solid 1px ${Gray1}`}
            notebookwidth="47.938rem"
            notebookheight="1.75rem"
          >
            <Input
              className="ChatInput"
              placeholder="댓글을 입력하세요"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="26.875rem"
              height="3.125rem"
              fontsize="1.25rem"
              border="none"
              notebookwidth="46.188rem"
              notebookheight="1.75rem"
              notebookfontsize="0.875rem"
              notebookborder="none"
            />
            <Button
              className="ChatBtn"
              type="submit"
              width="3.125rem"
              height="3.125rem"
              border="none"
              notebookwidth="1.75rem"
              notebookheight="1.75rem"
            >
              <SendImage />
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

export default FinishAuctionDetail;
