import { BookOpen, Code, Briefcase } from "lucide-react";
import googleLogo from "../assets/google.png";
import microsoftLogo from "../assets/microsoft.png";
import amazonLogo from "../assets/amazon.png";
import Testimonials from "./Testimonial";
import MyTeam from "./MyTeam";
import FAQ from "./FrequentlyAskedQuestion";
import CallToAction from "./CallToAction";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`pt-20 pb-16 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg py-12 transition-colors duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white/80"
        }`}
      >
        {/* About Us */}
        <h2 className="text-3xl font-bold mb-6 text-left">About Us</h2>
        <p
          className={`text-lg leading-relaxed text-left mb-10 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          At Amoha, we believe in the transformative power of education to
          inspire brighter futures. Guided by our motto,{" "}
          <span className="font-semibold">
            "Empowering Dreams Through Education,"
          </span>
          we are dedicated to fostering a learning-rich and inspiring ecosystem
          that enables learners to unlock their full potential. At Amoha, our
          mission is shaping the future of technology-driven education by
          providing learners with opportunities to gain meaningful skills and
          professional experience.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div
            className={`border rounded-lg p-6 shadow text-center ${
              darkMode ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <h3
              className={`text-2xl font-bold ${
                darkMode ? "text-purple-400" : "text-purple-700"
              }`}
            >
              10,000+
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Learners
            </p>
          </div>
          <div
            className={`border rounded-lg p-6 shadow text-center ${
              darkMode ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <h3
              className={`text-2xl font-bold ${
                darkMode ? "text-purple-400" : "text-purple-700"
              }`}
            >
              1,000+
            </h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Mentors
            </p>
          </div>
        </div>

        {/* Business Partners */}
        <h3 className="text-2xl font-bold mb-6 text-left">Business Partners</h3>
        <div className="flex flex-wrap items-center justify-center gap-12 mb-12">
          <img
            src={googleLogo}
            alt="Google"
            className="p-6 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer text-center"
          />
          <img
            src={microsoftLogo}
            alt="Microsoft"
            className="p-6 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer text-center"
          />
          <img
            src={amazonLogo}
            alt="Amazon"
            className="p-6 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer text-center"
          />
        </div>

        {/* Our Services */}
        <h3 className="text-2xl font-bold mb-6 text-left ">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={`p-6 border rounded-xl shadow transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer text-center ${
              darkMode ? "bg-gray-700" : "bg-purple-50"
            }`}
          >
            <BookOpen
              className={`w-10 h-10 mx-auto mb-3 ${
                darkMode ? "text-purple-400" : "text-purple-700"
              }`}
            />
            <h4
              className={`text-xl font-bold mb-2 ${
                darkMode ? "text-purple-400" : "text-purple-700"
              }`}
            >
              Curated Courses
            </h4>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              High-quality curated courses to master new skills and grow your
              career.
            </p>
          </div>
          <div
            className={`p-6 border rounded-xl shadow transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer text-center ${
              darkMode ? "bg-gray-700" : "bg-purple-50"
            }`}
          >
            <Code
              className={`w-10 h-10 mx-auto mb-3 ${
                darkMode ? "text-purple-400" : "text-purple-700"
              }`}
            />
            <h4
              className={`text-xl font-bold mb-2 ${
                darkMode ? "text-purple-400" : "text-purple-700"
              }`}
            >
              Practice Challenges
            </h4>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Hands-on coding challenges designed to sharpen problem-solving
              abilities.
            </p>
          </div>
          <div
            className={`p-6 border rounded-xl shadow transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer text-center ${
              darkMode ? "bg-gray-700" : "bg-purple-50"
            }`}
          >
            <Briefcase
              className={`w-10 h-10 mx-auto mb-3 ${
                darkMode ? "text-purple-400" : "text-purple-700"
              }`}
            />
            <h4
              className={`text-xl font-bold mb-2 ${
                darkMode ? "text-purple-400" : "text-purple-700"
              }`}
            >
              Internship Opportunities
            </h4>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Real-world internships to gain practical experience & industry
              exposure.
            </p>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-1 py-2">
          <Testimonials darkMode={darkMode} />
        </section>

        {/* My Team Section */}
        <section className="max-w-6xl mx-auto px-1 py-2">
          <MyTeam darkMode={darkMode} />
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-1 py-2">
          <FAQ darkMode={darkMode} />
          <CallToAction darkMode={darkMode} />
        </section>
      </div>
    </section>
  );
};

export default About;
