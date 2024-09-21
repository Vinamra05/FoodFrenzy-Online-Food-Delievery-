import React, { useState } from "react";
// import { BsMinecartLoaded } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ restro, setFilteredRestro }) => {
  const [btnName, setBtnName] = useState("Sign in");
  const [searchText, setSearchText] = useState("");

  return (
    <div className="header sticky top-0">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhScltw2qV-EsyvSj02HJCV3u__2X5dTqYLltnFFuLqFhmGhg5bwyUdsG9DB0XXn2UWE&usqp=CAU"
          alt="App Logo"
        />
        <div className="logo-name">
          <span className="letter">F</span>
          <span className="letter">o</span>
          <span className="letter">o</span>
          <span className="letter">d</span>
          <span className="letter">F</span>
          <span className="letter">r</span>
          <span className="letter">e</span>
          <span className="letter">n</span>
          <span className="letter">z</span>
          <span className="letter">y</span>
        </div>
      </div>
      <div className="search-container">
        <input
          value={searchText}
          type="text"
          className="search-input"
          placeholder="Search for restaurants or food..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            const searchRes = restro.filter((res) =>
              res.title.toLowerCase().includes(searchText.toLowerCase())
            );
            // if(searchRes)
            setFilteredRestro(searchRes);
          
          }}
        >
          Search
        </button>
      </div>
      <div className="nav-items flex items-center justify-center">
  <ul className="flex items-center space-x-2">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li
      onClick={() => {
        btnName === "Sign in"
          ? setBtnName("Sign out")
          : setBtnName("Sign in");
      }}
    >
      {btnName}
    </li>
   
  </ul>
  <li className="ml-1 list-none">
      <span className="current-date  bg-gray-100 px-3 py-1 rounded-lg shadow-sm font-bold font-mono text-gray-700 hover:bg-blue-100 hover:text-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out ">{ new Date().toUTCString().slice(0,16)}</span>
    </li>
</div>
    </div>
    
  );
};

export default Header;
