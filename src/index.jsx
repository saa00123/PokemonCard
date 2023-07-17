import React from "react";
import ReactDOM from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import "./index.css";
import App from "./App";

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "bordercolor"}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>,
  // document.getElementById("root"),
);
