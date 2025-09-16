
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaUser, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import navLogo from "../assets/nav-logo.png";
import bigLogo from "../assets/big-logo.png";
import bgImage from "../assets/background.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      style={{
        backgroundImage: !darkMode ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="container mx-auto flex justify-between items-center px-6 py-6 md:px-20">
          {/* Logo */}
          <img
            src={navLogo}
            alt="Logo"
            className="h-16 md:h-20 transition-all duration-300"
            style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
          />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 font-inter text-lg">
              {["home", "about", "practice", "courses", "internship", "contact"].map(
                (item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      className="cursor-pointer hover:text-purple-700"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </ScrollLink>
                  </li>
                )
              )}
            </ul>

            {/* Dark Mode Toggle */}
            <div
              className={`w-12 h-6 rounded-full flex items-center p-1 cursor-pointer transition-all ${
                darkMode ? "bg-yellow-400" : "bg-purple-700"
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-transform ${
                  darkMode
                    ? "translate-x-6 bg-yellow-400 text-black"
                    : "bg-[#1a084b] text-white"
                }`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </div>
            </div>

            {/* User Icon */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition-colors"
            >
              <FaUser size={18} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center space-y-6 z-50">
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-2xl text-black dark:text-white"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Links */}
            <ul className="flex flex-col items-center gap-6 font-inter text-lg">
              {["home", "about", "practice", "courses", "internship", "contact"].map(
                (item) => (
                  <li key={item}>
                    <ScrollLink
                      to={item}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      onClick={() => setMenuOpen(false)}
                      className="cursor-pointer hover:text-purple-500"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </ScrollLink>
                  </li>
                )
              )}
            </ul>

            {/* Dark Mode + User */}
            <div className="flex items-center gap-6 mt-6">
              {/* Dark Mode */}
              <div
                className={`w-12 h-6 rounded-full flex items-center p-1 cursor-pointer transition-all ${
                  darkMode ? "bg-yellow-400" : "bg-purple-700"
                }`}
                onClick={() => setDarkMode(!darkMode)}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-transform ${
                    darkMode
                      ? "translate-x-6 bg-yellow-400 text-black"
                      : "bg-[#1a084b] text-white"
                  }`}
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                </div>
              </div>

              {/* User */}
              <button
                onClick={() => {
                  setModalOpen(true);
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition-colors"
              >
                <FaUser size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col items-center justify-center text-center min-h-screen px-4 py-10 mb-20"
      >
        <img
          src={bigLogo}
          alt="Big Logo"
          className="mt-0 mb-0 w-4/5 md:w-3/5 lg:w-2/5 max-w-[900px] h-auto mx-auto transition-all duration-300"
          style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
        />
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 mb-0">
          Welcome to Amoha Codes
        </h2>
        <span className="font-ibarra text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-300 mt-1">
          "Empowering Dreams Through Education"
        </span>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-2xl shadow-lg w-96 p-6 relative">
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => setModalOpen(false)}
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">Login / Signup</h2>

            {/* Form */}
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded-lg border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
              >
                Continue
              </button>
            </form>

            <p className="text-center text-sm mt-4">
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
