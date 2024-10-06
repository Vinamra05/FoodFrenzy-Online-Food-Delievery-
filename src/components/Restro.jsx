import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { setCategory } from "../redux/slices/CategorySlice";

const RestaurantCard = ({ restro, isLoading, handleToast }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  
  const [filteredRestro, setFilteredRestro] = useState(restro); // New state for filtered items

  // List unique categories for buttons
  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(restro.map((food) => food.category))];
    return uniqueCategories;
  };

  // Filter restaurant items based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredRestro(restro); // Show all items when "All" is selected
    } else if (selectedCategory === "Ratings") {
      const filteredRes = restro.filter((res) => res.rating > 4);
      setFilteredRestro(filteredRes); // Show filtered items for ratings
    } else {
      const filteredRes = restro.filter((res) => res.category === selectedCategory);
      setFilteredRestro(filteredRes); // Show filtered items for specific category
    }
  }, [selectedCategory, restro]);

  if (isLoading) return <Shimmer />;

  // Fetch unique categories once when the component mounts
  const categories = listUniqueCategories();

  return filteredRestro.length === 0 ? (
    <div className="text-center font-bold text-orange-500 text-lg">
      Item not found, Search for others.
    </div>
  ) : (
    <>
      <div className="max-w-[1150px] flex mx-auto justify-between items-center mb-2">
        <div className="hidden md:block">
          <div className="text-[25px] font-bold font-serif">
            Here are Some Best Picks for U!!
          </div>
        </div>

        <div className="btns flex gap-3 scroll-smooth lg:overflow-x-hidden overflow-x-scroll">
          <button
            className={`px-3 py-1 bg-gray-200 font-serif font-semibold rounded-lg hover:bg-green-500 hover:text-white ${
              selectedCategory === "Ratings" && "bg-green-500 text-white"
            }`}
            onClick={() => dispatch(setCategory("Ratings"))} // Set category to Ratings
          >
            Ratings 4⭐+
          </button>

          <button
            onClick={() => dispatch(setCategory("All"))}
            className={`px-3 py-1 bg-gray-200 font-serif font-semibold rounded-lg hover:bg-green-500 hover:text-white ${
              selectedCategory === "All" && "bg-green-500 text-white"
            }`}
          >
            All
          </button>

          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => dispatch(setCategory(category))}
              className={`px-3 py-1 bg-gray-200 font-serif font-semibold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <hr className="my-4 border-[1px] max-w-[1150px] mx-auto " />

      <div className="max-w-[1100px] mx-auto flex gap-7 flex-wrap justify-center items-center mb-4">
        {filteredRestro.map((res, index) => (
          <div
            key={index}
            className="res-card w-[250px] bg-white p-3 flex flex-col rounded-lg font-serif tracking-tighter"
          >
            <img
              className="res-image w-auto h-[130px]"
              src={res.image}
              alt="res-image"
            />
            <div className="text-sm flex justify-between mt-3">
              <h3 className="text-xl font-semibold">{res.title}</h3>
              <span className="text-green-500 text-xl">{res.price}</span>
            </div>
            <p className="res-special-dish text-sm font-normal mt-2">
              {res.desc.slice(0, 50)}....
            </p>
            <h4 className="res-delivery-time text-[15px] font-normal">
              {res.minTime}-{res.maxTime} minutes
            </h4>
            <div className="flex justify-between">
              <span className="text-xl font-medium">{res.rating}⭐</span>
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: res.id,
                      name: res.title,
                      price: res.price,
                      rating: res.rating,
                      qty: 1,
                      img: res.image,
                    })
                  );
                  handleToast(res.title);
                }}
                className="p-2 text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantCard;
