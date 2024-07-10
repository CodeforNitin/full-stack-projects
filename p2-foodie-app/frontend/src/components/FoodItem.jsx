import React, { useState } from 'react'
import FoodCard from './FoodCard';
import FoodData from './../data/FoodData';
import toast, {Toaster} from 'react-hot-toast'

const FoodItem = ({searchData}) => {

  const handleToast = (name) => toast.success(`Added ${name} to Cart`)
  return (
    <>
    <Toaster position='top-center' reverseOrder={false} />
    <div className='flex flex-wrap lg:justify-evenly mx-[6px] my-10'>
        {
            searchData.length > 0 ? searchData.map((food)=>{
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
               }) : (<div>
                <p>No food found</p>
                </div>)
        }
    </div>

  </>
  )
}

export default FoodItem