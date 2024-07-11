import React from 'react';
import FoodData from '../data/FoodData';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

export const Navbar = () => {
  const dispatch = useDispatch();

  const searchFood = (e) => {
    const searchValue = e.target.value.toLowerCase();
    let filterValue = [];

    if (searchValue === "") {
      dispatch(setSearch(FoodData));
    } else {
      filterValue = FoodData.filter((food) => food.name.toLowerCase().includes(searchValue));
      dispatch(setSearch(filterValue));

      if (filterValue.length < 1) {
        dispatch(setSearch([]));
      }
    }
  };

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-5">
      <div>
        <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className='text-2xl font-bold'>Foodie</h1>
      </div>
      <div>
        <input
          className='p-3 border border-gray-400 text-sm rounded-md outline-none w-full lg:w-[25vw]'
          type="search"
          name="search"
          placeholder='Search Food'
          onChange={searchFood}
        />
      </div>
    </nav>
  );
};
