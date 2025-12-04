import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const login = () => setIsLoggedIn(true);

  const logout = () => setIsLoggedIn(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-purple-400 font-semibold border-b-2 border-purple-500 pb-1 transition-all"
      : "text-gray-300 hover:text-purple-300 transition-all";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-purple-700/30 shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 h-25">
        <h1 className="text-2xl md:text-3xl font-extrabold text-purple-400 tracking-wide">
          VintEdge
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg items-center font-mono">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/admin" className={linkStyle}>
                Admin
              </NavLink>
              <NavLink to="/cars" className={linkStyle}>
                Cars
              </NavLink>
              <button
                onClick={logout}
                className="text-red-500 hover:text-red-400 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={login}
              className="text-red-500 hover:text-red-400 transition-all"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-purple-400 focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md border-t border-purple-700/30 shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-4 font-mono">
            <NavLink
              to="/"
              className={linkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={linkStyle}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/admin"
                  className={linkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Admin
                </NavLink>
                {/* <NavLink
                  to="/allcars"
                  className={linkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Cars
                </NavLink> */}
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="text-red-500 hover:text-red-400 transition-all text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  login();
                  setMenuOpen(false);
                }}
                className="text-red-500 hover:text-red-400 transition-all text-left"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
