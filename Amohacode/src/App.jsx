import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import all your components
import Navbar from './components/Navbar';
import Home from './components/Home';      
import About from './components/About';    
import Practice from './pages/Practice'; 
import Footer from './components/Footer'; // Import your Footer component

const AppContent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/practice" element={<Practice darkMode={darkMode} />} />
          {/* Add other routes here */}
        </Routes>
      </main>
      
      {/* Conditionally render the Footer */}
      {location.pathname !== '/' && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;