import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import GridButton from "../../components/SortButton/GridButton";

const Home = () => (
  <Provider store={store}>
    <GridButton />
  </Provider>
);

export default Home;
