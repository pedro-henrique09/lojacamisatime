import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routers } from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);
