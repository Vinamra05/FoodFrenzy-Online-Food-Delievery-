import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  return (
    <>
      <div
        className={`fixed  right-0 top-0 w-full lg:w-[30vw] bg-white h-full   p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out z-50`}
      >
        <div className="flex flex-row justify-between items-center my-2">
          <span className="text-xl text-gray-800 font-bold ">My Order</span>
          <IoMdClose
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            className="border-gray-600 text-gray-600 font-bold border-2 hover:border-red-300 hover:text-red-500 p-1 text-2xl rounded-md cursor-pointer "
          />
        </div>

        { cartItems.length > 0 ?  cartItems.map((food) => {
          return (
               <ItemCard key={food.id}
                 id={food.id} 
                 name={food.name}
                 price={food.price}
                 img={food.img}
                 qty={food.qty}

          />
          );
        }) : <h2 className=" mt-5  text-center text-xl font-bold text-gray-800" >Hey, Your cart is empty!! Order Now... </h2> }

        <div className="absolute bottom-0 ">
          <h3 className="text-gray-800 font-semibold">Items:</h3>
          <h3 className="text-gray-800 font-semibold">Total Amount:</h3>

          <hr className="w-[90vw] lg:w-[28vw] my-2" />
          <button className="bg-green-500 font-bold px-3 py-2 w-[90vw] lg:w-[28vw] rounded-md text-white mb-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="rounded-full shadow-md bg-white text-5xl p-3 fixed bottom-10 right-4 cursor-pointer"
      />
    </>
  );
};

export default Cart;
