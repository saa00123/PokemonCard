/* eslint-disable no-param-reassign */
// src/reducers/cardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  card: null,
  remainingTime: "",
  timeColor: null,
  auctionPrice: 0,
  currentPrice: 0,
  randomId: null,
  title: "",
  information: {
    rating: "",
    series: "",
    toploader: false,
  },
  imageUrls: [],
  startDate: "",
  endDate: "",
  isNormalRatingChecked: false,
  isBrgRatingChecked: false,
  startPrice: "",
  bidUnit: "",
  showWarning: false,
  isOnlineChecked: false,
  isOfflineChecked: false,
  offlineTradingPlace: "",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
    },
    setCard(state, action) {
      state.card = action.payload;
    },
    setRemainingTime(state, action) {
      state.remainingTime = action.payload;
    },
    setTimeColor(state, action) {
      state.timeColor = action.payload;
    },
    setAuctionPrice(state, action) {
      state.auctionPrice = action.payload;
    },
    setCurrentPrice(state, action) {
      state.currentPrice = action.payload;
    },
    setRandomId(state, action) {
      state.randomId = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setInformation(state, action) {
      state.information = { ...state.information, ...action.payload };
    },
    setImageUrls(state, action) {
      state.imageUrls = action.payload;
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
    toggleNormalRating(state) {
      state.isNormalRatingChecked = !state.isNormalRatingChecked;
      state.isBrgRatingChecked = false;
    },
    toggleBrgRating(state) {
      state.isBrgRatingChecked = !state.isBrgRatingChecked;
      state.isNormalRatingChecked = false;
    },
    setStartPrice(state, action) {
      state.startPrice = action.payload;
    },
    setBidUnit(state, action) {
      state.bidUnit = action.payload;
    },
    toggleShowWarning(state, action) {
      state.showWarning = action.payload;
    },
    toggleIsOnlineChecked(state) {
      state.isOnlineChecked = !state.isOnlineChecked;
    },
    toggleIsOfflineChecked(state) {
      state.isOfflineChecked = !state.isOfflineChecked;
    },
    setOfflineTradingPlace(state, action) {
      state.offlineTradingPlace = action.payload;
    },
  },
});

export const {
  setCards,
  setCard,
  setRemainingTime,
  setTimeColor,
  setAuctionPrice,
  setCurrentPrice,
  setRandomId,
  setTitle,
  setInformation,
  setImageUrls,
  setStartDate,
  setEndDate,
  toggleNormalRating,
  toggleBrgRating,
  setStartPrice,
  setBidUnit,
  toggleShowWarning,
  toggleIsOnlineChecked,
  toggleIsOfflineChecked,
  setOfflineTradingPlace,
} = cardSlice.actions;

export default cardSlice.reducer;
