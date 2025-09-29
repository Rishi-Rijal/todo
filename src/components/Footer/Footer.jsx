import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer({
    className
}) {
  return (
    <footer className={`bg-white/70 backdrop-blur-md border-t border-gray-200 mt-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full shadow-md" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">
              Rishi-Todo
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 transition">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</Link>
            <Link to="/privacy" className="text-gray-600 hover:text-indigo-600 transition">Privacy</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center space-x-5">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/your-username/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="font-semibold">MyApp</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
