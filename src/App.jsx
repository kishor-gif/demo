import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import LoginPage from "./pages/loginpage.jsx";
import Details from "./pages/Details.jsx";
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Rewards from './pages/Rewards.jsx';
import Home from './pages/Home.jsx';
import ChatBot from "./pages/ChatBot";
import PredictBehavior from "./pages/PredictBehavior";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/details" element={<Details />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/home" element={<Home />} />
      <Route path="/predict" element={<PredictBehavior />} />
      <Route path="/chat" element={<ChatBot />} />

    </Routes>
  );
};

export default App;
