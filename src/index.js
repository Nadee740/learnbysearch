import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { useCookies } from 'react-cookie';
import { CookiesProvider } from "react-cookie";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Session from "react-session-persist/lib";
window.name = "https://api.learnbyresearch.com/api/";
// https://734a-202-164-138-96.ngrok.io
//https://cbbb-116-68-83-9.ngrok.io
//https://ec00-116-68-86-157.ngrok.io/api
// https://api.learnbyresearch.com/api/
// http://localhost:8000/api/
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
