import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import navLogo from "../assets/nav-logo.png";
import bgImage from "../assets/background.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full shadow-md z-30 transition-colors duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-3 md:px-16">
          {/* Logo */}
          <Link to="/">
            <img
              src={navLogo}
              alt="Logo"
              className="h-12 md:h-14 transition-all duration-300"
              style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-5 font-inter text-base">
              {["home", "about", "practice", "courses", "internship", "contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "home" ? "/" : `/${item}`}
                      className={`cursor-pointer transition-colors duration-300 ${
                        darkMode ? "text-white hover:text-yellow-300" : "text-black hover:text-purple-700"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Dark Mode Toggle */}
            <div
              className={`w-10 h-5 rounded-full flex items-center p-1 cursor-pointer transition-all ${
                darkMode ? "bg-yellow-400" : "bg-purple-700"
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] transition-transform ${
                  darkMode
                    ? "translate-x-5 bg-yellow-400 text-black"
                    : "bg-[#1a084b] text-white"
                }`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </div>
            </div>

            {/* User Icon */}
            <button
              onClick={() => setModalOpen(true)}
              className={`flex items-center justify-center w-9 h-9 rounded-full border-2 transition-colors ${
                darkMode
                  ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  : "border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white"
              }`}
            >
              <FaUser size={16} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden text-xl ${
              darkMode ? "text-white" : "text-black"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden fixed inset-0 flex flex-col items-center justify-center space-y-6 z-20 transition-colors duration-300 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <button
            className="absolute top-6 right-6 text-xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col items-center gap-5 font-inter text-lg">
            {["home", "about", "practice", "courses", "internship", "contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={item === "home" ? "/" : `/${item}`}
                    onClick={() => setMenuOpen(false)}
                    className={`cursor-pointer transition-colors duration-300 ${
                      darkMode ? "text-white hover:text-yellow-300" : "text-black hover:text-purple-700"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div
            className={`rounded-2xl shadow-lg w-96 p-6 relative transition-colors duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setModalOpen(false)}
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Login / Signup</h2>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                className={`p-2 rounded-lg border focus:outline-none transition-colors duration-300 ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300 bg-gray-100 text-black"
                }`}
              />
              <input
                type="password"
                placeholder="Password"
                className={`p-2 rounded-lg border focus:outline-none transition-colors duration-300 ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300 bg-gray-100 text-black"
                }`}
              />
              <button
                type="submit"
                className={`py-2 rounded-lg transition-colors duration-300 ${
                  darkMode
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-purple-700 text-white hover:bg-purple-800"
                }`}
              >
                Continue
              </button>
            </form>
            <p className="text-center text-sm mt-3">
              Don’t have an account?{" "}
              <span className="text-purple-700 cursor-pointer">Sign Up</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
