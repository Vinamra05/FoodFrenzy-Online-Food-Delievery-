import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ restro, setFilteredRestro }) => {
  const [btnName, setBtnName] = useState("Sign in");
  const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false); // Close the menu when a nav item is clicked
  };

  return (
    <div className="header sticky top-0 h-16">
      <div className="logo-container flex items-center">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhScltw2qV-EsyvSj02HJCV3u__2X5dTqYLltnFFuLqFhmGhg5bwyUdsG9DB0XXn2UWE&usqp=CAU"
          alt="App Logo"
        />
        <div className="logo-name ml-2">
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
            setFilteredRestro(searchRes);
          }}
        >
          Search
        </button>
      </div>

      {/* Hamburger icon for mobile screens */}
      <div className="hamburger md:hidden" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Menu items for larger screens */}
      <div className="hidden md:flex items-center nav-items">
        <ul>
          <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleNavClick}>About Us</Link></li>
          <li
            onClick={() => {
              setBtnName((prev) => (prev === "Sign in" ? "Sign out" : "Sign in"));
              handleNavClick(); // Close menu on button click
            }}
            className="cursor-pointer"
          >
            {btnName}
          </li>
          
        </ul>
        <span className="current-date bg-gray-100 px-3 py-1 rounded-lg shadow-sm font-bold font-mono text-gray-700 hover:bg-blue-100 hover:text-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out">
              {new Date().toUTCString().slice(0, 16)}
            </span>
      </div>

      {/* Mobile menu items */}
      {isMenuOpen && (
        <div className="menu-items fixed top-16 left-0 right-0 bg-white shadow-lg p-4 md:hidden">
          <ul>
            <li>
              <Link to="/" onClick={handleNavClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavClick}>About Us</Link>
            </li>
            <li onClick={() => {
              setBtnName((prev) => (prev === "Sign in" ? "Sign out" : "Sign in"));
              handleNavClick(); // Close menu on button click
            }}>
              {btnName}
            </li>
            <li>
              <span className="current-date bg-gray-100 px-3 py-1 rounded-lg shadow-sm font-bold font-mono text-gray-700 hover:bg-blue-100 hover:text-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out">
                {new Date().toUTCString().slice(0, 16)}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
