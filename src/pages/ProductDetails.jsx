import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../data/carsData";
import { Helmet } from "react-helmet";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car)
    return <p className="text-center text-red-500 mt-20">Car not found!</p>;

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:p-25 py-16 bg-gradient-to-b from-black via-purple-950/20 to-black text-white">
      <Helmet>
        <title>{car.name} - VintEdge</title>
      </Helmet>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 sm:px-5 sm:py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm sm:text-base font-medium transition-all shadow-sm hover:shadow-gray-600/50"
      >
        ← Back
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Car Image */}
        <div className="lg:w-1/2">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Car Details */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-400">
            {car.name}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">{car.range}</p>
          <p className="text-red-400 font-semibold text-base sm:text-lg">
            {car.price}
          </p>

          <button className="mt-4 px-6 py-3 sm:px-8 sm:py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-green-600/30">
            Buy Now
          </button>

          <div className="mt-6">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2">
              Description
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {car.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
