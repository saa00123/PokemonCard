import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import GridButton from "../../components/SortButton/GridButton";
import ListButton from "../../components/SortButton/ListButton";

const Home = () => (
  <Provider store={store}>
    <GridButton />
    <ListButton />
  </Provider>
);

export default Home;
