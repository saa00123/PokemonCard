/* eslint-disable no-return-assign */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Div from "../../components/BaseComponents/BasicDiv";
import Input from "../../components/BaseComponents/Input";
import Color from "../../components/BaseComponents/Color";
import Button from "../../components/BaseComponents/Button";
import DropDown from "../../components/BaseComponents/DropDown";
import Checkbox from "../../components/BaseComponents/Checkbox";

import CardRating from "../../components/options/CardRating";
import CardSeries from "../../components/options/CardSeries";
import NormalRating from "../../components/options/NormalRating";
import brgRating from "../../components/options/brgRating";

function CardRegistration() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 40) {
      setValue(inputValue);
    }
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };

  const MaxCharCount = 40;
  const charCount = value.length;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Gray1 = Color({ color: "Gray1" });
  const Gray2 = Color({ color: "Gray2" });
  const Gray4 = Color({ color: "Gray4" });

  return (
    <Div
      className="CardRegistrationContainer"
      display="flex"
      flexdirection="column"
      justifycontent="center"
      alignitems="start"
      margin="auto"
      padding="4.063rem 0 6.125rem 0"
      width="78.438rem"
      height="123.564rem"
      notebookwidth="61.438rem"
      notebookheight="118.375rem"
      notebookpadding="0"
    >
      <Div
        className="CardRegistrationTitle"
        display="flex"
        justifycontent="start"
        alignitems="center"
        width="13.75rem"
        height="6.25rem"
        margin="0 0 1.063rem 0"
        fontsize="2.5rem"
        fontWeight="bold"
        notebookwidth="11.25rem"
        notebookheight="4.875rem"
        notebookfontsize="1.75rem"
      >
        카드 등록
      </Div>
      <Div
        className="MainContainer"
        display="flex"
        flexdirection="column"
        justifycontent="center"
        alignitems="center"
        width="78.438rem"
        height="116.25rem"
        boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
        backgroundcolor={Default}
        notebookwidth="61.438rem"
        notebookheight="103.5rem"
      >
        <Div
          className="MainContainerCenter"
          display="flex"
          flexdirection="column"
          width="68.676rem"
          height="111.437rem"
          notebookwidth="56.438rem"
          notebookheight="98.75rem"
        >
          <Div
            className="TitleContainer"
            display="flex"
            justifycontent="center"
            alignitems="center"
            width="68.676rem"
            height="4.375rem"
            notebookwidth="56.438rem"
            notebookheight="3.125rem"
          >
            <Div
              className="Title"
              display="flex"
              justfiycontent="start"
              alignitems="center"
              width="4.563rem"
              height="4.313rem"
              margin="0 0.688rem 0 0"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
              notebookwidth="4.938rem"
              notebookheight="3.125rem"
              notebookfontsize="1.5rem"
              notebookmargin="0"
            >
              제목
            </Div>
            <Div
              className="TitleInputContainer"
              display="flex"
              width="63.625rem"
              height="4.313rem"
              padding="0 1.063rem"
              borderradius="15px"
              border={`solid 1px ${Gray1}`}
              color={Gray1}
              notebookwidth="50.5rem"
              notebookheight="3.125rem"
            >
              <Input
                className="TitleInput"
                placeholder="제목을 입력하시오."
                display="flex"
                justifycontent="center"
                alignitems="center"
                width="56.625rem"
                height="4.313rem"
                fontsize="1.625rem"
                border="none"
                value={value}
                onChange={handleChange}
                notebookwidth="51.5rem"
                notebookheight="3.125rem"
                notebookfontsize="1rem"
                notebookpadding="0 0.938rem"
              />
              <Div
                className="CharCount"
                border="2px solid blkac"
                display="flex"
                justifycontent="center"
                alignitems="center"
                width="5rem"
                height="4.313rem"
                fontsize="1.625rem"
                color={Gray1}
                notebookwidth="4.813rem"
                notebookheight="3.125rem"
                notebookfontsize="1rem"
              >{`${charCount}/${MaxCharCount}`}</Div>
            </Div>
          </Div>
          <Div
            className="CardInformationContainer"
            display="flex"
            flexdirection="column"
            width="43.439rem"
            height="8.688rem"
            margin="0.813rem 0 0 0"
            notebookwidth="37.313rem"
            notebookheight="6.875rem"
          >
            <Div
              className="CardInformationTitle"
              display="flex"
              justfiycontent="start"
              alignitems="center"
              width="8.75rem"
              height="4.313rem"
              margin="0 0.688rem 0 0"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
              notebookwidth="8.75rem"
              notebookheight="3.75rem"
              notebookfontsize="1.5rem"
              notebookmargin="0"
            >
              카드 정보
            </Div>
            <Div
              className="CardInformation"
              display="flex"
              justifycontent="center"
              alignitems="center"
              width="43.439rem"
              height="4.375rem"
              notebookwidth="37.313rem"
              notebookheight="3.125rem"
            >
              <DropDown
                className="CardRating"
                options={CardRating}
                onSelect={handleSelect}
                width="9.375rem"
                height="4.375rem"
                margin="0 0.438rem 0 0"
                buttonwidth="9.375rem"
                buttonheight="4.375rem"
                buttonfontsize="1.5rem"
                menuwidth="9.375rem"
                menufontsize="1.5rem"
                notebookwidth="7.5rem"
                notebookheight="3.125rem"
                notebookbuttonwidth="7.5rem"
                notebookbuttonheight="3.125rem"
                notebookbuttonfontsize="1.25rem"
                notebookmenuwidth="7.5rem"
                notebookmenuheight="10.125rem"
                notebookmenufontsize="1.25rem"
              />
              <DropDown
                className="CardSeries"
                options={CardSeries}
                onSelect={handleSelect}
                width="21.875rem"
                height="4.375rem"
                margin="0 1.35rem 0 0"
                buttonwidth="21.875rem"
                buttonheight="4.375rem"
                buttonfontsize="1.5rem"
                menuwidth="21.875rem"
                menufontsize="1.5rem"
                notebookwidth="18.75rem"
                notebookheight="3.125rem"
                notebookbuttonwidth="18.75rem"
                notebookbuttonheight="3.125rem"
                notebookbuttonfontsize="1.25rem"
                notebookmenuwidth="18.75rem"
                notebookmenuheight="10.125rem"
                notebookmenufontsize="1.25rem"
              />
              <Checkbox className="TopLoaderCheckbox" width="1.563rem" height="1.563rem">
                탑로더 유무
              </Checkbox>
            </Div>
          </Div>
          <Div
            className="ImageRegistrationContainer"
            display="flex"
            flexdirection="column"
            width="58.626rem"
            height="30.688rem"
            margin="1.813rem 0 0 0"
            notebookwidth="58.626rem"
            notebookheight="30.75rem"
          >
            <Div
              className="ImageRegistrationTitle"
              display="flex"
              justfiycontent="start"
              alignitems="center"
              width="14.563rem"
              height="4.688rem"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
              notebookwidth="14.563rem"
              notebookheight="3.75rem"
              notebookfontsize="1.5rem"
            >
              사진 등록
            </Div>
            <Div
              className="ImageContainer"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="58.626rem"
              height="28rem"
              padding="1rem 0"
              overflowx="auto"
              notebookwidth="58.626rem"
              notebookheight="27rem"
            >
              <Div
                className="ImageUpload"
                display="flex"
                justifycontent="center"
                alignitems="center"
                width="18.75rem"
                height="25rem"
                minwidth="18.75rem"
                margin="0 1.188rem 0 0"
                border="solid 1px black"
                notebookwidth="18.75rem"
                notebookheight="25rem"
              />
              <Div
                className="ImageUpload"
                display="flex"
                justifycontent="center"
                alignitems="center"
                width="18.75rem"
                height="25rem"
                minwidth="18.75rem"
                margin="0 1.188rem 0 0"
                border="solid 1px black"
                notebookwidth="18.75rem"
                notebookheight="25rem"
              />
              <Div
                className="ImageUpload"
                display="flex"
                justifycontent="center"
                alignitems="center"
                width="18.75rem"
                height="25rem"
                minwidth="18.75rem"
                margin="0 1.188rem 0 0"
                border="solid 1px black"
                notebookwidth="18.75rem"
                notebookheight="25rem"
              />
              <Div
                className="ImageUpload"
                display="flex"
                justifycontent="center"
                alignitems="center"
                width="18.75rem"
                height="25rem"
                minwidth="18.75rem"
                margin="0 1.188rem 0 0"
                border="solid 1px black"
                notebookwidth="18.75rem"
                notebookheight="25rem"
              />
            </Div>
          </Div>
          <Div
            className="RatingContainer"
            display="flex"
            flexdirection="column"
            width="41.377rem"
            height="14.001rem"
            margin="1.063rem 0 0 0"
            notebookwidth=""
          >
            <Div
              className="RatingTitle"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="4.375rem"
              height="4.688rem"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
              notebookwidth="4.375rem"
              notebookheight="3.125rem"
              notebookfontsize="1.5rem"
            >
              등급
            </Div>
            <Div
              className="RatingMainContainer"
              display="flex"
              justfiycontent="center"
              alignitems="start"
              width="41.377rem"
              height="9.313rem"
              notebookwidth="39.502rem"
              notebookheight="8.54rem"
            >
              <Div
                className="RatingCheckboxContainer"
                display="flex"
                flexdirection="column"
                width="18.001rem"
                height="9.313rem"
                notebookwidth="16.126rem"
                notebookheight="5.563rem"
              >
                <Div
                  className="NormalRatingCheckboxContainer"
                  display="flex"
                  justifycontent="start"
                  alignitems="center"
                  width="18.001rem"
                  height="3.75rem"
                  margin="0 0 1.813rem 0"
                  notebookwidth="16.126rem"
                  notebookheight="3.125rem"
                >
                  <Checkbox className="NormalRatingCheckbox" width="1.563rem" height="1.563rem">
                    일반 등급
                  </Checkbox>
                  <DropDown
                    className="NormalRating"
                    options={NormalRating}
                    onSelect={handleSelect}
                    width="8.125rem"
                    height="3.75rem"
                    margin="0 0 0 1.013rem"
                    buttonwidth="8.125rem"
                    buttonheight="3.75rem"
                    buttonfontsize="1.5rem"
                    menuwidth="8.125rem"
                    menufontsize="1.5rem"
                    notebookwidth="6.25rem"
                    notebookheight="3.125rem"
                    notebookbuttonwidth="6.25rem"
                    notebookbuttonheight="3.125rem"
                    notebookbuttonfontsize="1.25rem"
                    notebookmenuwidth="6.25rem"
                    notebookmenuheight="10.125rem"
                    notebookmenufontsize="1.25rem"
                  />
                </Div>
                <Div
                  className="NormalRatingCheckboxContainer"
                  display="flex"
                  justifycontent="start"
                  alignitems="center"
                  width="18.001rem"
                  height="3.75rem"
                  margin="0 0 1.813rem 0"
                  notebookwidth="16.126rem"
                  notebookheight="3.125rem"
                >
                  <Checkbox className="brgRatingCheckboxContainer" width="1.563rem" height="1.563rem">
                    brg 등급
                  </Checkbox>
                  <DropDown
                    className="brgRating"
                    options={brgRating}
                    onSelect={handleSelect}
                    width="8.125rem"
                    height="3.75rem"
                    margin="0 0 0 1.4rem"
                    buttonwidth="8.125rem"
                    buttonheight="3.75rem"
                    buttonfontsize="1.5rem"
                    menuwidth="8.125rem"
                    menufontsize="1.5rem"
                    notebookwidth="6.25rem"
                    notebookheight="3.125rem"
                    notebookbuttonwidth="6.25rem"
                    notebookbuttonheight="3.125rem"
                    notebookbuttonfontsize="1.25rem"
                    notebookmenuwidth="6.25rem"
                    notebookmenuheight="10.125rem"
                    notebookmenufontsize="1.25rem"
                  />
                </Div>
              </Div>
              <Div
                className="NormalRatingNotice"
                display="flex"
                flexdirection="column"
                width="22.438rem"
                height="5.938rem"
                margin="0 0 0 0.938rem"
                fontsize="1rem"
                color={Gray4}
                notebookfontsize="0.875rem"
              >
                <Div margin="none">S급 : 미세 하자 없고 탑로더에 넣어져 있음</Div>
                <Div margin="none">A급 : 미세 하자가 있지만 크게 문제가 없는 상태</Div>
                <Div margin="none">B급 : 눈으로 미세한 하자가 보임 (테두리 까짐, 기스)</Div>
                <Div margin="none">C급 : 눈으로 큰 하자가 보임 (까짐)</Div>
                <Div margin="none">D급 : 심한 하자가 보임 (찢어짐)</Div>
              </Div>
            </Div>
          </Div>
          <Div
            className="PriceContainer"
            display="flex"
            flexdirection="column"
            width="60.126rem"
            height="11.813rem"
            margin="2.063rem 0 0 0"
            notebookwidth="51.563rem"
            notebookheight="9.501rem"
          >
            <Div
              className="PriceTitle"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="4.375rem"
              height="4.688rem"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
              notebookheight="3.125rem"
              notebookfontsize="1.5rem"
            >
              가격
            </Div>
            <Div
              className="PriceMainContainer"
              display="flex"
              justfiycontent="center"
              alignitems="start"
              width="60.126rem"
              height="7.5rem"
              notebookwidth="51.563rem"
              notebookheight="5.688rem"
            >
              <Div
                className="PriceContainer"
                display="flex"
                flexdirection="column"
                width="31.25rem"
                height="7.5rem"
                notebookwidth="26.875rem"
                notebookheight="5.688rem"
              >
                <Div
                  className="StartPriceContainer"
                  display="flex"
                  width="31.25rem"
                  height="3.125rem"
                  margin="0 0 1.288rem 0"
                  notebookwidth="26.875rem"
                  notebookheight="2.5rem"
                  notebookmargin="0 0 0.688rem 0"
                >
                  <Div
                    className="StartPriceTitle"
                    display="flex"
                    justfiycontent="start"
                    alignitems="center"
                    width="9.375rem"
                    height="3.125rem"
                    fontsize="1.5rem"
                    notebookwidth="8.125rem"
                    notebookheight="2.5rem"
                    notebookfontsize="1.25rem"
                  >
                    시작가
                  </Div>
                  <Input
                    className="StartPriceInput"
                    placeholder="시작가를 입력하시오."
                    display="flex"
                    justfiycontent="start"
                    alignitems="center"
                    width="21.875rem"
                    height="3.125rem"
                    padding="0 1.313rem"
                    fontsize="1.25rem"
                    color={Gray2}
                    borderradius="10px"
                    border={`solid 1px ${Gray1}`}
                    notebookwidth="18.75rem"
                    notebookheight="2.5rem"
                    notebookfontsize="1rem"
                  />
                </Div>
                <Div className="BidUnitContainer" display="flex" width="31.25rem" height="3.125rem">
                  <Div
                    className="BidUnitTitle"
                    display="flex"
                    justfiycontent="start"
                    alignitems="center"
                    width="9.375rem"
                    height="3.125rem"
                    fontsize="1.5rem"
                    notebookwidth="8.125rem"
                    notebookheight="2.5rem"
                    notebookfontsize="1.25rem"
                  >
                    입찰 단위
                  </Div>
                  <Input
                    className="BidUnitInput"
                    placeholder="입찰 단위"
                    display="flex"
                    justfiycontent="start"
                    alignitems="center"
                    width="21.875rem"
                    height="3.125rem"
                    padding="0 1.313rem"
                    fontsize="1.25rem"
                    color={Gray2}
                    borderradius="10px"
                    border={`solid 1px ${Gray1}`}
                    notebookwidth="18.75rem"
                    notebookheight="2.5rem"
                    notebookfontsize="1rem"
                  />
                </Div>
              </Div>
              <Div
                className="NormalRatingNotice"
                display="flex"
                flexdirection="column"
                width="23.313rem"
                height="7.5rem"
                margin="0 0 0 1.063rem"
                fontsize="1rem"
                color={Gray4}
                notebookfontsize="0.875rem"
              >
                <Div margin="none">시작가 최대는 9,999,000원 입니다.</Div>
                <Div margin="none">입찰 단위는 시작가에 따라 결정됩니다.</Div>
                <Div margin="none">100~9,900 -{">"} 100원</Div>
                <Div margin="none">10,000~100,000 -{">"} 1,000원</Div>
                <Div margin="none">100,000~1,000,000 -{">"} 5,000원</Div>
                <Div margin="none">1,000,000이상 -{">"} 10,000원 </Div>
              </Div>
            </Div>
          </Div>
          <Div
            className="AuctionContainer"
            display="flex"
            flexdirection="column"
            width="60.126rem"
            height="11.813rem"
            margin="1.75rem 0 0 0"
            notebookwidth="51.563rem"
            notebookheight="9.501rem"
          >
            <Div
              className="AuctionDateTitle"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="8.063rem"
              height="4.688rem"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
              notebookwidth="8.063rem"
              notebookheight="3.125rem"
              notebookfontsize="1.5rem"
            >
              경매 일정
            </Div>
            <Div
              className="AuctionDateMainContainer"
              display="flex"
              justfiycontent="center"
              alignitems="start"
              width="60.126rem"
              height="7.5rem"
              notebookheight="3.125rem"
              notebookfontsize="1.5rem"
            >
              <Div
                className="AuctionDateContainer"
                display="flex"
                flexdirection="column"
                width="31.25rem"
                height="7.5rem"
                notebookwidth="26.875rem"
                notebookheight="5.688rem"
              >
                <Div
                  className="AuctionStartContainer"
                  display="flex"
                  width="31.25rem"
                  height="3.125rem"
                  margin="0 0 1.288rem 0"
                  notebookwidth="26.875rem"
                  notebookheight="2.5rem"
                  notebookmargin="0 0 0.688rem 0"
                >
                  <Div
                    className="AuctionStartTitle"
                    display="flex"
                    justfiycontent="start"
                    alignitems="center"
                    width="9.375rem"
                    height="3.125rem"
                    fontsize="1.5rem"
                    notebookwidth="8.125rem"
                    notebookheight="2.5rem"
                    notebookfontsize="1.25rem"
                  >
                    경매 시작일
                  </Div>
                  <Input
                    className="AuctionStartDateInput"
                    type="date"
                    placeholder="경매 시작일을 입력하시오."
                    display="flex"
                    justfiycontent="start"
                    alignitems="center"
                    width="21.875rem"
                    height="3.125rem"
                    padding="0 1.313rem"
                    fontsize="1.25rem"
                    color={Gray2}
                    borderradius="10px"
                    border={`solid 1px ${Gray1}`}
                    value={startDate}
                    onChange={handleStartDateChange}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    notebookwidth="18.75rem"
                    notebookheight="2.5rem"
                    notebookfontsize="1rem"
                  />
                </Div>
                <Div className="AuctionEndDateContainer" display="flex" width="31.25rem" height="3.125rem">
                  <Div
                    className="AuctionEndTitle"
                    display="flex"
                    justfiycontent="start"
                    alignitems="center"
                    width="9.375rem"
                    height="3.125rem"
                    fontsize="1.5rem"
                    notebookwidth="8.125rem"
                    notebookheight="2.5rem"
                    notebookfontsize="1.25rem"
                  >
                    경매 종료일
                  </Div>
                  <Input
                    className="AuctionEndDateInput"
                    type="date"
                    placeholder="경매 종료일을 입력하시오."
                    display="flex"
                    justfiycontent="start"
                    alignitems="center"
                    width="21.875rem"
                    height="3.125rem"
                    padding="0 1.313rem"
                    fontsize="1.25rem"
                    color={Gray2}
                    borderradius="10px"
                    border={`solid 1px ${Gray1}`}
                    value={endDate}
                    onChange={handleEndDateChange}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    notebookwidth="18.75rem"
                    notebookheight="2.5rem"
                    notebookfontsize="1rem"
                  />
                </Div>
              </Div>
              <Div
                className="NormalRatingNotice"
                display="flex"
                flexdirection="column"
                width="23.313rem"
                height="4.563rem"
                margin="0 0 0 1.063rem"
                fontsize="1rem"
                color={Gray4}
                notebookfontsize="0.875rem"
              >
                <Div margin="none">경매 시작 시간은 시작일 오전 9시부터입니다.</Div>
                <Div margin="none">경매 마감 시간은 종료일 오후 9시까지입니다.</Div>
                <Div margin="none">당일 경매 등록은 경매 시작 시간인 오전 9시 이전까지만</Div>
                <Div margin="none">가능합니다.</Div>
              </Div>
            </Div>
          </Div>
          <Div
            className="TradingMethodContainer"
            display="flex"
            flexdirection="column"
            width="34.438rem"
            height="11.939rem"
            margin="2.688rem 0 0 0"
            notebookwidth="32.501rem"
            notebookheight="9.501rem"
          >
            <Div
              className="TradingMethodTitle"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="22.313rem"
              height="4.688rem"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
              notebookheight="3.125rem"
              notebookfontsize="1.5rem"
            >
              거래 방법 (중복 선택 가능)
            </Div>
            <Div
              className="TradingMethodMainContainer"
              display="flex"
              flexdirection="column"
              justifycontent="center"
              alignitems="start"
              width="34.438rem"
              height="6.188rem"
              margin="1.063rem 0 0 0"
              notebookwidth="32.501rem"
              notebookheight="5.688rem"
            >
              <Div
                className="OnlineTradingContainer"
                display="flex"
                alignitems="center"
                width="34.438rem"
                height="2.375rem"
                margin="0 0 1.5rem"
                notebookmargin="0 0 0.688rem 0"
                notebookwidth="32.501rem"
                notebookheight="2.5rem"
              >
                <Checkbox className="OnlineTradingCheckbox" width="1.563rem" height="1.563rem">
                  온라인 거래
                </Checkbox>
                <Div
                  className="OnlineTradingNotice"
                  display="flex"
                  justfiycontent="start"
                  alignitems="center"
                  width="11.625rem"
                  height="1.563rem"
                  margin="0 0 0 2.875rem"
                  fontsize="1.25rem"
                  color={Gray2}
                  notebookfontsize="1rem"
                >
                  택배비 낙찰자 부담
                </Div>
              </Div>
              <Div
                className="OfflineTradingContainer"
                display="flex"
                width="34.438rem"
                height="3.125rem"
                notebookwidth="33.501rem"
                notebookheight="2.5rem"
              >
                <Checkbox className="OfflineTradingCheckbox" width="1.563rem" height="1.563rem">
                  오프라인 거래
                </Checkbox>
                <Input
                  className="OfflineTradingPlaceInput"
                  placeholder="거래 장소를 입력사이오."
                  display="flex"
                  justfiycontent="start"
                  alignitems="center"
                  width="21.875rem"
                  height="3.125rem"
                  padding="0 1.313rem"
                  margin="0 0 0  1.25rem"
                  fontsize="1.25rem"
                  color={Gray2}
                  borderradius="10px"
                  border={`solid 1px ${Gray1}`}
                  notebookheight="2.5rem"
                  notebookfontsize="1rem"
                />
              </Div>
            </Div>
          </Div>
          <Div
            className="ButtonContainer"
            display="flex"
            justifycontent="center"
            alignitems="center"
            margin="3.875rem 0 3.813rem 0"
            notebookmargin="2.875rem 0 0 0"
          >
            <Button
              className="SubmitAuctionBtn"
              type="submit"
              width="12.5rem"
              height="4.063rem"
              fontsize="1.5rem"
              borderradius="1rem"
              border="none"
              notebookwidth="11.25rem"
              notebookheight="3.75rem"
            >
              경매 등록
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

export default CardRegistration;
