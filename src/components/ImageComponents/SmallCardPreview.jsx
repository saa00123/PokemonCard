import React, { useState, useEffect } from "react";
import firestore from "../../Firebase/firestore";
import Div from "../BaseComponents/BasicDiv";
import Color from "../BaseComponents/Color";

const SmallCardPreview = ({ card, onClick, isListView, sortOrder }) => {
  const Default = Color({ color: "Default" });
  const Black = Color({ color: "Black" });
  const Red = Color({ color: "Red" });
  const Gray4 = Color({ color: "Gray4" });

  /** 카드 정보 불러오기 */
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchAllCards = async () => {
      try {
        let cardsRef = firestore.collection("CardRegistration");
        if (sortOrder === "lowToHigh") {
          cardsRef = cardsRef.orderBy("price.startPrice", "asc");
        } else if (sortOrder === "highToLow") {
          cardsRef = cardsRef.orderBy("price.startPrice", "desc");
        }
        const querySnapshot = await cardsRef.get();

        const cardData = [];
        querySnapshot.forEach((doc) => {
          cardData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCards(cardData);
        console.log(cardData);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchAllCards();
  }, [sortOrder]);

  /** 남은 시간 */
  const [remainingTime, setRemainingTime] = useState("");
  const [timeColor, setTimeColor] = useState(Default);

  useEffect(() => {
    const updateRemainingTime = () => {
      const now = new Date();
      const startTime = new Date(`${card.date.startDate}T09:00:00`);
      const endTime = new Date(`${card.date.endDate}T21:00:00`);

      let diff;
      if (now < startTime) {
        diff = 0;
      } else if (now >= startTime && now <= endTime) {
        diff = endTime - now;
      } else {
        diff = 0;
      }

      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setRemainingTime(
          `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`,
        );
      } else if (now > endTime) {
        setRemainingTime("경매 종료");
      } else {
        setRemainingTime("경매 대기 중");
      }
    };

    const checkRemainingTimeColor = () => {
      const now = new Date();
      const startTime = new Date(`${card.date.startDate}T09:00:00`);
      const endTime = new Date(`${card.date.endDate}T21:00:00`);

      let diff;
      if (now < startTime) {
        diff = 0;
      } else if (now >= startTime && now <= endTime) {
        diff = endTime - now;
      } else {
        diff = 0;
      }

      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        if (hours < 0.5) {
          setTimeColor(Red);
        } else {
          setTimeColor(Black);
        }
      } else {
        setTimeColor(Black);
      }
    };

    updateRemainingTime();
    checkRemainingTimeColor();

    const intervalId = setInterval(() => {
      updateRemainingTime();
      checkRemainingTimeColor();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [card.date.startDate, card.date.endDate]);

  /** ListView와 GridView 구분하여 디자인 */
  const viewStyle = {
    container: {
      className: "PreviewContainer",
      display: "flex",
      flexdirection: isListView ? "" : "column",
      justifycontent: "center",
      alignitems: "center",
      width: isListView ? "50rem" : "21.875rem",
      height: isListView ? "25rem" : "37.5rem",
      margin: "0 0 -1px -1px",
      border: `solid 1px ${Gray4}`,
      backgroundcolor: Default,
      notebookwidth: isListView ? "40rem" : "14.563rem",
      notebookheight: isListView ? "20rem" : "25.438rem",
      onClick,
    },
    image: {
      className: "PreviewImage",
      width: isListView ? "15rem" : "18.75rem",
      height: isListView ? "20rem" : "25rem",
      margin: isListView ? "" : "0 0 1.188rem 0",
      border: `solid 1px ${Gray4}`,
      backgroundcolor: Default,
      notebookwidth: "12.5rem",
      notebookheight: "16.668rem",
      style: {
        backgroundImage: `url(${card.imageUrls?.[0] || ""})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
    detailContainer: {
      width: isListView ? "28.75rem" : "",
      height: isListView ? "20rem" : "",
      display: "flex",
      flexdirection: "column",
      margin: isListView ? "0 0 0 2rem" : "",
      notebookwidth: isListView ? "23rem" : "",
      notebookheight: isListView ? "16rem" : "",
      notebookmargin: isListView ? "1rem" : "",
    },
    header: {
      className: "PreviewHeader",
      width: isListView ? "28.75rem" : "18.75rem",
      height: "3.5rem",
      margin: isListView ? "0.5rem 0 0 0" : "",
      fontsize: "1.25rem",
      textalign: "left",
      wordwrap: "break-word",
      notebookwidth: isListView ? "23rem" : "12.5rem",
      notebookheight: "2.876rem",
      notebookmargin: "0",
      notebookfontsize: "0.875rem",
    },
    auctionContainer: {
      className: "PreviewAuctionContainer",
      display: "flex",
      width: isListView ? "28.75rem" : "18.75rem",
      height: "3.438rem",
      margin: "auto 0 0 0",
      notebookwidth: isListView ? "23rem" : "12.5rem",
      notebookheight: "2.626rem",
      notebookmargin: isListView ? "auto 0 0 0" : "0.5rem 0 0 0",
    },
    timeContainer: {
      className: "PreviewTimeContainer",
      width: "fit-content",
      height: "3.438rem",
      textalign: "left",
      notebookheight: "fit-content",
    },
    detailTimeHeader: {
      className: "DetailTimeHeader",
      width: "4.063rem",
      height: "1.25rem",
      fontsize: "0.875rem",
      textalign: "left",
      notebookwidth: "2.75rem",
      notebookheight: "0.938rem",
      notebookfontsize: "0.625rem",
    },
    detailTime: {
      className: "DetailTime",
      alignitem: "end",
      width: "fit-content",
      height: "2.188rem",
      fonteweight: "bold",
      textalign: "left",
      fontsize: "1.5rem",
      notebookwidth: "fit-content",
      notebookheight: "1.5rem",
      notebookfontsize: "1rem",
      color: timeColor,
    },
    priceContainer: {
      className: "PreviewPriceContainer",
      width: "fit-content",
      height: "3.438rem",
      margin: "0 0 0 auto",
      textalign: "right",
      notebookheight: "fit-content",
    },
    detailPriceHeader: {
      className: "DetailPriceHeader",
      width: "4.063rem",
      height: "1.25rem",
      fontsize: "0.875rem",
      textalign: "left",
      notebookwidth: "2.75rem",
      notebookheight: "0.938rem",
      notebookfontsize: "0.625rem",
    },
    detailPrice: {
      className: "DetailPrice",
      display: "flex",
      alignitems: "end",
      width: "fit-content",
      height: "2.188rem",
      fontWeight: "bold",
      textalign: "left",
      fontsize: "2rem",
      notebookwidth: "fit-content",
      notebookheight: "1.25rem",
      notebookfontsize: "1rem",
    },
    priceUnit: {
      className: "PriceUnit",
      display: "flex",
      alignitems: "end",
      fontsize: "1rem",
      margin: "0 0 0 0.3rem",
      notebookfontsize: "0.75rem",
    },
  };

  return (
    <Div {...viewStyle.container}>
      <Div {...viewStyle.image} />
      <Div {...viewStyle.detailContainer}>
        <Div {...viewStyle.header}>{card.title || "제목을 불러올 수 없습니다."}</Div>
        {isListView && (
          <Div
            className="CardInformation"
            display="flex"
            justifycontent="start"
            alignitems="center"
            width="39.438rem"
            height="2.5rem"
            margin="0.5rem 0 0 0"
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
              탑로더 {card?.information.toploader === true ? "O" : "X"}
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
              {card?.information.rating.label}
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
              {card?.information.series.label}
            </Div>
          </Div>
        )}

        <Div {...viewStyle.auctionContainer}>
          <Div {...viewStyle.timeContainer}>
            <Div {...viewStyle.detailTimeHeader}>남은 시간</Div>
            <Div {...viewStyle.detailTime}>{remainingTime}</Div>
          </Div>

          <Div {...viewStyle.priceContainer}>
            <Div {...viewStyle.detailPriceHeader}>현재가</Div>
            <Div {...viewStyle.detailPrice}>
              {card.price?.startPrice || "0"}
              <Div {...viewStyle.priceUnit}>원</Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default SmallCardPreview;
