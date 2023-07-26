import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Div from "../../components/BaseComponents/BasicDiv";
import Color from "../../components/BaseComponents/Color";
import Button from "../../components/BaseComponents/Button";

function Auction() {
  const navigate = useNavigate();

  const Default = Color({ color: "Default" });
  const Gray1 = Color({ color: "Gray1" });
  const Gray2 = Color({ color: "Gray2" });
  const Gray4 = Color({ color: "Gray4" });

  return (
    <Div
      className="AuctionContainer"
      display="flex"
      justifycontent="center"
      alignitems="center"
      margin="auto"
      padding="5rem 0 0 0"
      width="100.688rem"
      height="43.125rem"
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
      >
        <Div className="UploadImageContainer" width="24.125rem" height="37.5rem" border="solid 1px" />
        <Div
          className="AuctionDetailContainer"
          display="flex"
          flexdirection="column"
          justifycontent="start"
          alignitems="center"
          width="39.438rem"
          height="39.188rem"
          margin="0 0 0 2rem"
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
          >
            마샤도 싸게 가져가세요
          </Div>
        </Div>
      </Div>
      <Div
        className="AuctionClickContainer"
        width="21.875rem"
        height="32.437rem"
        margin="0 0 0 6rem"
        border="solid 1px"
      />
    </Div>
  );
}

export default Auction;
