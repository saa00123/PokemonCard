import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
      justifycontent="start"
      alignitems="start"
      margin="auto"
      padding="4.063rem 0 0 0"
      width="78.438rem"
      height="123.564rem"
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
      >
        <Div
          className="MainContainerCenter"
          display="flex"
          flexdirection="column"
          width="68.676rem"
          height="111.437rem"
        >
          <Div
            className="TitleContainer"
            display="flex"
            justifycontent="center"
            alignitems="center"
            width="68.676rem"
            height="4.375rem"
          >
            <Div
              className="Title"
              display="flex"
              justfiycontent="center"
              alignitems="center"
              width="4.563rem"
              height="4.313rem"
              margin="0 0.688rem 0 0"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
            >
              제목
            </Div>
            <Div
              className="InputContainer"
              display="flex"
              width="63.625rem"
              height="4.313rem"
              padding="0 1.063rem"
              borderradius="15px"
              border={`solid 1px ${Gray1}`}
              color={Gray1}
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
          >
            <Div
              className="CardInformationTitle"
              display="flex"
              justfiycontent="center"
              alignitems="center"
              width="8.75rem"
              height="4.313rem"
              margin="0 0.688rem 0 0"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
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
          >
            <Div
              className="ImageRegistrationTitle"
              display="flex"
              justfiycontent="center"
              alignitems="center"
              width="14.563rem"
              height="4.688rem"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
            >
              사진 등록
            </Div>
            <Div
              className="ImageContainer"
              display="flex"
              justifycontent="start"
              alignitems="center"
              width="58.626rem"
              height="26rem"
              overflowx="auto"
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
          >
            <Div
              className="RatingTitle"
              display="flex"
              justifycontent="center"
              alignitems="center"
              width="4.375rem"
              height="4.688rem"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
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
            >
              <Div
                className="RatingCheckboxContainer"
                display="flex"
                flexdirection="column"
                width="18.001rem"
                height="9.313rem"
              >
                <Div
                  className="NormalRatingCheckboxContainer"
                  display="flex"
                  justifycontent="center"
                  alignitems="center"
                  width="18.001rem"
                  height="3.75rem"
                  margin="0 0 1.813rem 0"
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
                  />
                </Div>
                <Div
                  className="NormalRatingCheckboxContainer"
                  display="flex"
                  justifycontent="center"
                  alignitems="center"
                  width="18.001rem"
                  height="3.75rem"
                  margin="0 0 1.813rem 0"
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
          >
            <Div
              className="PriceTitle"
              display="flex"
              justifycontent="center"
              alignitems="center"
              width="4.375rem"
              height="4.688rem"
              fontsize="2rem"
              fontWeight="bold"
              color={Gray2}
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
            >
              <Div className="PriceContainer" display="flex" flexdirection="column" width="31.25rem" height="7.5rem">
                <Div
                  className="StartPriceContainer"
                  display="flex"
                  width="31.25rem"
                  height="3.125rem"
                  margin="0 0 1.288rem"
                >
                  <Div
                    className="StartPriceTitle"
                    display="flex"
                    justfiycontent="start"
                    alignitems="center"
                    width="9.375rem"
                    height="3.125rem"
                    fontsize="1.5rem"
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
        </Div>
      </Div>
    </Div>
  );
}

export default CardRegistration;
