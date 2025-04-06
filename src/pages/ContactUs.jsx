import React from 'react';
import backgroundImg from '../assets/background.jpg'; // Replace with your background image
import { motion } from 'framer-motion';

const ContactUs = () => {
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
          📞 Contact Us
        </h1>

        <p className="text-xl leading-9 mb-6 text-justify">
          Have questions or want to collaborate? 🤝 We're here to help! 
          Reach out to us anytime for support, partnerships, or just to say hello 👋.
        </p>

        <div className="space-y-6 text-lg">
          <p>📍 <span className="font-semibold">Address:</span> ABC Street, New Delhi, India</p>
          <p>📧 <span className="font-semibold">Email:</span> drivingsaferroads@gmail.com</p>
          <p>📞 <span className="font-semibold">Phone:</span> +91 98765 43210</p>
        </div>

        <p className="mt-8 text-xl text-center">
          🌐 Let's build safer roads together!
        </p>
      </motion.div>
    </div>
  );
};

export default ContactUs;
