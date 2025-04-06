import React from 'react';
import { motion } from 'framer-motion';
import backgroundImg from '../assets/rewardbg.jpg';  // Replace with your reward background

const Rewards = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-5xl mx-4 text-gray-900"
      >
        <h1 className="text-5xl font-extrabold text-green-700 mb-8 text-center tracking-wide">
          🎉 Reward System
        </h1>

        <p className="text-xl leading-9 mb-8 text-justify">
          We value safe driving and responsible behavior! 🚗💨 Earn exciting rewards 
          as you drive safely and stay engaged with us. Here's what you unlock:
        </p>

        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-lg"
        >
          <li>🎁 <span className="font-semibold">Goodies:</span> Earn exclusive Driving Safer Roads merchandise.</li>
          <li>🏅 <span className="font-semibold">Badges:</span> Unlock badges for each milestone you achieve.</li>
          <li>💳 <span className="font-semibold">Credits:</span> Collect points that convert into exciting rewards.</li>
          <li>💸 <span className="font-semibold">Insurance Discounts:</span> Collaborate with us and enjoy special insurance premium discounts.</li>
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 text-2xl text-center text-blue-700 font-bold"
        >
          🌟 Collaborate with us & unlock exclusive deals on your motor insurance! 🌟
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Rewards;
