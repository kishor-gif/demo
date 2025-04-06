import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: "url('src/assets/background.jpg')" }}>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-black bg-opacity-60 px-6 py-4 md:px-12">
        <div className="text-2xl font-bold text-blue-400">DriveSafe</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/login" className="hover:text-blue-400">Sign Up</Link>
          <Link to="/home" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About Us</Link>
          
          <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
          <Link className="hover:text-yellow-300 transition" to="/rewards">Rewards</Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">☰</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-black bg-opacity-90 p-6 text-center space-y-4">
          <Link to="/login" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          <Link to="/home" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/rewards" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Rewards</Link>
          <Link to="/contact" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact Us</Link>

        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-4 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-400 animate-bounce">Drive Safer. Pay Smarter.</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mt-4">
          AI-powered risk assessment that rewards your safe driving with lower premiums — monitor, improve, and protect your journey in real time.
        </p>
        <button onClick={() => navigate("/login")} className="mt-6 px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white text-lg rounded-full transition duration-300">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-70 text-center p-4 text-gray-400">
        <p>© 2025 DriveSafe Insurance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;