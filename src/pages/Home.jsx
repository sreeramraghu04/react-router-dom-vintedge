import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import SimpleSlider from "../components/Banner";
import SearchBar from "../components/SearchBar";
import { cars } from "../data/carsData";
import CarCard from "../components/CarCard";
import { useState } from "react";

export default function Home() {
  const [searchparams, setSearchparams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  /* console.log(searchparams.get("brand")); */

  const brandFilter = searchparams.get("brand");
  console.log(brandFilter);

  return (
    <div className="relative w-full h- overflow-hidden text-white">
      <Helmet>
        <title>Home - VintEdge</title>
      </Helmet>

      {/* Banner */}
      <div className="absolute inset-0">
        <SimpleSlider />
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* overlay */}
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-12">
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
        {/* Search Bar */}
        <div className="mt-10">
          <SearchBar setSearchTerm={setSearchTerm} />
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

                .map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
