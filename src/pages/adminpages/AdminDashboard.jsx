import React, { useEffect, useState } from "react";
import { cars } from "../../data/carsData";

export default function AdminDashboard() {
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    setAllCars(cars); // Replace with API fetch later
  }, []);

  const totalIncome = allCars.reduce(
    (sum, car) =>
      sum + (car.income ? parseInt(car.income.replace(/\D/g, "")) : 0),
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-6 text-center">
        Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div className="bg-black/40 p-4 rounded-2xl border border-purple-700 shadow-lg text-center">
          <h2 className="text-purple-300 font-bold text-xl sm:text-2xl mb-2">
            Total Cars
          </h2>
          <p className="text-green-400 text-2xl sm:text-3xl font-semibold">
            {allCars.length}
          </p>
        </div>

        <div className="bg-black/40 p-4 rounded-2xl border border-purple-700 shadow-lg text-center">
          <h2 className="text-purple-300 font-bold text-xl sm:text-2xl mb-2">
            Total Income
          </h2>
          <p className="text-green-400 text-2xl sm:text-3xl font-semibold">
            ₹{totalIncome}
          </p>
        </div>

        <div className="bg-black/40 p-4 rounded-2xl border border-purple-700 shadow-lg text-center">
          <h2 className="text-purple-300 font-bold text-xl sm:text-2xl mb-2">
            Total Reviews
          </h2>
          <p className="text-green-400 text-2xl sm:text-3xl font-semibold">
            {allCars.length - 1}
          </p>
        </div>
      </div>

      {/* Latest Cars */}
      <h2 className="text-purple-300 font-bold text-2xl sm:text-3xl mb-4">
        Latest Cars
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {allCars.map((car) => (
          <div
            key={car.id}
            className="bg-black/40 p-4 rounded-2xl border border-purple-700 shadow-lg hover:scale-105 transition-all"
          >
            <img
              src={car.image}
              alt={car.name}
              className="rounded-xl mb-3 w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <h3 className="text-xl font-bold text-purple-300">{car.name}</h3>
            <p className="text-gray-400">{car.range}</p>
            <p className="text-green-400 font-semibold">{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
