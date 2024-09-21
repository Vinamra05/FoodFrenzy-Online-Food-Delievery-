import React from "react";
import { useRouteError, Link, useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const errorMessage = error.statusText || error.message;
  const errorStatus = error.status || 500;

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-[250px] text-[#333] bg-[#f4f4f9] p-[50px] text-center">
      <div className=" py-4 px-6 rounded-md ">
        <h1 className=" mb-[20px] text-[#ff4c4c] text-[2.5em] font-bold font-serif">
          {/* Oops! Something went wrong. */}
          We're Working on it... Sorry,for the Inconvineance
        </h1>
        <p className="mb-[10px] text-[1.2em]">
          We couldn't load the page you requested.
        </p>
        <p className="mb-[20px] text-[#888]">
          <strong>Error {errorStatus}:</strong> {errorMessage}
        </p>

        <p className="mb-3 text-[1em] ">
          You can try refreshing the page, or go back to the{" "}
          <Link to="/" className="text-blue-500 ">
            homepage
          </Link>
          . If the problem persists, please contact our support team.
        </p>
        <button
          className="bg-[#cc5500] text-white py-[10px] px-[20px] rounded-md hover:bg-[#b14e00] cursor-pointer  transform hover:scale-[1.05] transition-transform duration-300"
          onClick={handleGoHome}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Error;
