import React from "react";

const FilteredCars = () => {
  return (
    <div>
      <div className="relative z-20 mt-16 mb-12 px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cars &&
            cars
              .filter((car) =>
                searchTerm.trim() === ""
                  ? car
                  : car.brand.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .filter((car) =>
                brandFilter ? car.brand.toLowerCase() === brandFilter : car
              )
              .filter((car) =>
                typeFilter ? car.type.toLowerCase() === typeFilter : car
              )
              .map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      </div>
    </div>
  );
};

export default FilteredCars;
