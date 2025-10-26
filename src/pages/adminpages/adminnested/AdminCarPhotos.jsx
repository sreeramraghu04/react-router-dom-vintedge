import React from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "../../../data/carsData";

const AdminCarPhotos = () => {
  const { id } = useParams();
  const car = cars.find((item) => Number(item.id) === Number(id));

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Side */}
      <div className="flex-1 bg-black/40 p-6 rounded-2xl border border-purple-700 shadow-lg">
        <img
          src={car.image}
          alt={car.name}
          className="rounded-xl w-full h-64 sm:h-80 object-cover mb-4"
        />
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
          {car.name}
        </h2>
        <p className="text-gray-300 mb-4">{car.description}</p>
        <div className="text-lg space-y-1">
          <p>
            Price: <span className="text-green-400">{car.price}</span>
          </p>
          <p>Range: {car.range}</p>
          <p>Year: {car.year}</p>
        </div>
        <Link
          to=".."
          relative="path"
          className="inline-block mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all"
        >
          ← Back to Cars List
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-black/30 p-6 rounded-2xl border border-purple-600 shadow-lg">
        <h3 className="text-2xl font-semibold text-purple-400 mb-4">
          Photo Gallery
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img
            src={car.image}
            alt={car.name}
            className="rounded-xl w-full h-40 sm:h-48 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCarPhotos;
