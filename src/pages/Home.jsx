import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import rewardbg from "../assets/rewardbg.jpg";

const faqs = [
  { question: "What is DriveSafe?", answer: "DriveSafe is a platform for predicting risk and understanding driving behavior." },
  { question: "How does risk prediction work?", answer: "We use machine learning models to assess your driving patterns." },
  { question: "Is my data safe?", answer: "Absolutely. Your privacy and data security are our top priorities." }
];

const Home = () => {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setChatOpen(!chatOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const matchedFAQ = faqs.find(faq => input.toLowerCase().includes(faq.question.toLowerCase()));
    const botMsg = {
      sender: "bot",
      text: matchedFAQ ? matchedFAQ.answer : "Sorry, I didn't understand that. Please try a different question."
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const boxes = [
    { title: "Risk Prediction", route: "/predict" },
    { title: "Rewards", route: "/rewards" },
    { title: "Know Your Vehicle", route: "/vehicle" },
    { title: "Driving Behavior Insights", route: "/insights" },
    { title: "Maintenance Prediction", route: "/maintenance" },
    { title: "About Us", route: "/about" }
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${rewardbg})` }}
    >
      <h1 className="text-5xl font-extrabold text-blue-300 mb-12 animate-pulse drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600">
        Welcome to DriveSafe
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="cursor-pointer bg-gradient-to-br from-blue-700 via-black to-gray-700 text-white rounded-3xl shadow-2xl p-12 text-center text-2xl font-semibold transition-all w-72 h-48 flex items-center justify-center"
            onClick={() => navigate(box.route)}
          >
            {box.title}
          </motion.div>
        ))}
      </div>

      {/* Floating Chat Icon */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
      >
        {chatOpen ? <X /> : <MessageSquare />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-xl p-4 z-50 flex flex-col space-y-2"
          >
            <div className="font-bold text-lg mb-2 text-blue-700">DriveSafe Assistant</div>
            <div className="flex flex-col space-y-1 h-60 overflow-y-auto text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user" ? "self-end bg-blue-100" : "self-start bg-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <input
                className="flex-1 border rounded px-2 py-1 text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
