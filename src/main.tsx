import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routers } from "./router/index.tsx";
import { CartProvider } from "./contexts/cart-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Routers />
    </CartProvider>
  </React.StrictMode>
);
