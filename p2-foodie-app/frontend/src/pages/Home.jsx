import React from "react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { CategoryMenu } from "../components/CategoryMenu";
import FoodItem from './../components/FoodItem';
import Cart from "../components/Cart";
import FoodData from './../data/FoodData';

function Home() {
  return (
    <>
      <Navbar/>
      <CategoryMenu/>
      <FoodItem/>
      <Cart/>
    </>
  );
}

export default Home;
