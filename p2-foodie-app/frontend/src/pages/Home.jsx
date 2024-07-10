import React from "react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { CategoryMenu } from "../components/CategoryMenu";
import FoodItem from './../components/FoodItem';
import Cart from "../components/Cart";
import FoodData from './../data/FoodData';

function Home() {

  // Search Food logic
  const [searchData, setSearchData] = useState(FoodData);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setSearchData(FoodData);
    }
    const filterValue = FoodData.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));

    setSearchData(filterValue);
    if (filterValue.length < 1) {
      setSearchData([]);
    }
  }

  return (
    <>
      <Navbar searchData={searchData} searchFood={searchFood} />
      <CategoryMenu/>
      <FoodItem searchData={searchData}/>
      <Cart/>
    </>
  );
}

export default Home;
