import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import "@fontsource/poppins";
import "@fontsource/cairo";

import App from "./App";

import {
  LanguageProvider,
} from "./context/LanguageContext";

const root =
  ReactDOM.createRoot(
    document.getElementById("root")
  );

root.render(

  <React.StrictMode>

    {/* GLOBAL LANGUAGE + RTL */}

    <LanguageProvider>

      <App />

    </LanguageProvider>

  </React.StrictMode>

);