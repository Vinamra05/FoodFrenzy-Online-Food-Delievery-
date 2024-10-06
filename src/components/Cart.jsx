import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const [showCartIcon, setShowCartIcon] = useState(true); // State for cart icon visibility
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((totalP, item) => {
    const numericPrice = Number(item.price.replace("₹", ""));
    return totalP + item.qty * numericPrice;
  }, 0);

  const navigate = useNavigate();

  // When cart items change, show the cart icon if there are items in the cart
  useEffect(() => {
    if (cartItems.length > 0) {
      setShowCartIcon(true); // Show the cart icon again if there are items in the cart
    }
  }, [cartItems]);

  const handleCheckout = () => {
    setActiveCart(false); // Close the cart
    setShowCartIcon(false); // Hide the cart icon after checkout
    navigate("/success"); // Navigate to the success page
  };

  return (
    <>
     {activeCart && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
      )}
      <div
        className={`fixed right-0 top-0 w-full lg:w-[30vw] bg-white h-full p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out z-50`}
      >
        <div className="flex flex-row justify-between items-center my-2">
          <span className="text-xl text-gray-800 font-bold ">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-gray-600 text-gray-600 font-bold border-2 hover:border-red-300 hover:text-red-500 p-1 text-2xl rounded-md cursor-pointer"
          />
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
          <h2 className="mt-5 text-center text-xl font-bold text-gray-800">
           Oohh!! You forgot to add something into the cart.
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="text-gray-800 font-semibold">Items: {totalQty}</h3>
          <h3 className="text-gray-800 font-semibold">
            Total Amount: ₹ {totalPrice}
          </h3>

          <hr className="w-[90vw] lg:w-[28vw] my-2" />
          <button
            onClick={handleCheckout} 
            disabled={totalQty === 0} 
            className={`${
              totalQty === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"
            } font-bold px-3 py-2 w-[90vw] lg:w-[28vw] rounded-md text-white mb-5`}
          >
             {totalQty === 0 ? "Add items to checkout" : "Checkout"}
          </button>
        </div>
      </div>

      {showCartIcon && (
        <FaShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className={`rounded-full shadow-md bg-white text-5xl p-3 fixed bottom-10 right-4 cursor-pointer ${
            totalQty > 0 && "animate-bounce delay-500 transition-all"
          } `}
        />
      )}
    </>
  );
};

export default Cart;
