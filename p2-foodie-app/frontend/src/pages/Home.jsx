import React from "react";
import { Navbar } from "../components/Navbar";
import { CategoryMenu } from "../components/CategoryMenu";
import FoodItem from './../components/FoodItem';

function Home() {
  return (
    <>
      <Navbar />
      <CategoryMenu/>
      <FoodItem/>
    </>
  );
}

export default Home;
