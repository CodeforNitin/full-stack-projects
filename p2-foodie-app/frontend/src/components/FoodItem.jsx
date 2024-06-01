import React from 'react'
import FoodCard from './FoodCard';
import FoodData from './../data/FoodData';

const FoodItem = () => {
  return (
    <div className='flex flex-wrap lg:justify-evenly mx-[6px] my-10'>
        {
            FoodData.map((food)=>{
                return <FoodCard 
                    key={food.id} 
                    id={food.id} 
                    name={food.name}
                    price={food.price}
                    desc={food.desc}
                    rating={food.rating}
                    img={food.img}    
                />
               })
        }
    </div>
  )
}

export default FoodItem