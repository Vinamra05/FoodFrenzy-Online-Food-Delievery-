
import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
  <h2 className="text-4xl font-bold text-green-600 mb-4">
    Order Confirmed! 🎉
  </h2>
  <p className="text-lg text-gray-700 mb-6">
    Your delicious feast is on its way... or at least, it would be if this were real! 🍕
  </p>
  <p className="text-sm text-gray-500">
    For now, you can sit back, relax, and dream of all the tasty dishes you just "ordered." 😄
  </p>
</div>

      )}
    </div>
  );
};

export default Success;