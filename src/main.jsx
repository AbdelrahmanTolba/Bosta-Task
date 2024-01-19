import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./i18n.js";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { orderApi } from "./api/apiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={orderApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
