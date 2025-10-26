import React from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "../../../data/carsData";

export default function AdminIncomeChart() {
  const { id } = useParams();
  const car = cars.find((item) => Number(item.id) === Number(id));

  if (!car) {
    return (
      <div className="text-center mt-10 text-red-400">
        <h2>Car not found!</h2>
        <Link
          to="/income"
          className="text-purple-500 hover:underline mt-4 inline-block"
        >
          ← Back to Income List
        </Link>
      </div>
    );
  }

  const monthlyIncome = [
    { month: "Jan", amount: 1200 },
    { month: "Feb", amount: 1500 },
    { month: "Mar", amount: 1000 },
    { month: "Apr", amount: 1800 },
    { month: "May", amount: 1600 },
    { month: "Jun", amount: 2000 },
  ];

  const totalIncome = monthlyIncome.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side */}
        <div className="lg:w-1/2 bg-black/40 p-4 rounded-2xl border border-purple-700 shadow-lg">
          <img
            src={car.image}
            alt={car.name}
            className="rounded-xl mb-3 w-full h-64 sm:h-80 object-cover"
          />
          <h2 className="text-2xl font-bold text-purple-300">{car.name}</h2>
          <p className="text-gray-400">{car.range}</p>
          <p className="text-green-400 font-semibold">{car.price}</p>
          <p className="mt-2 text-green-400 font-semibold">
            Total Income: ${totalIncome}
          </p>
          <Link
            to=".."
            relative="path"
            className="inline-block mt-4 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
          >
            ← Back to Income List
          </Link>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 bg-black/30 p-4 rounded-2xl border border-purple-600 shadow-lg">
          <h3 className="text-xl font-bold text-purple-300 mb-4">
            Monthly Income Breakdown
          </h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-purple-700">
                <th className="py-2 px-3 text-gray-200">Month</th>
                <th className="py-2 px-3 text-gray-200">Amount ($)</th>
              </tr>
            </thead>
            <tbody>
              {monthlyIncome.map((item) => (
                <tr
                  key={item.month}
                  className="border-b border-purple-800 hover:bg-purple-900/20 transition-all"
                >
                  <td className="py-2 px-3 text-gray-300">{item.month}</td>
                  <td className="py-2 px-3 text-green-400 font-semibold">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 h-48 flex items-center justify-center text-gray-500 border border-purple-600 rounded-lg">
            [Chart Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
