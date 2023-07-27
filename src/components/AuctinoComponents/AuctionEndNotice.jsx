import React from "react";
import Div from "../BaseComponents/BasicDiv";
import Color from "../BaseComponents/Color";

function AuctionEndNotice() {
  const Gray2 = Color({ color: "Gray2" });

  return (
    <div>
      <Div
        className="AuctionEndBackground"
        position="fixed"
        display="flex"
        justifycontent="center"
        alignitems="center"
        width="100%"
        height="100%"
        backgroundcolor="rgba(0,0,0,0.5)"
      >
        <Div
          className="EndNoticeContainer"
          display="flex"
          flexdirection="column"
          justifycontent="center"
          alignitems="center"
          margin="0 0 10rem 0"
          width="49.688rem"
          height="20.5rem"
          backgroundcolor="#f1f1f1"
        >
          <Div
            className="EndNotice"
            display="flex"
            justifycontent="center"
            alignitems="center"
            width="30.063rem"
            fontsize="2.5rem"
            fontWeight="bold"
            color={Gray2}
          >
            경매가 마감되었습니다.
          </Div>
          <Div
            className="EndNotice"
            display="flex"
            justifycontent="center"
            alignitems="center"
            width="30.063rem"
            fontsize="2.5rem"
            fontWeight="bold"
            color={Gray2}
          >
            5초 후에 홈으로 돌아갑니다.
          </Div>
        </Div>
      </Div>
    </div>
  );
}

export default AuctionEndNotice;
