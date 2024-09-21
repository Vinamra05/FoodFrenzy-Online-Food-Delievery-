import React, {  useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

 
  const goToItem = (categoryPath) => {
    
    navigate(`/${categoryPath}`);
  };

  
  const nextSlide = () => {
    if (categories.length - 8 === slide) return false;
    setSlide(slide + 3);
  };

  
  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex my-3 items-center justify-between">
          <div className="text-[25px] font-bold font-serif">
            Hey, Wanna Eat? What are you waiting for!
          </div>
          <div className="flex">
            <div
              className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden ">
          {categories.map((cat, index) => {
            return (
              <div
                style={{ transform: `translateX(-${slide * 100}%) ` }}
                key={index}
                className="w-[150px] shrink-0  duration-500 cursor-pointer catitem"
                onClick={() => goToItem(cat.path)} 
              >
                <img src={cat.image} alt={cat.path} />
              </div>
            );
          })}
        </div>
        <hr className="my-4 border-[1px]" />
      </div>
    </>
  );
};

export default Category;
