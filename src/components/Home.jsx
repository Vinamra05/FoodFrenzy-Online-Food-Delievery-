import React from "react";
import { useOutletContext } from "react-router-dom";
import Restro from "./Restro";
import Category from "./Category";

const Home = () => {
  const {  filteredRestro, setFilteredRestro, categories, isLoading } = useOutletContext();
  return (
    <div>
      <Category categories={categories} />
      <Restro restro={filteredRestro} setRestro={setFilteredRestro} isLoading={isLoading} />
    </div>
  );
};

export default Home;
