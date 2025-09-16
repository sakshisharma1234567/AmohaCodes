import React from "react";
import About from "../components/About";


const AboutUs = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-8 py-16 space-y-20">
        {/* About */}
        <About />

      </div>
    </div>
  );
};

export default AboutUs;
