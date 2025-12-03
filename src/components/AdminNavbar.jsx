import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white">
      {/* Admin navbar (secondary navbar) */}
      <nav className="flex overflow-x-auto whitespace-nowrap lg:justify-start justify-center items-center px-4 sm:px-14 py-6 mt-[50px] bg-black/50 backdrop-blur-md border-b border-purple-700/40 shadow-md rounded-b-lg">
        <div className="flex gap-4 sm:gap-6 text-lg  font-mono">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Income
          </NavLink>
          <NavLink
            to="allcars"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Cars
          </NavLink>
          <NavLink
            to="review"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Review
          </NavLink>
        </div>
      </nav>

      {/* Admin content */}
      <div className="p-4 sm:p-6 pt-6 sm:pt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
