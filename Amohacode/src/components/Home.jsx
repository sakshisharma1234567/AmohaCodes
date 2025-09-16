import React from "react";
import bigLogo from "../assets/big-logo.png";
import bgImage from "../assets/background.png";

const Home = ({ darkMode }) => {
  return (
    <div
      id="home"
      className={`flex flex-col items-center justify-center text-center min-h-screen px-4 py-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      style={{
        backgroundImage: !darkMode ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <img
        src={bigLogo}
        alt="Big Logo"
        className="w-3/4 md:w-2/4 lg:w-2/5 max-w-[700px] h-auto mx-auto transition-all duration-300 mb-2"
        style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
      />

      {/* Heading */}
      <h2
        className="font-['Ibarra Real Nova'] text-2xl sm:text-3xl md:text-5xl font-bold mt-1 mb-1 transition-colors duration-300"
      >
        Welcome to Amoha Codes
      </h2>

      {/* Subtitle */}
      <span
        className="font-['Ibarra Real Nova'] text-base sm:text-lg md:text-2xl transition-colors duration-300"
        style={{
          color: darkMode ? "#D1D5DB" : "#4B5563", 
        }}
      >
        "Empowering Dreams Through Education"
      </span>
    </div>
  );
};

export default Home;
