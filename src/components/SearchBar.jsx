import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../data/carsData";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <fieldset className="flex flex-col items-center gap-3">
      {/* Search Input */}
      <div>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          name="SearchBar"
          placeholder="Search Your Brands...."
          className="w-64 sm:w-80 py-2 pl-5 text-sm rounded-md border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-100 dark:text-gray-800"
        />
      </div>

      {/* Brand Buttons */}
      <div className="flex gap-3 mt-2">
        <Link to={cars.brand === "Ford"}>
          <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
            Ford
          </button>
        </Link>

        <Link>
          <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
            Chevrolet
          </button>
        </Link>

        <Link>
          <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-100 transition">
            All Brands
          </button>
        </Link>
        
      </div>
    </fieldset>
  );
};

export default SearchBar;
