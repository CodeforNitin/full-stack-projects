import React from 'react';
import FoodCard from './FoodCard';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";


const FoodItem = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const searchVal = useSelector(state => { return state.search.search}); 
  // const searchVal = useSelector(state => state.search.search); 
  // const searchVal = useSelector(state => {state.search.search}); 

  console.log('I am in fooditem', searchVal);

  const handleToast = (name) => toast.success(`Added ${name} to Cart`);

  // Filter the searchData based on the selected category
  const filteredData = selectedCategory === "All"
    ? searchVal
    : searchVal.filter((food) => food.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='flex flex-wrap lg:justify-evenly mx-[6px] my-10'>
        {
          filteredData.length > 0 ? filteredData.map((food) => {
            return <FoodCard 
              key={food.id} 
              id={food.id} 
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}    
              handleToast={handleToast}
            />
          }) : (
            <div>
              <p>No food found</p>
            </div>
          )
        }
      </div>
    </>
  );
}

export default FoodItem;
