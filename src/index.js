import React from "react";
import reactDom from "react-dom";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import App from "./components/App";


reactDom.render(<App />, document.querySelector(".root"));
