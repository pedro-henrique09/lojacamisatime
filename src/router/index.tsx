import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import { Header } from "../components/header";
import ProductPage from "../pages/product";

const Routers = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col ">
        <Header />
        <div className="container flex flex-col flex-1 mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export { Routers };
