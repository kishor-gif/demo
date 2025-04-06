import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", formData);
    navigate("/details"); // Redirect to details page after successful login
  };

  return (
    <div 
      className="h-screen w-screen flex items-center justify-center bg-black relative overflow-hidden px-4"
      style={{ 
        backgroundImage: "url('/src/assets/background 1.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Login Form */}
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg text-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      >
        <div className="flex flex-col items-center">
          <img src="/logo.png" alt="Logo" className="w-16 sm:w-20 mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold">Login</h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 mt-1 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="w-full p-3 mt-1 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg mt-4 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}

