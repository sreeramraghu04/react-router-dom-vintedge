import React from "react";
import { cars } from "../../data/carsData";
import AdminCarCard from "../../components/AdminCarCard";
import { Link } from "react-router-dom";

const AdminAllCars = () => {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-300 text-center">
        Available Specs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cars.map((car) => (
          <Link key={car.id} to={`${car.id}`}>
            <AdminCarCard car={car} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminAllCars;
