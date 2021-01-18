import "core-js/stable";
import "regenerator-runtime/runtime";
import ReactDOM from "react-dom";
import React from "react";
import gon from "gon";

import "../assets/application.scss";
import App from "./containers/App";

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}

ReactDOM.render(
  <App channels={gon.channels} />,
  document.getElementById("chat")
);
