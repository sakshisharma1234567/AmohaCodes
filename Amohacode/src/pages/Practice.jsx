
import React, { useState } from "react";
import { Search } from "lucide-react";


const initialQuestions = [
  // Arrays
  { id: 1, title: "Two Sum", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/two-sum/" },
  { id: 2, title: "Best Time to Buy and Sell Stock", category: "Arrays", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
  { id: 3, title: "Maximum Subarray", category: "Arrays", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/maximum-subarray/" },
  { id: 4, title: "3Sum", category: "Arrays", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/3sum/" },
  
  // Strings
  { id: 5, title: "Reverse String", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/reverse-string/" },
  { id: 6, title: "Longest Common Prefix", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/longest-common-prefix/" },
  { id: 7, title: "Valid Palindrome", category: "Strings", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/valid-palindrome/" },
  { id: 8, title: "Longest Palindromic Substring", category: "Strings", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/longest-palindromic-substring/" },
  { id: 9, title: "Rabin-Karp", category: "Strings", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/repeated-string-match/" },
  
  // Dynamic Programming (DP)
  { id: 10, title: "Fibonacci Number", category: "DP", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/fibonacci-number/" },
  { id: 11, title: "Longest Common Subsequence", category: "DP", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/longest-common-subsequence/" },
  { id: 12, title: "Coin Change", category: "DP", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/coin-change/" },
  { id: 13, title: "0/1 Knapsack", category: "DP", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" },
  { id: 14, title: "Edit Distance", category: "DP", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/edit-distance/" },
  
  // Greedy
  { id: 15, title: "Activity Selection", category: "Greedy", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/" },
  { id: 16, title: "Job Sequencing with Deadlines", category: "Greedy", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/job-sequencing-problem/" },
  { id: 17, title: "Fractional Knapsack", category: "Greedy", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/fractional-knapsack-problem/" },
  { id: 18, title: "Huffman Coding", category: "Greedy", difficulty: "Hard", solved: false, link: "https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/" },
  
  // Graphs
  { id: 19, title: "Number of Islands", category: "Graphs", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/number-of-islands/" },
  { id: 20, title: "Number of Provinces", category: "Graphs", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/number-of-provinces/" },
  { id: 21, title: "Network Delay Time", category: "Graphs", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/network-delay-time/" },
  { id: 22, title: "Course Schedule", category: "Graphs", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/course-schedule/" },
  { id: 23, title: "Minimum Spanning Tree (Kruskal)", category: "Graphs", difficulty: "Hard", solved: false, link: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-5/" },
  
  // Bit Manipulation
  { id: 24, title: "Power of Two", category: "Bit Manipulation", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/power-of-two/" },
  { id: 25, title: "Number of 1 Bits", category: "Bit Manipulation", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/number-of-1-bits/" },
  { id: 26, title: "Single Number", category: "Bit Manipulation", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/single-number/" },
  { id: 27, title: "Subsets", category: "Bit Manipulation", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/subsets/" },
  { id: 28, title: "Maximum XOR of Two Numbers", category: "Bit Manipulation", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
];

const allCategories = ["Arrays", "Strings", "DP", "Graphs", "Greedy", "Bit Manipulation"];

function Practice({ darkMode }) {
  // Use a state that is reset on every render
  const [questionsList, setQuestionsList] = useState(
    initialQuestions.map(q => ({ ...q, solved: false }))
  );
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [categorySearchTerm, setCategorySearchTerm] = useState("");
  const [problemSearchTerm, setProblemSearchTerm] = useState("");

  const handleCheckboxChange = (id) => {
    setQuestionsList(prevList =>
      prevList.map(q =>
        q.id === id ? { ...q, solved: !q.solved } : q
      )
    );
  };

  const filteredCategories = allCategories.filter(cat =>
    cat.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const filteredQuestions = questionsList.filter((q) => {
    if (expandedCategory && q.category !== expandedCategory) return false;
    if (selectedDifficulty && q.difficulty !== selectedDifficulty) return false;
    if (problemSearchTerm && !q.title.toLowerCase().includes(problemSearchTerm.toLowerCase()))
      return false;
    return true;
  });

  const totalQuestions = questionsList.length;
  const solvedQuestions = questionsList.filter(q => q.solved).length;
  const completionPercentage = totalQuestions > 0 ? Math.round((solvedQuestions / totalQuestions) * 100) : 0;

  const difficultyStats = {
    Easy: { total: questionsList.filter(q => q.difficulty === "Easy").length, solved: questionsList.filter(q => q.difficulty === "Easy" && q.solved).length },
    Medium: { total: questionsList.filter(q => q.difficulty === "Medium").length, solved: questionsList.filter(q => q.difficulty === "Medium" && q.solved).length },
    Hard: { total: questionsList.filter(q => q.difficulty === "Hard").length, solved: questionsList.filter(q => q.difficulty === "Hard" && q.solved).length },
  };

  const difficultyColors = {
    Easy: '#22C55E', // Green
    Medium: '#F97316', // Orange
    Hard: '#EF4444' // Red
  };

  const getDifficultyColorClass = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-700";
      case "Medium":
        return darkMode ? "bg-pink-900 text-pink-300" : "bg-pink-100 text-pink-700";
      case "Hard":
        return darkMode ? "bg-red-900 text-red-300" : "bg-red-100 text-red-700";
      default:
        return darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-800";
    }
  };

  const getCategoryColorClass = (category) => {
    switch (category) {
      case "Arrays":
        return darkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-700";
      case "Strings":
        return darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-700";
      case "DP":
        return darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-700";
      case "Graphs":
        return darkMode ? "bg-indigo-900 text-indigo-200" : "bg-indigo-100 text-indigo-700";
      case "Greedy":
        return darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-700";
      case "Bit Manipulation":
        return darkMode ? "bg-pink-900 text-pink-200" : "bg-pink-100 text-pink-700";
      default:
        return darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div
      className={`flex min-h-screen transition-colors duration-500 pt-20 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Sidebar */}
      <div className={`w-72 border-r p-4 transition-colors duration-500 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
        <h1 className="text-lg font-bold mb-4">Filters</h1>
        <div className="relative mb-6">
          <Search className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-purple-300" : "text-purple-500"}`} />
          <input
            type="text"
            placeholder="Search category..."
            className={`w-full pl-9 pr-3 py-2 rounded-md text-sm outline-none transition-colors duration-300 ${darkMode ? "bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-400" : "bg-purple-50 border border-purple-200 text-black focus:ring-2 focus:ring-purple-500"}`}
            value={categorySearchTerm}
            onChange={(e) => setCategorySearchTerm(e.target.value)}
          />
        </div>
        <h2 className="font-semibold text-base mb-3">Category</h2>
        <ul className="space-y-3">
          {filteredCategories.map((cat) => (
            <li key={cat}>
              <label className="flex items-center space-x-2 cursor-pointer" onClick={() => setExpandedCategory(expandedCategory === cat ? null : cat)}>
                <input type="checkbox" checked={expandedCategory === cat} readOnly className="w-4 h-4 accent-purple-600 border-2 border-purple-400 rounded" />
                <span className="font-medium text-purple-500">{cat}</span>
              </label>
              {expandedCategory === cat && (
                <div className="ml-6 mt-2 space-y-2">
                  {["Easy", "Medium", "Hard"].map((diff) => (
                    <label key={diff} className="flex items-center space-x-2 cursor-pointer" onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? null : diff)}>
                      <input type="checkbox" checked={selectedDifficulty === diff} readOnly className={`w-4 h-4 rounded border-2 ${getDifficultyColorClass(diff).includes('green') ? 'border-green-500 checked:bg-green-500' : getDifficultyColorClass(diff).includes('pink') ? 'border-pink-500 checked:bg-pink-500' : 'border-red-500 checked:bg-red-500'}`} />
                      <span className={`text-sm font-medium ${darkMode ? (diff === 'Easy' ? 'text-green-300' : diff === 'Medium' ? 'text-pink-400' : 'text-red-300') : (diff === 'Easy' ? 'text-green-700' : diff === 'Medium' ? 'text-pink-700' : 'text-red-700')}`}>{diff}</span>
                    </label>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* Progress Section */}
        <div className={`p-6 rounded-lg mb-6 shadow-md transition-colors duration-500 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Progress</h2>
          </div>
          <div className="flex items-center space-x-6">
            {/* Total Progress */}
            <div className="flex flex-col items-start min-w-[120px]">
              <span className="text-2xl font-bold">{solvedQuestions} / {totalQuestions}</span>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-800"}`}>Total Progress</p>
            </div>
            
            {/* Circle and percentage */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className={`stroke-current ${darkMode ? "text-gray-700" : "text-gray-300"}`} strokeWidth="6" fill="transparent" r="30" cx="40" cy="40" />
                  <circle 
                    className="stroke-current text-orange-500" 
                    strokeWidth="6" 
                    strokeDasharray={30 * 2 * Math.PI} 
                    strokeDashoffset={30 * 2 * Math.PI - (completionPercentage / 100) * (30 * 2 * Math.PI)} 
                    strokeLinecap="round" 
                    fill="transparent" 
                    r="30" cx="40" cy="40" 
                  />
                </svg>
                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>{completionPercentage}%</span>
              </div>
            </div>

            {/* Separators and Difficulty Progress */}
            {Object.keys(difficultyStats).map(diff => (
              <div key={diff} className="flex-1 flex flex-col items-center px-6 border-l border-gray-700 first:border-l-0">
                <span className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-900"}`}>{diff}</span>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-800"}`}>{difficultyStats[diff].solved} / {difficultyStats[diff].total} completed</p>
                <div className={`w-28 h-2 mt-1 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                  <div 
                    className={`h-full rounded-full`} 
                    style={{ 
                      width: `${(difficultyStats[diff].solved / difficultyStats[diff].total) * 100}%`,
                      backgroundColor: difficultyColors[diff] 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Practice Problems</h2>
        <div className="relative mb-4 w-1/2">
          <Search className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-purple-300" : "text-purple-500"}`} />
          <input
            type="text"
            placeholder="Search problems..."
            className={`w-full pl-9 pr-3 py-2 rounded-md text-sm outline-none transition-colors duration-300 ${darkMode ? "bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-400" : "bg-purple-50 border border-purple-200 text-black focus:ring-2 focus:ring-purple-500"}`}
            value={problemSearchTerm}
            onChange={(e) => setProblemSearchTerm(e.target.value)}
          />
        </div>
        {filteredQuestions.length === 0 ? (
          <p className={`text-gray-500 ${darkMode ? "dark:text-gray-400" : ""}`}>No problems found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className={`w-full border rounded-lg transition-colors duration-500 ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
              <thead className={darkMode ? "bg-gray-700" : "bg-gray-100"}>
                <tr>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Problem Title</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuestions.map((q) => (
                  <tr key={q.id} className={`border-t ${darkMode ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50"}`}>
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={q.solved}
                        onChange={() => handleCheckboxChange(q.id)}
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                      />
                    </td>
                    <td className="p-3">
                      <a href={q.link} target="_blank" rel="noopener noreferrer" className={`font-medium ${darkMode ? "text-gray-200 hover:text-purple-400" : "text-gray-900 hover:text-purple-600"}`}>
                        {q.title}
                      </a>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-sm rounded-full ${getCategoryColorClass(q.category)}`}>
                        {q.category}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-sm rounded-full ${getDifficultyColorClass(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Practice;