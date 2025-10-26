import React from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "../../data/carsData";

export default function AdminCarReviews() {
  const { id } = useParams();
  const car = cars.find((item) => Number(item.id) === Number(id));

  const reviews = [
    { id: 1, user: "John Doe", comment: "Amazing vintage car!" },
    {
      id: 2,
      user: "Jane Smith",
      comment: "Beautiful design, very smooth ride.",
    },
    {
      id: 3,
      user: "Alex Johnson",
      comment: "A classic masterpiece, worth every penny!",
    },
  ];

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-300 text-center">
        Reviews
      </h2>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-black/40 p-4 rounded-xl border border-purple-700"
          >
            <h4 className="text-purple-300 font-semibold">{review.user}</h4>
            <p className="text-gray-300">{review.comment}</p>
          </div>
        ))}
      </div>

      <Link
        to=".."
        relative="path"
        className="inline-block mt-6 px-4 py-2 w-full sm:w-auto bg-gray-800 rounded-lg hover:bg-gray-700 transition-all text-center"
      >
        ← Back to Car List
      </Link>
    </div>
  );
}
