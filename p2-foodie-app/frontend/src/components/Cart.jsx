import React , { useState} from 'react'
import { MdClose } from "react-icons/md";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';

import { FaShoppingCart } from "react-icons/fa";



const Cart = () => {

  const [activeCart, setActiveCart] = useState(true)
  const cartItems = useSelector((state) => state.cart.cart)
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
  const totalPrice = cartItems.reduce((total, item) => total+item.qty*item.price, 0)
  const totalItems = cartItems.reduce((totalItems, item) => totalItems+item.qty, 0)
  return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] bg-white p-5 h-full  ${activeCart ? "translate-x-0" : "translate-x-full"} z-50 transition-all duration-500`}>
        <div className="flex justify-between items-center my-3">
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <MdClose onClick={()=>setActiveCart(!activeCart)} className='border-2 border-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-300 cursor-pointer'/>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-800'>Items:${totalItems} </h3>
            <h3 className='font-semibold text-gray-800'>Total Amount: ${totalPrice}</h3>
            <hr className='w-[90vw] lg:[18vw] my-2'/> 
            <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-md w-[90vw] lg:w-[18vw] mb-5'> Checkout</button>
        </div>
    </div>

    <FaShoppingCart onClick = {() => setActiveCart(!activeCart)} 
    className={`rounded-full bg-white shadow-md text-4xl p-2 fixed bottom-4 right-4 ${totalQty >0 && "animate-bounce delay-500 transition-all"}`}/>
    {/* className="rounded-full bg-white shadow-md text-4xl p-2 fixed bottom-4 right-4"/> */}
        
    </>

  )
}

export default Cart