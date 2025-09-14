import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Dani Cobra',
    title: 'Junior Developer',
    quote:
      'Before CodeSpark, coding felt intimidating. The step-by-step practice exercises and real-world projects made learning fun and easy to follow.',
    rating: 5,
    avatar: 'https://placehold.co/100x100/A3E4D7/333333?text=DC',
  },
  {
    id: 2,
    name: 'Priyanka Sharma',
    title: 'Computer Science Student',
    quote:
      "I had no prior coding experience, but CodeSpark's lessons helped me go from basics to building my own apps in just three months.",
    rating: 5,
    avatar: 'https://placehold.co/100x100/F5CBA7/333333?text=PS',
  },
  {
    id: 3,
    name: 'John Doe',
    title: 'Web Designer',
    quote:
      "A great resource for anyone looking to upskill in web development. The projects are well-structured and the community support is fantastic.",
    rating: 4,
    avatar: 'https://placehold.co/100x100/D2B4DE/333333?text=JD',
  },
];

const StarRating = ({ rating, darkMode }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'text-yellow-400' : darkMode ? 'text-gray-600' : 'text-gray-300'}>
      ★
    </span>
  ));
  return <div className="flex">{stars}</div>;
};

const Testimonials = ({ darkMode }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const totalTestimonials = testimonialsData.length;

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % totalTestimonials);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const visibleTestimonials = testimonialsData.slice(currentTestimonial, currentTestimonial + 2);
  if (visibleTestimonials.length < 2 && totalTestimonials > 1) {
    visibleTestimonials.push(testimonialsData[0]);
  }

  return (
    <div
      className={`container mx-auto px-4 py-16 transition-colors duration-500 ${
        darkMode ? "bg-gray text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className={`p-2 border rounded-full transition-colors ${
              darkMode ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-chevron-left">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={`p-2 border rounded-full transition-colors ${
              darkMode ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`p-6 rounded-lg shadow-md transition-colors duration-500 ${
              darkMode
                ? "bg-gray-800 border border-gray-700 text-white"
                : "bg-white border border-[#6334B9] text-gray-700"
            }`}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {testimonial.title}
                </p>
              </div>
              <div className="ml-auto">
                <StarRating rating={testimonial.rating} darkMode={darkMode} />
              </div>
            </div>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
