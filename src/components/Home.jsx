import React from "react";
import { useOutletContext } from "react-router-dom";
import Restro from "./Restro";
import Category from "./Category";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer"

const Home = () => {
  const handleToast =(name)=>{
    toast.success(`Added ${name} to cart`,{
      duration: 3000,
    });
  }
    
    
  
  const { filteredRestro, setFilteredRestro, categories, isLoading } =
    useOutletContext();
  return (
    <>
      <Toaster  position="top-center" reverseOrder={false} />
      <div>
        <Category categories={categories} />
        <Restro
          restro={filteredRestro}
          setRestro={setFilteredRestro}
          isLoading={isLoading}
          handleToast={handleToast}
        />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
