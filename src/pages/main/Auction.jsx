/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import database from "../../Firebase/database";
import firestore from "../../Firebase/firestore";
import Div from "../../components/BaseComponents/BasicDiv";
import Color from "../../components/BaseComponents/Color";
import Button from "../../components/BaseComponents/Button";
import Input from "../../components/BaseComponents/Input";
import Header from "../../components/BaseComponents/Header";
import PokemonImage from "../../components/ImageComponents/PokemonImage";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

function Auction() {
  const { id } = useParams();

  const Default = Color({ color: "Default" });
  const Black = Color({ color: "Black" });
  const Red = Color({ color: "Red" });
  const Gray1 = Color({ color: "Gray1" });

  /** 카드 정보 불러오기 */
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(null);

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

  useEffect(() => {
    const selectedCard = cards.find((c) => c.id === id);
    setCard(selectedCard);
  }, [cards, id]);

  /** 남은 시간 */
  const [remainingTime, setRemainingTime] = useState("");
  const [timeColor, setTimeColor] = useState(Default);

  useEffect(() => {
    if (!card) return;

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

    return () => {
      clearInterval(intervalId);
    };
  }, [card?.date?.startDate, card?.date?.endDate]);

  /** 입찰 버튼 */
  const [auctionPrice, setAuctionPrice] = useState(0); // 초기값 설정

  useEffect(() => {
    if (card) {
      setAuctionPrice(card.price.bidUnit);
    }
  }, [card]);

  const getBidUnitBasedOnCurrentPrice = () => {
    if (currentPrice < 10000) {
      return 100;
    }
    if (currentPrice < 100000) {
      return 1000;
    }
    if (currentPrice < 1000000) {
      return 5000;
    }
    return 10000;
  };

  const handleAuctionPriceIncrease = () => {
    const bidUnit = getBidUnitBasedOnCurrentPrice();
    setAuctionPrice((prevPrice) => Number(prevPrice) + bidUnit); // Ensure numbers are added
  };

  const handleAuctionPriceDecrease = () => {
    const bidUnit = getBidUnitBasedOnCurrentPrice();
    if (auctionPrice > bidUnit) {
      setAuctionPrice((prevPrice) => Number(prevPrice) - bidUnit); // Ensure numbers are subtracted
    }
  };

  const handleAuctionPriceChange = (e) => {
    setAuctionPrice(Number(e.target.value.replace(/,/g, ""))); // ,를 제거하고 숫자로 변환
  };

  /** 입찰가를 Firebase RealtimeDatabase에 저장 */
  const writeData = () => {
    const updatedPrice = Number(currentPrice) + Number(auctionPrice); // Ensure numbers are added, not concatenated as strings
    setCurrentPrice(updatedPrice);

    const data = {
      price: currentPrice + auctionPrice,
    };

    const newDataRef = database.ref("price").push();
    newDataRef
      .set(data)
      .then(() => {
        console.log("데이터 쓰기 성공!");
      })
      .catch((error) => {
        console.error("데이터 쓰기 실패:", error);
      });
    database.ref("currentPrice").set(data);
  };

  /** 실시간 현재가 */
  const [currentPrice, setCurrentPrice] = useState(card ? Number(card.price.startPrice) : 0);

  useEffect(() => {
    const priceRef = database.ref("currentPrice");
    priceRef.on("value", (snapshot) => {
      const latestPrice = snapshot.val()?.price
        ? Number(snapshot.val().price)
        : card
        ? Number(card.price.startPrice)
        : 0;
      setCurrentPrice(latestPrice);
    });

    return () => {
      priceRef.off();
    };
  }, [card]);

  /** 포켓몬 이미지 랜덤 생성 */
  const [randomId, setRandomId] = useState(null);

  useEffect(() => {
    setRandomId(Math.floor(Math.random() * 1000) + 1);
  }, []);

  const { data } = PokemonImage(randomId);

  const pokemonImageUrl = data?.sprites?.front_default;

  return (
    <div>
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
          {card?.imageUrls?.length === 1 ? (
            <Div
              className="UploadImageContainer"
              width="24.125rem"
              height="37.5rem"
              border="solid 1px"
              notebookwidth="15.625rem"
              notebookheight="20.813rem"
              style={{
                backgroundImage: `url(${card.imageUrls[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ) : card?.imageUrls?.length > 1 ? (
            <Slider {...settings}>
              {card.imageUrls.map((image) => (
                <Div
                  key={image}
                  className="UploadImageContainer"
                  width="24.125rem"
                  height="37.5rem"
                  border="solid 1px"
                  notebookwidth="15.625rem"
                  notebookheight="20.813rem"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </Slider>
          ) : (
            <p>이미지가 없습니다.</p>
          )}

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
              {card?.title}
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
                notebookwidth="9.625rem"
                notebookheight="1rem"
                notebookfontsize="0.563rem"
              >
                시작일 : {card?.date.startDate} 09:00:00
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
              종료일 : {card?.date.endDate} 21:00:00
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
                {card?.trading}
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
                  className="StartPrice"
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
                  {card?.price.startPrice}
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
                  {card?.price.bidUnit}
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
                color={timeColor}
              >
                {remainingTime}
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
                  {typeof currentPrice === "number" ? currentPrice.toLocaleString() : "0"}
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
            notebookwidth="9.188rem"
            notebookheight="9.125rem"
            style={{ backgroundImage: `url(${pokemonImageUrl})`, backgroundSize: "cover" }}
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
              hovercolor="#000"
              hoverborder="none"
              notebookwidth="1.688rem"
              notebookheight="3.25rem"
              notebookfontsize="1.5rem"
              notebookborder="none"
              notebookbackgroundcolor={Default}
              notebookcolor="#000000"
              onClick={handleAuctionPriceDecrease}
            >
              -
            </Button>
            <Input
              className="AuctionPrice"
              display="flex"
              justifycontent="center"
              alignitems="center"
              width="11.25rem"
              height="4.688rem"
              fontsize="2rem"
              fontWeight="bold"
              textalign="center"
              border="none"
              margin="0 1.188rem"
              notebookwidth="7.75rem"
              notebookheight="3.25rem"
              notebookfontsize="1.25rem"
              notebookmargin="0"
              value={auctionPrice ? auctionPrice.toLocaleString() : ""}
              onChange={handleAuctionPriceChange}
            />
            <Button
              className="PlusBtn"
              width="3rem"
              height="4.688rem"
              fontsize="3rem"
              border="none"
              backgroundcolor={Default}
              color="#000000"
              hovercolor="#000"
              hoverborder="none"
              notebookwidth="1.688rem"
              notebookheight="3.25rem"
              notebookfontsize="1.5rem"
              notebookborder="none"
              notebookbackgroundcolor={Default}
              notebookcolor="#000000"
              onClick={handleAuctionPriceIncrease}
            >
              +
            </Button>
          </Div>
          <Button
            className="AuctionBtn"
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
            onClick={writeData}
          >
            입찰하기
          </Button>
        </Div>
      </Div>
    </div>
  );
}

export default Auction;

// 아래 코드는 로그인 처리 후 입찰가 상태관리 코드
// /** 입찰가를 Firebase RealtimeDatabase에 저장 */
// const writeData = () => {
//   const data = {
//     price: auctionPrice,
//   };

//   // 새로운 입찰가 저장
//   const newDataRef = database.ref("price").push();
//   newDataRef
//     .set(data)
//     .then(() => {
//       console.log("데이터 쓰기 성공!");
//     })
//     .catch((error) => {
//       console.error("데이터 쓰기 실패:", error);
//     });

//   // currentPrice 업데이트
//   database.ref("currentPrice").transaction((currentValue) => {
//     return (currentValue || 0) + auctionPrice;
//   });
// };

// /** 실시간 현재가 */
// const [startPrice, setStartPrice] = useState(0);

// useEffect(() => {
//   const priceRef = database.ref("currentPrice");
//   priceRef.on("value", (snapshot) => {
//     const latestPrice = snapshot.val() || 0;
//     setStartPrice(latestPrice);
//   });

//   return () => {
//     priceRef.off();
//   };
// }, []);

// 아래 규칙은 후에 로그인이 구현되면 사용할 RealtimeDatabase 규칙
// {
//   "rules": {
//     ".read": "auth != null",
//     "bids": {
//       ".write": "auth != null"
//     },
//     "currentBid": {
//       ".write": "auth != null"
//     }
//   }
// }
