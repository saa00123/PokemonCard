import React, { useState, useEffect } from "react";
import firestore from "../../Firebase/firestore";
import Div from "../BaseComponents/BasicDiv";
import Color from "../BaseComponents/Color";

const SmallCardPreview = ({ card }) => {
  const Default = Color({ color: "Default" });
  const Gray4 = Color({ color: "Gray4" });

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        const querySnapshot = await firestore.collection("CardRegistration").get();
        const cardData = [];
        querySnapshot.forEach((doc) => {
          cardData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCards(cardData);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchAllCards();
  }, []);

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
        style={{
          backgroundImage: `url(${card.imageUrls?.[0] || ""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
        {card.title || "제목을 불러올 수 없습니다."}
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
            className="DetailPrice"
            display="flex"
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
            {card.price?.startPrice || "0"}
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
