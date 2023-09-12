/* eslint-disable func-names */
/* eslint-disable default-param-last */
import {
  SET_CARDS,
  SET_CARD,
  SET_REMAINING_TIME,
  SET_TIME_COLOR,
  SET_AUCTION_PRICE,
  SET_CURRENT_PRICE,
  SET_RANDOM_ID,
} from "../../actions/types";

const initialState = {
  cards: [],
  card: null,
  remainingTime: "",
  timeColor: null,
  auctionPrice: 0,
  currentPrice: 0,
  randomId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, cards: action.payload };
    case SET_CARD:
      return { ...state, card: action.payload };
    case SET_REMAINING_TIME:
      return { ...state, remainingTime: action.payload };
    case SET_TIME_COLOR:
      return { ...state, timeColor: action.payload };
    case SET_AUCTION_PRICE:
      return { ...state, auctionPrice: action.payload };
    case SET_CURRENT_PRICE:
      return { ...state, currentPrice: action.payload };
    case SET_RANDOM_ID:
      return { ...state, randomId: action.payload };
    default:
      return state;
  }
}
