import {
  SET_CARDS,
  SET_CARD,
  SET_REMAINING_TIME,
  SET_TIME_COLOR,
  SET_AUCTION_PRICE,
  SET_CURRENT_PRICE,
  SET_RANDOM_ID,
} from "./types";

export const setCards = (cards) => ({
  type: SET_CARDS,
  payload: cards,
});

export const setCard = (card) => ({
  type: SET_CARD,
  payload: card,
});

export const setRemainingTime = (remainingTime) => ({
  type: SET_REMAINING_TIME,
  payload: remainingTime,
});

export const setTimeColor = (timeColor) => ({
  type: SET_TIME_COLOR,
  payload: timeColor,
});

export const setAuctionPrice = (auctionPrice) => ({
  type: SET_AUCTION_PRICE,
  payload: auctionPrice,
});

export const setCurrentPrice = (currentPrice) => ({
  type: SET_CURRENT_PRICE,
  payload: currentPrice,
});

export const setRandomId = (randomId) => ({
  type: SET_RANDOM_ID,
  payload: randomId,
});
