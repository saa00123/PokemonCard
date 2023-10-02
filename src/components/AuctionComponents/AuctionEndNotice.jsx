import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Div from "../BaseComponents/BasicDiv";
import Color from "../BaseComponents/Color";

function AuctionEndNotice() {
  const Gray2 = Color({ color: "Gray2" });
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [history]);

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
          notebookwidth="33.1rem"
          notebookheight="16.2rem"
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
            notebookwidth="21.5rem"
            notebookfontsize="2rem"
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
            notebookwidth="24.5rem"
            notebookfontsize="2rem"
          >
            5초 후에 홈으로 돌아갑니다.
          </Div>
        </Div>
      </Div>
    </div>
  );
}

export default AuctionEndNotice;
