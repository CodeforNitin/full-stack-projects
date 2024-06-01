import React from 'react'
import {FaStar} from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'

const FoodCard = ({id, name, price, desc, rating, img, handleToast}) => {

  const dispatch = useDispatch();

  return (
    <div className='w-[250px] p-5 bg-white font-bold flex flex-col rounded-lg'>
        <img src={img} alt=""
         className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out mb-5'></img>
         <div className='text-sm flex justify-between'>
            <h2>{name}</h2>
            <span className='text-green-500'>₹{price}</span>
         </div>
         <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
         <div className='flex justify-between'>
            <span className='flex justify-center items-center'><FaStar className='mr-1 text-yellow-400'/> {rating}</span>
            <button onClick={()=>{
              dispatch(
                addToCart({id, name, price, rating, img, qty:1 }));
                handleToast(name);
              }
            }
              
            className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to Cart</button>
         </div>
    </div>
  )
}

export default FoodCard