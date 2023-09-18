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
  },
});

export const { setCards, setCard, setRemainingTime, setTimeColor, setAuctionPrice, setCurrentPrice, setRandomId } =
  cardSlice.actions;

export default cardSlice.reducer;
