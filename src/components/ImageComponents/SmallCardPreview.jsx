import React from "react";
import styled from "styled-components";
import firestore from "../../Firebase/firestore";
import Div from "../BaseComponents/BasicDiv";
import Color from "../BaseComponents/Color";

const SmallCardPreview = () => {
  const Default = Color({ color: "Default" });
  const Gray4 = Color({ color: "Gray4" });

  const fetchAllCards = async () => {
    try {
      const querySnapshot = await firestore.collection("CardRegistration").get();
      const cards = [];
      querySnapshot.forEach((doc) => {
        cards.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return cards;
    } catch (error) {
      console.error("Error fetching cards:", error);
      return [];
    }
  };

  fetchAllCards().then((cards) => {
    console.log(cards); // 카드 데이터 배열 출력
  });

  return (
    <Div
      className="PreviewContainer"
      display="flex"
      flexdirection="column"
      justifycontent="center"
      alignitems="center"
      width="21.875rem"
      height="37.5rem"
      margin="0 0 -1px -1px"
      border={`solid 1px ${Gray4}`}
      backgroundcolor={Default}
      notebookwidth="14.563rem"
      notebookheight="25.438rem"
    >
      <Div
        className="PreviewImage"
        width="18.75rem"
        height="25rem"
        margin="0 0 1.188rem 0"
        border={`solid 1px ${Gray4}`}
        backgroundcolor={Default}
        notebookwidth="12.5rem"
        notebookheight="16.668rem"
        notebookmargin="0 0 0.7rem 0"
      />
      <Div
        className="PreviewHeader"
        width="18.75rem"
        height="3.5rem"
        fontsize="1.25rem"
        textalign="left"
        wordwrap="break-word"
        notebookwidth="12.5rem"
        notebookheight="2.876rem"
        notebookfontsize="0.875rem"
      >
        완전기이이이이이이이이이이이이이인 제목
      </Div>
      <Div
        className="PreviewAuctionContainer"
        display="flex"
        width="18.75rem"
        height="3.438rem"
        margin="1.063rem 0 0 0"
        notebookwidth="12.5rem"
        notebookheight="2.626rem"
        notebookmargin="0.5rem 0 0 0"
      >
        <Div
          className="PreviewTimeContainer"
          width="fit-content"
          height="3.438rem"
          textalign="left"
          notebookheight="fit-content"
        >
          <Div
            className="DetailTimeHeader"
            width="4.063rem"
            height="1.25rem"
            fontsize="0.875rem"
            textalign="left"
            notebookwidth="2.75rem"
            notebookheight="0.938rem"
            notebookfontsize="0.625rem"
          >
            남은 시간
          </Div>
          <Div
            className="DetailTime"
            alignitems="end"
            width="fit-content"
            height="2.188rem"
            fonteweight="bold"
            textalign="left"
            fontsize="1.5rem"
            notebookwidth="fit-content"
            notebookheight="1.5rem"
            notebookfontsize="1rem"
          >
            99:99:99
          </Div>
        </Div>
        <Div
          className="PreviewPriceContainer"
          width="fit-content"
          height="3.438rem"
          margin="0 0 0 auto"
          textalign="right"
          notebookheight="fit-content"
        >
          <Div
            className="DetailPriceHeader"
            width="4.063rem"
            height="1.25rem"
            fontsize="0.875rem"
            textalign="left"
            notebookwidth="2.75rem"
            notebookheight="0.938rem"
            notebookfontsize="0.625rem"
          >
            현재가
          </Div>
          <Div
            className="DetailTime"
            alignitems="end"
            width="fit-content"
            height="2.188rem"
            fonteweight="bold"
            textalign="left"
            fontsize="2rem"
            notebookwidth="fit-content"
            notebookheight="1.25rem"
            notebookfontsize="1rem"
          >
            13,000
            <Div
              className="PriceUnit"
              display="flex"
              alignitems="end"
              fontsize="1rem"
              margin="0 0 0 0.3rem"
              notebookfontsize="0.75rem"
            >
              원
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default SmallCardPreview;
