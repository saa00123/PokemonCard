/* eslint-disable no-return-assign */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/BaseComponents/Header";
import Div from "../../components/BaseComponents/BasicDiv";
import Input from "../../components/BaseComponents/Input";
import Color from "../../components/BaseComponents/Color";
import Button from "../../components/BaseComponents/Button";
import DropDown from "../../components/BaseComponents/DropDown";
import Checkbox from "../../components/BaseComponents/Checkbox";

import ImageUpload from "../../components/ImageComponents/ImageUpload";

import CardRating from "../../components/options/CardRating";
import CardSeries from "../../components/options/CardSeries";
import NormalRating from "../../components/options/NormalRating";
import brgRating from "../../components/options/brgRating";

function CardRegistration() {
  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Red = Color({ color: "Red" });
  const Gray1 = Color({ color: "Gray1" });
  const Gray2 = Color({ color: "Gray2" });
  const Gray4 = Color({ color: "Gray4" });

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

  /** 경매 시작일과 종료일 */
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    const { value } = e.target;
    let endValue = endDate;

    // endDate가 startDate를 넘지 못하게 하는 로직
    if (new Date(value) > new Date(endDate)) {
      endValue = value;
      setEndDate(endValue);
    }

    // endDate와 startDate 사이의 간격이 3일보다 크면 endDate를 startDate로부터 3일 후로 설정
    if (new Date(endValue).getTime() - new Date(value).getTime() > 3 * 24 * 60 * 60 * 1000) {
      const maxEndDate = new Date(value);
      maxEndDate.setDate(maxEndDate.getDate() + 3);
      setEndDate(maxEndDate.toISOString().split("T")[0]);
    }

    setStartDate(value);
  };

  const handleEndDateChange = (e) => {
    const { value } = e.target;

    if (!startDate) {
      return; // startDate가 없으면 아무 작업도 수행하지 않음
    }

    // 유효하지 않은 날짜를 설정하는 시도를 감지하면 아무 것도 변경하지 않습니다.
    if (new Date(value) < new Date(startDate)) {
      return;
    }

    if (new Date(value).getTime() - new Date(startDate).getTime() <= 3 * 24 * 60 * 60 * 1000) {
      setEndDate(value);
    } else {
      const maxEndDate = new Date(startDate);
      maxEndDate.setDate(maxEndDate.getDate() + 3);
      setEndDate(maxEndDate.toISOString().split("T")[0]);
    }
  };

  /** 체크박스 상태관리 */
  const [isToploaderChecked, setIsToploaderChecked] = useState(false);

  const handleToploaderCheckboxClick = () => {
    setIsToploaderChecked(!isToploaderChecked);
  };

  const [isNormalRatingChecked, setIsNormalRatingChecked] = useState(false);
  const [isBrgRatingChecked, setIsBrgRatingChecked] = useState(false);

  const handleNormalCheckboxClick = () => {
    setIsNormalRatingChecked(!isNormalRatingChecked);
    setIsBrgRatingChecked(false);
  };

  const handleBrgCheckboxClick = () => {
    setIsBrgRatingChecked(!isBrgRatingChecked);
    setIsNormalRatingChecked(false);
  };

  const [isOnlineChecked, setIsOnlineChecked] = useState(false);
  const [isOfflineChecked, setIsOfflineChecked] = useState(false);

  const handleOnlineCheckboxClick = () => {
    setIsOnlineChecked(!isOnlineChecked);
    setIsOfflineChecked(false);
  };

  const handleOfflineCheckboxClick = () => {
    setIsOfflineChecked(!isOfflineChecked);
    setIsOnlineChecked(false);
  };

  /** 시작가에 따른 입찰가 자동 설정 */
  const [startPrice, setStartPrice] = useState("");
  const [bidUnit, setBidUnit] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleStartPriceChange = (e) => {
    const { value } = e.target;

    // 입력 값이 100 미만인 경우 경고문을 활성화
    if (parseInt(value, 10) < 100) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }

    setStartPrice(value);
  };

  useEffect(() => {
    const price = parseInt(startPrice, 10);

    if (price >= 100 && price <= 9900) {
      setBidUnit("100");
    } else if (price >= 10000 && price <= 100000) {
      setBidUnit("1000");
    } else if (price >= 100000 && price <= 1000000) {
      setBidUnit("5000");
    } else if (price >= 1000000) {
      setBidUnit("10000");
    } else {
      setBidUnit("");
    }
  }, [startPrice]);

  return (
    <Div className="MainContainer">
      <Header />
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
        notebookheight="fit-content"
        notebookpadding="2rem 0 6.125rem 0"
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
          color={Gray2}
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
                  placeholder="제목을 입력하세요"
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
                notebookbuttonwidth="7.5rem"
                notebookbuttonheight="3.125rem"
                notebookborderradius="10px"
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
                borderradius="15px"
                buttonwidth="21.875rem"
                buttonheight="4.375rem"
                buttonfontsize="1.5rem"
                menuwidth="21.875rem"
                menufontsize="1.5rem"
                notebookwidth="18.75rem"
                notebookheight="3.125rem"
                notebookbuttonwidth="18.75rem"
                notebookbuttonheight="3.125rem"
                notebookborderradius="10px"
                notebookbuttonfontsize="1.25rem"
                notebookmenuwidth="18.75rem"
                notebookmenuheight="10.125rem"
                notebookmenufontsize="1.25rem"
              />
              <Checkbox
                className="TopLoaderCheckbox"
                width="1.563rem"
                height="1.563rem"
                checked={isToploaderChecked}
                onChange={handleToploaderCheckboxClick}
              >
                탑로더 유무
              </Checkbox>
            </Div>
            <Div
              className="ImageRegistrationContainer"
              display="flex"
              flexdirection="column"
              width="68rem"
              height="30.688rem"
              margin="1.813rem 0 0 0"
              notebookwidth="56.5rem"
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
              <ImageUpload />
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
                  <Checkbox
                    className="NormalRatingCheckbox"
                    width="1.563rem"
                    height="1.563rem"
                    checked={isNormalRatingChecked}
                    onChange={handleNormalCheckboxClick}
                  >
                    일반 등급
                  </Checkbox>
                  <DropDown
                    className="NormalRating"
                    options={NormalRating}
                    onSelect={handleSelect}
                    width="8.125rem"
                    height="3.75rem"
                    margin="0 0 1.813rem 0"
                    notebookwidth="16.126rem"
                    notebookheight="3.125rem"
                    notebookbuttonwidth="6.25rem"
                    notebookbuttonheight="3.125rem"
                    notebookbuttonfontsize="1.25rem"
                    notebookmenuwidth="6.25rem"
                    notebookmenuheight="10.125rem"
                    notebookmenufontsize="1.25rem"
                    disabled={!isNormalRatingChecked}
                  />
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
                  <Checkbox
                    className="brgRatingCheckboxContainer"
                    width="1.563rem"
                    height="1.563rem"
                    checked={isBrgRatingChecked}
                    onChange={handleBrgCheckboxClick}
                  >
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
                    disabled={!isBrgRatingChecked}
                  />
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
                  notebookheight="2.5rem"
                  notebookmargin="0 0 1rem 0"
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
                      placeholder="시작가를 입력하세요"
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
                  <Div className="InputWrapper" position="absolyte" width="fit-content">
                    <Input
                      className="StartPriceInput"
                      placeholder="시작가를 입력하세요"
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
                      value={startPrice}
                      onChange={handleStartPriceChange}
                    />
                    {showWarning && (
                      <Div
                        className="Warning"
                        position="absolute"
                        fontsize="0.8rem"
                        color={Red}
                        notebookfontsize="0.4rem"
                      >
                        시작가는 100 이상이어야 합니다.
                      </Div>
                    )}
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
                      placeholder="경매 시작일을 입력하세요"
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
                    value={bidUnit}
                  />
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
                    placeholder="거래 장소를 입력하세요"
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
                <Div margin="none">경매 기간은 최대 3일입니다.</Div>
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
                <Checkbox
                  className="OnlineTradingCheckbox"
                  width="1.563rem"
                  height="1.563rem"
                  checked={isOnlineChecked}
                  onChange={handleOnlineCheckboxClick}
                >
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
                <Checkbox
                  className="OfflineTradingCheckbox"
                  width="1.563rem"
                  height="1.563rem"
                  checked={isOfflineChecked}
                  onChange={handleOfflineCheckboxClick}
                >
                  오프라인 거래
                </Checkbox>
                <Input
                  className="OfflineTradingPlaceInput"
                  placeholder="거래 장소를 입력하세요"
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
                  disabled={!isOfflineChecked}
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

export default CardRegistration;
