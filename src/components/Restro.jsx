import React from "react";
import Shimmer from "./Shimmer";
// import FoodData from "../../publizac/reslist.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const RestaurantCard = ({ restro,setRestro,isLoading}) => {
  const dispatch=useDispatch();
  if(isLoading) return <Shimmer/>
  

  return restro.length === 0 ? (
    <div className="text-center font-bold text-orange-500 text-lg">
      Item not found, Search for others.
    </div>
  ) : (
    <>
      <div className="max-w-[1150px] flex  mx-auto justify-between items-center mb-2">
          <div className="hidden  md:block">
            <div className="text-[25px] font-bold font-serif">
            Here are Some Best Picks for U!!
            </div>
          </div>
          
          <div className=" btns flex gap-3 scroll-smooth  lg:overflow-x-hidden overflow-x-scroll">
          <button className="px-3 py-1  bg-gray-200 font-serif font-semibold rounded-lg hover:bg-green-500 hover:text-white">All</button>
          <button
          className="px-3 py-1  bg-gray-200 font-serif font-semibold rounded-lg hover:bg-green-500 hover:text-white"
          onClick={() => {
            const filteredres = restro.filter((res) => res.rating > 4);
            setRestro(filteredres);
          }}
        >
          Ratings 4⭐+
        </button>
          <button className="px-3 py-1  bg-gray-200 font-serif font-semibold rounded-lg hover:bg-green-500 hover:text-white">Breakfast</button>
          <button className="px-3 py-1  bg-gray-200 font-serif font-semibold rounded-lg hover:bg-green-500 hover:text-white">Lunch</button>
          <button className="px-3 py-1  bg-gray-200 font-serif font-semibold rounded-lg hover:bg-green-500 hover:text-white">Dinner</button>
          <button className="px-3 py-1  bg-gray-200 font-serif font-semibold rounded-lg hover:bg-green-500 hover:text-white">Snacks</button>
        </div>
    
      </div>
      <hr className="my-4 border-[1px] max-w-[1150px]  mx-auto " />

      <div className="max-w-[1100px] mx-auto flex gap-7 flex-wrap justify-center items-center mb-4">
        {restro.map((res, index) => (
          <div key={index} className="res-card w-[250px] bg-white p-3 flex flex-col rounded-lg  font-serif tracking-tighter">
            <img className="res-image  w-auto h-[130px] " src={res.image} alt="res-image" />
            <div  className="text-sm flex justify-between mt-3" >
            <h3 className="text-xl font-semibold">{res.title}</h3>
              <span className="text-green-500 text-xl" >{res.price}</span>
            </div>
            <p className="res-special-dish text-sm font-normal mt-2 ">
              {res.desc.slice(0,50)}....
            </p>
            <h4 className="res-delivery-time text-[15px] font-normal">
              {res.minTime}-{res.maxTime} minutes
            </h4>
            <div className="flex justify-between" >
              <span className="text-xl font-medium">{res.rating}⭐</span>
              <button   onClick={() => {
                  dispatch(
                    addToCart({
                      id: res.id,
                      name: res.title,
                      price: res.price,
                      rating: res.rating,
                      qty: 1,
                      img:res.image,
                    })
                  );
              }}   className="p-2 text-white bg-green-500 hover:bg-green-700 rounded-lg  text-sm " > Add to Cart</button>
            </div>

            {/* <h4 className="res-rating text-[16px] font-medium">{res.rating}⭐</h4>
            <h4 className="text-[18px] font-normal">{res.offer}</h4>
             */}
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantCard;
