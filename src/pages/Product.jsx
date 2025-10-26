import CarCard from "../components/CarCard";
import { cars } from "../data/carsData";
import { Helmet } from "react-helmet";

export default function Product() {
  return (
    <div className="min-h-screen px-4 sm:px-8 lg:p-25 py-16 bg-gradient-to-b from-black via-purple-950/20 to-black text-white">
      <Helmet>
        <title>Cars - VintEdge</title>
      </Helmet>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-400 mb-8 text-center">
        Explore Vintage Cars
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
