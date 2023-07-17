import React from "react";
import ReactDOM from "react-dom";
import { StyleSheetManager } from "styled-components";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "bordercolor" && prop !== "notebookfontSize"}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>,
  document.getElementById("root"),
);
