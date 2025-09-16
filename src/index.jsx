import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.scss";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);