import { useState } from "react";

import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
