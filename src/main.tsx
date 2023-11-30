import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { Header, Footer } from "./global";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="oliver-sinclair" element={<Home />} />
        <Route path="services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
