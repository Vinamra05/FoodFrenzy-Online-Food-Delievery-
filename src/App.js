import React, { useState, useEffect } from "react";
import Header from "./components/Header";
// import Restro from "./components/Restro";
// import Category from "./components/Category";
import Cart from "./components/Cart";
import { Outlet } from "react-router-dom";

const App = () => {
  const [restro, setRestro] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  const fetchRestro = async () => {
    const response = await fetch("/reslist.json");
    const data = await response.json();
    setRestro(data);
    setFilteredRestro(data);
    setIsLoading(false);
  };


  const fetchCategory = async () => {
    const response = await fetch("/res.json");
    const data = await response.json();
    setCategories(data);
  };

  
  useEffect(() => {
    fetchRestro();
    fetchCategory();
  }, []);

  return (
    <>
      <Header restro={restro} setFilteredRestro={setFilteredRestro} />

      {/* The content for each route will be rendered inside Outlet */}
      {/* Pass necessary props to the children via context or props if needed */}
      <Outlet 
        context={{ 
          restro, 
          filteredRestro, 
          setFilteredRestro, 
          categories, 
          isLoading 
        }} 
      />
      <Cart />
    </>
  );
};

export default App;
