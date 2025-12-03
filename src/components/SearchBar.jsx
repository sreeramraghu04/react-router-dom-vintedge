import React from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ setSearchTerm, generateBrandSearchParamsString }) => {
  return (
    <fieldset className="w-full flex flex-col items-center gap-4">
      {/* Search Input */}
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="search"
        placeholder="Search your brands..."
        className="
          w-full py-3 px-5 rounded-xl text-sm font-medium
          bg-white/20 backdrop-blur-md text-white placeholder-gray-300
          border border-white/30 shadow-md
          focus:outline-none focus:ring-2 focus:ring-purple-400
        "
      />

      {/* Brand Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <Link to={generateBrandSearchParamsString("brand", "ford")}>
          <button
            className="
            px-5 py-2 rounded-full text-sm font-semibold
            bg-purple-600 text-white
            hover:bg-purple-700 transition-all duration-300
            shadow-md hover:shadow-purple-500/40
          "
          >
            Ford
          </button>
        </Link>

        <Link to={generateBrandSearchParamsString("brand", "chevrolet")}>
          <button
            className="
            px-5 py-2 rounded-full text-sm font-semibold
            bg-purple-600 text-white
            hover:bg-purple-700 transition-all duration-300
            shadow-md hover:shadow-purple-500/40
          "
          >
            Chevrolet
          </button>
        </Link>

        <Link to={generateBrandSearchParamsString("brand", null)}>
          <button
            className="
            px-5 py-2 rounded-full text-sm font-semibold
            border border-purple-400 text-purple-300
            hover:bg-purple-500/20 transition-all duration-300
          "
          >
            All Brands
          </button>
        </Link>
      </div>
    </fieldset>
  );
};

export default SearchBar;
