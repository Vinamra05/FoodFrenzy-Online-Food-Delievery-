import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          Made with ❤️ by Vinamra
        </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} FoodFrenzy. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="text-gray-200 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-200 hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="about" className="text-gray-200 hover:text-white transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
