import React from 'react';
import backgroundImg from '../assets/background.jpg'; // Replace with your image path
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-12 max-w-5xl mx-4 text-gray-900"
      >
        <h1 className="text-5xl font-extrabold text-blue-700 mb-8 text-center tracking-wide">
          🚀 About Us
        </h1>

        <p className="text-xl leading-9 mb-6 text-justify">
          Welcome to <span className="font-semibold">Driving Safer Roads</span>! 🛣️ 
          We're a passionate team on a mission to revolutionize motor insurance using 
          <span className="text-blue-700 font-semibold"> AI, IoT, and Telematics</span> 🔍.
          Our system monitors driving behavior in real-time and predicts risks to keep you safer.
        </p>

        <p className="text-xl leading-9 mb-6 text-justify">
          We believe in <span className="font-semibold">rewarding good driving 🚗💨</span> 
          with lower premiums while helping insurers reduce claims. Our AI-powered insights promote 
          safer roads and smarter driving decisions every day.
        </p>

        <p className="text-xl leading-9 text-justify">
          🌟 Join us in shaping a future where your driving skills define your premium — not just your history.
          Let's make the roads safer together! 🤝
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
