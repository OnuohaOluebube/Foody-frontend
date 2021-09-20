import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/Almarai-Light.ttf";
import "./fonts/Almarai-Bold.ttf";
import "./fonts/Almarai-Regular.ttf";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./components/Common/StateProvider";
import reducer, { initialState } from "./components/Common/reducer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
