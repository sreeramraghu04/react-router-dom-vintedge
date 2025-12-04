import CarCard from "../components/CarCard";
import { cars } from "../data/carsData";
import { Helmet } from "react-helmet";
import SearchBar from "../components/SearchBar";
import TypeBar from "../components/TypeBar";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Product() {
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
    <div className="min-h-screen px-4 sm:px-8 lg:p-25 py-16 bg-gradient-to-b from-black via-purple-950/20 to-black text-white">
      <Helmet>
        <title>Cars - VintEdge</title>
      </Helmet>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-400 mb-8 text-center">
        Explore Vintage Cars
      </h1>
      <div
        className="mt-12 w-full max-w-4xl mx-auto
          bg-white/10 backdrop-blur-md 
          rounded-2xl shadow-xl border border-white/20 
          p-6 sm:p-8 mb-10"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          {/* Search Bar */}
          <div className="flex-1">
            <SearchBar
              setSearchTerm={setSearchTerm}
              generateBrandSearchParamsString={generateBrandSearchParamsString}
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
  );
}
