import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import SimpleSlider from "../components/Banner";
import SearchBar from "../components/SearchBar";
import { cars } from "../data/carsData";
import CarCard from "../components/CarCard";
import { useState } from "react";
import TypeBar from "../components/TypeBar";

export default function Home() {
  const [searchparams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const brandFilter = searchparams.get("brand");
  const typeFilter = searchparams.get("type");

  const generateBrandSearchParamsString = (key, value) => {
    const bsp = new URLSearchParams(searchparams);
    value === null ? bsp.delete(key) : bsp.set(key, value);
    return `?${bsp.toString()}`;
  };

  const generateTypeSearchParamsString = (key, value) => {
    const tsp = new URLSearchParams(searchparams);
    value === null ? tsp.delete(key) : tsp.set(key, value);
    return `?${tsp.toString()}`;
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      <Helmet>
        <title>Home - VintEdge</title>
      </Helmet>

      {/* Background Banner */}
      <div className="absolute inset-0">
        <SimpleSlider />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 md:px-12">
        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-purple-400 drop-shadow-xl">
          Welcome to VintEdge ⚡
        </h1>

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-lg md:text-xl lg:text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed font-mono">
          Where timeless craftsmanship meets futuristic innovation. Discover the
          world of vintage cars — reimagined for today’s generation.
        </p>

        {/* BUTTON */}
        <Link
          to="/cars"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700
          rounded-full text-base sm:text-lg md:text-xl font-semibold transition-all
          duration-300 shadow-lg hover:shadow-purple-600/30 font-mono"
        >
          Explore Cars
        </Link>

        {/* FILTER BOX */}
        <div
          className="mt-12 w-full max-w-4xl mx-auto
          bg-white/10 backdrop-blur-md 
          rounded-2xl shadow-xl border border-white/20 
          p-6 sm:p-8"
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

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>

            {/* Type Bar */}
            <div className="flex-1">
              <TypeBar
                generateTypeSearchParamsString={generateTypeSearchParamsString}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CAR GRID SECTION */}
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
}
