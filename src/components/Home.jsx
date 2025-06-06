import React from "react";
import { useState } from "react";
import data from "../assets/product.json";
import Product from "./Product";
import "./Home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((state) => {
    return state.product.items;
  });

  return (
    <div className="product-container">
      {items.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Home;
