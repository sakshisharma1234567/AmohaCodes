import React, { useState } from 'react';

export const faqData = [
  {
    id: 1,
    question: 'How do I get started?',
    answer:
      'To get started, simply sign up for a free account. Once registered, you can explore our coding challenges, learning resources, and community features.',
  },
  {
    id: 2,
    question: 'What types of coding challenges are available?',
    answer:
      'We offer a wide range of coding challenges from beginner to advanced levels, covering languages like JavaScript, Python, and more. Challenges include algorithm practice, project-based tasks, and competitive programming problems.',
  },
  {
    id: 3,
    question: 'Is there a community forum?',
    answer:
      'Yes, we have an active community forum where you can ask questions, share your projects, and connect with other developers. It’s a great place to get help and collaborate.',
  },
];

export const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`mb-4 rounded-lg border shadow-sm transition-colors ${
        isOpen ? "bg-gray-50" : "bg-white"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-4 text-left font-medium text-gray-700 hover:text-[#6334B9] transition-colors duration-200"
      >
        <span>{question}</span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#6334B9]"
          >
            <path d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#6334B9]"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
      <div>
        {faqData.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
