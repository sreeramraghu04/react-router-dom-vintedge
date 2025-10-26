import { Link } from "react-router-dom";

export default function AdminCarCard({ car }) {
  return (
    <div className="bg-black/40 p-4 rounded-2xl border border-purple-700 shadow-lg hover:scale-105 transition-all flex flex-col">
      <div className="w-full overflow-hidden rounded-xl mb-3">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold text-purple-300">{car.name}</h3>
      <p className="text-gray-400">{car.range}</p>
      <p className="text-gray-400 font-semibold">
        Price: <span className="text-green-400">{car.price}</span>
      </p>
      <Link
        to={`${car.id}`}
        className="mt-3 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all text-center"
      >
        View Car Details
      </Link>
    </div>
  );
}
