import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Div from "../../components/BaseComponents/BasicDiv";
import Input from "../../components/BaseComponents/Input";
import Color from "../../components/BaseComponents/Color";
import Button from "../../components/BaseComponents/Button";
import DropDown from "../../components/BaseComponents/DropDown";

function CardRegistration() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 40) {
      setValue(inputValue);
    }
  };

  const MaxCharCount = 40;
  const charCount = value.length;
  const remainingChars = MaxCharCount - charCount;

  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Gray1 = Color({ color: "Gray1" });
  const Gray2 = Color({ color: "Gray2" });

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
        justifycontent="start"
        alignitems="center"
        width="78.438rem"
        height="116.25rem"
        boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
        backgroundcolor={Default}
      >
        <Div
          className="TitleContainer"
          display="flex"
          justifycontent="center"
          alignitems="center"
          width="68.676rem"
          height="4.375rem"
          margin="1rem 0 0 0"
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
      </Div>
    </Div>
  );
}

export default CardRegistration;
