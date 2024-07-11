import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty, removeFromCart } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({id, name, price, img, qty}) => {

  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete onClick={()=>{dispatch(removeFromCart({id}));
        toast(`${name} Removed!`,{
        icon:"👋",
        });
      }}
        className="absolute right-6  text-gray-600 cursor-pointer"
      />
        <img src={img} alt="" className="w-[50px] h-[50px] mt-3 " />
      <div className="leading-5">
        <h2 className=" text-sm font-bold mt-3 text-gray-800 mb-2">{name}</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-1 absolute right-7">
            <AiOutlineMinus onClick={()=> qty>1 ? dispatch(decrementQty({id})) : (qty=0)}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus onClick={()=> qty>0 ? dispatch(incrementQty({id})) : (qty=0)}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;