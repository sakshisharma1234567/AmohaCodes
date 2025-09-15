import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />



      {/* About section */}
      <About darkMode={darkMode} />
{/* Footer Section */}
      <Footer />
     
    </BrowserRouter>
  );
}

export default App;
