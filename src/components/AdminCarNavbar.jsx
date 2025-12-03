import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminCarLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black text-white">
      {/* Car secondary navbar */}
      <nav className="flex overflow-x-auto whitespace-nowrap lg:justify-start justify-center items-center px-4 sm:px-14 py-4 bg-black/50 backdrop-blur-md border-b border-purple-700/40 shadow-md rounded-b-lg mt-[-30px]">
        <div className="flex gap-4 sm:gap-6 text-lg font-mono">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Photos
          </NavLink>
        </div>
      </nav>

      {/* Outlet for nested pages */}
      <div className="p-4 sm:p-6 pt-6 sm:pt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminCarLayout;
