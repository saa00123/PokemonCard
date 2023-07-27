import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Color from "../../components/BaseComponents/Color";
import Div from "../../components/BaseComponents/BasicDiv";
import Preview from "../../components/ImageComponents/SmallCardPreview";
import GridButton from "../../components/SortButton/GridButton";
import ListButton from "../../components/SortButton/ListButton";

const Home = () => {
  const Gray2 = Color({ color: "Gray2" });
  const White = Color({ color: "Default" });
  return (
    <Provider store={store}>
      {/* <GridButton />
    <ListButton /> */}
      <Div
        className="HomeContainer"
        width="fit-content"
        height="fit-content"
        margin="2rem auto"
        // border="2px solid black"
      >
        <Div
          className="MainTitle"
          width="13.75rem"
          height="6.25rem"
          color={Gray2}
          fontsize="2.5rem"
          fontWeight="bold"
          // border="2px solid green"
          display="flex"
          alignitems="center"
        >
          검색 결과
        </Div>
        <Div
          className="HomeMainContainer"
          width="fit-content"
          height="fit-content"
          backgroundcolor={White}
          boxshadow="4px 4px 20px 6px rgba(0,0,0,0.25)"
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
        >
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
          <Preview />
        </Div>
        <Div width="fit-content" fontsize="2rem" fontWeight="900" margin=" 1rem auto">
          왼 1 2 3 4 5 6 오
        </Div>
      </Div>
    </Provider>
  );
};

export default Home;
