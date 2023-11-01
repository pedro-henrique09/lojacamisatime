import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routers } from "./router/index.tsx";
import { CartProvider } from "./contexts/cart-context.tsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl23NTmTLv18PSdCmAYz7lA36kfpylHKk",
  authDomain: "coderhouse-ecommerce-pedro.firebaseapp.com",
  projectId: "coderhouse-ecommerce-pedro",
  storageBucket: "coderhouse-ecommerce-pedro.appspot.com",
  messagingSenderId: "638812675086",
  appId: "1:638812675086:web:ea2791d8620d4ad3b0b05f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Routers />
    </CartProvider>
  </React.StrictMode>
);
