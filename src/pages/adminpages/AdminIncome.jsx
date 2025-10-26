import React from "react";
import { cars } from "../../data/carsData";
import { Link } from "react-router-dom";

export default function AdminIncome() {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-300 text-center">
        Income Reference
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-black/40 p-4 rounded-2xl border border-purple-700 shadow-lg hover:scale-105 transition-all flex flex-col"
          >
            <img
              src={car.image}
              alt={car.name}
              className="rounded-xl mb-3 w-full h-48 sm:h-56 md:h-64 object-cover"
            />
            <h3 className="text-xl font-bold text-purple-300">{car.name}</h3>
            <p className="text-gray-400">{car.range}</p>
            <p className="text-gray-400 font-semibold">
              Income: <span className="text-orange-400">{car.income || "₹0"}</span>
            </p>
            <Link
              to={`${car.id}`}
              className="inline-block mt-3 px-4 py-2 w-full sm:w-auto bg-purple-600 rounded-lg hover:bg-purple-700 transition-all text-center"
            >
              View Income Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
