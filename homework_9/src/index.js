import React from "react";
import ReactDOM from "react-dom";
import "../src/Assets/Fonts/fonts.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
