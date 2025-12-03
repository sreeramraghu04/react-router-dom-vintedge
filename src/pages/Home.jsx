import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import SimpleSlider from "../components/Banner";
import SearchBar from "../components/SearchBar";
import { cars } from "../data/carsData";
import CarCard from "../components/CarCard";
import { useState } from "react";
import TypeBar from "../components/TypeBar";

export default function Home() {
  const [searchparams, setSearchparams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");

  const brandFilter = searchparams.get("brand");

  const typeFilter = searchparams.get("type");

  //* initializing a new url serachparams with a value of all brand searchparams
  const generateBrandSearchParamsString = (key, value) => {
    const bsp = new URLSearchParams(searchparams);
    if (value === null) {
      bsp.delete(key);
    } else {
      bsp.set(key, value);
    }
    /* console.log(sp.toString()); */
    return `?${bsp.toString()}`;
  };

  //* initializing a new url serachparams with a value of all type searchparams
  const generateTypeSearchParamsString = (key, value) => {
    const tsp = new URLSearchParams(searchparams);
    if (value === null) {
      tsp.delete(key);
    } else {
      tsp.set(key, value);
    }
    /* console.log(sp.toString()); */
    return `?${tsp.toString()}`;
  };

  return (
    <div className="relative w-full overflow-hidden text-white">
      <Helmet>
        <title>Home - VintEdge</title>
      </Helmet>

      {/* Banner */}
      <div className="absolute inset-0">
        <SimpleSlider />
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* overlay */}
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-12 mt-30">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-purple-400 drop-shadow-lg">
          Welcome to VintEdge⚡
        </h1>

        <p className="text-sm sm:text-lg md:text-xl lg:text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed font-mono">
          Where timeless craftsmanship meets futuristic innovation. Discover the
          world of vintage cars — reimagined for today’s generation.
        </p>

        <Link
          to="/cars"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-600/30 font-mono"
        >
          Explore Cars
        </Link>
        {/* Professional Search + Filter Box */}
        <div
          className="
  mt-12 w-full max-w-4xl mx-auto
  bg-white/10 backdrop-blur-md 
  rounded-2xl shadow-xl border border-white/20 
  p-6 sm:p-8
"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            {/* Search Bar */}
            <div className="flex-1">
              <SearchBar
                setSearchTerm={setSearchTerm}
                generateBrandSearchParamsString={
                  generateBrandSearchParamsString
                }
              />
            </div>

            {/* Divider Line for large screens */}
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>

            {/* Type Bar */}
            <div className="flex-1">
              <TypeBar
                generateTypeSearchParamsString={generateTypeSearchParamsString}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cars &&
              cars
                .filter((car) => {
                  return searchTerm.toLowerCase() === ""
                    ? car
                    : car.brand.toLowerCase().includes(searchTerm);
                })
                .filter((car) => {
                  return brandFilter
                    ? car.brand.toLowerCase() === brandFilter
                    : car;
                })
                .filter((car) => {
                  return typeFilter
                    ? car.type.toLowerCase() === typeFilter
                    : car;
                })

                .map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
