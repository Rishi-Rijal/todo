import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";   
import { logoutUser } from "../../api/user.api";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../features/login/loginSlice";

export default function Header({ className = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState(null);             
  const dispatch = useDispatch();
  const navigate = useNavigate();                       

  const isAuthenticated = useSelector((state) => state.login.status);

  const onLogout = async () => {
    try {
      const result = await logoutUser();
      console.log("✅ Logged out:", result);
      dispatch(logout());
      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <header className={`bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full shadow-md" />
            <Link
              to="/"
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500"
            >
              Rishi-Todo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-gray-800 hover:text-indigo-600 transition-colors font-medium"
            >
              Home
            </Link>

            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-4 py-2 rounded-md font-semibold shadow hover:opacity-90 transition"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <button
                onClick={onLogout}
                className="text-red-500 hover:text-red-600 font-medium transition"
              >
                Logout
              </button>
            )}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              {menuOpen ? (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 font-medium hover:text-indigo-600 transition"
            >
              Home
            </Link>

            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 font-medium hover:text-indigo-600 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 font-medium hover:text-indigo-600 transition"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onLogout();
                }}
                className="block w-full text-left text-red-500 font-medium hover:text-red-600 transition"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
