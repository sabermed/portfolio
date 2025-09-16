import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main from "./screens/Main";
import "./styles/global.scss";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);