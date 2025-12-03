import React from "react";
import { Link } from "react-router-dom";

const TypeBar = ({ generateTypeSearchParamsString }) => {
  return (
    <fieldset className="w-full flex flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-3">
        <Link to={generateTypeSearchParamsString("type", "luxury")}>
          <button
            className="
            px-5 py-2 rounded-full text-sm font-semibold
            border border-purple-400 text-purple-300
            hover:bg-purple-500/20 transition-all duration-300
          "
          >
            Luxury
          </button>
        </Link>

        <Link to={generateTypeSearchParamsString("type", "premium")}>
          <button
            className="
            px-5 py-2 rounded-full text-sm font-semibold
            border border-purple-400 text-purple-300
            hover:bg-purple-500/20 transition-all duration-300
          "
          >
            Premium
          </button>
        </Link>

        <Link to={generateTypeSearchParamsString("type", "low budget")}>
          <button
            className="
            px-5 py-2 rounded-full text-sm font-semibold
            border border-purple-400 text-purple-300
            hover:bg-purple-500/20 transition-all duration-300
          "
          >
            Low Budget
          </button>
        </Link>

        <Link to={generateTypeSearchParamsString("type", null)}>
          <button
            className="
            px-5 py-2 rounded-full text-sm font-semibold
            bg-purple-600 text-white
            hover:bg-purple-700 transition-all duration-300
            shadow-md hover:shadow-purple-500/40
          "
          >
            All Types
          </button>
        </Link>
      </div>
    </fieldset>
  );
};

export default TypeBar;
