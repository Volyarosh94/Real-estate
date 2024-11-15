import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./all.min.css";
import "./style.css";
import { ThemeProvider } from "./components/functions/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ThemeProvider><App /></ThemeProvider>);
