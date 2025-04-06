import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
    { question: "What is DriveSafe?", answer: "DriveSafe is a platform for predicting driving risks and understanding behavior patterns." },
    { question: "How does risk prediction work?", answer: "We use machine learning to analyze driving data and predict potential risks." },
    { question: "What features do you analyze?", answer: "Speed, acceleration, braking, steering, and other driving metrics." },
    { question: "Can DriveSafe improve my insurance?", answer: "Yes, better driving scores can help you get rewards or discounts from insurers." },
    { question: "Is my data secure?", answer: "Absolutely! We prioritize user privacy and store your data securely." },
    { question: "Do I need to install anything?", answer: "No, DriveSafe runs entirely on the web—no app installation required." },
    { question: "Can I track my driving behavior?", answer: "Yes, we provide detailed insights and trends based on your driving history." },
    { question: "How often is the prediction updated?", answer: "Predictions are updated in real-time based on the latest data." },
    { question: "What kind of rewards are offered?", answer: "Rewards include cashback, discounts, and points for safe driving." },
    { question: "Is DriveSafe available globally?", answer: "Currently, DriveSafe is available in select regions and expanding soon." },
    { question: "How can I sign up?", answer: "Just visit our homepage and click on 'Get Started' to create your account." },
    { question: "Can it detect rash driving?", answer: "Yes, the model is trained to detect rash and unsafe driving patterns." },
    { question: "What does a low risk score mean?", answer: "It means you drive safely and are less likely to face accidents." },
    { question: "Does it work for all vehicles?", answer: "Yes, as long as driving data is available, our model works for all vehicles." },
    { question: "How is maintenance predicted?", answer: "We analyze usage patterns to estimate when your vehicle may need servicing." },
    { question: "Can I share my results?", answer: "Yes, you can export or share your driving reports with others." },
    { question: "How can I contact support?", answer: "Click on the 'Contact Us' section or email us at support@drivesafe.com." },
    { question: "What technologies do you use?", answer: "We use Flask, React, and machine learning models for predictions." },
    { question: "How accurate is the model?", answer: "Our model has been tested with high accuracy on various datasets." },
    { question: "Is there a mobile version?", answer: "Yes, the site is fully responsive and works on mobile devices." },
    { question: "Does it require login?", answer: "You can browse some features anonymously, but full access needs login." },
    { question: "Can I connect this with my vehicle's telemetry?", answer: "Yes, we support OBD-II and GPS data integrations." },
    { question: "Are rewards redeemable?", answer: "Yes, you can redeem points in the rewards section for goodies." },
    { question: "How do I view my risk score?", answer: "Go to the 'Risk Prediction' section after logging in." },
    { question: "Do you offer driving tips?", answer: "Yes, we show safety tips based on your behavior." },
    { question: "Is it free to use?", answer: "Yes, most core features are free, with premium options available." },
    { question: "How do I reset my password?", answer: "Go to login page and click 'Forgot Password' to reset." },
    { question: "Is it available in Hindi?", answer: "Not yet, but we’re working on multi-language support." },
    { question: "How is driving behavior scored?", answer: "We use a combination of metrics to score your driving." },
    { question: "Does it support family profiles?", answer: "This feature is coming soon to allow tracking for multiple drivers." },
    { question: "Can fleet owners use this?", answer: "Yes! It’s perfect for managing commercial driving fleets." },
    { question: "How is bad driving flagged?", answer: "Sudden braking, speeding, and sharp turns are flagged." },
    { question: "Do I get notifications?", answer: "Yes, for high risk patterns or maintenance alerts." },
    { question: "Can I suggest a feature?", answer: "We’d love that! Drop us feedback through the contact form." },
    { question: "How do I logout?", answer: "Click your profile icon and select 'Logout'." },
    { question: "Is there a leaderboard?", answer: "Yes! Check the rewards tab to see where you rank." },
    { question: "How do I update my vehicle info?", answer: "Go to the 'Know Your Vehicle' section and update details." },
    { question: "Can I change theme?", answer: "Dark and light mode options are available in settings." },
    { question: "Do you use AI?", answer: "Yes, our predictions and insights are powered by AI." },
    { question: "What’s the maintenance score?", answer: "It reflects your car’s health based on usage patterns." },
    { question: "Is there a referral program?", answer: "Yes, refer friends and earn bonus rewards." },
    { question: "Do you support EVs?", answer: "Yes, our system supports electric vehicles too." },
    { question: "Can I export data?", answer: "Yes, download your reports from your profile section." },
    { question: "How can I delete my account?", answer: "Send a request through your profile or contact us directly." },
    { question: "Is customer support 24/7?", answer: "We offer support during working hours, with chat available anytime." },
    { question: "What’s the minimum data needed?", answer: "At least 10 minutes of driving data is required for predictions." },
    { question: "What is a good driving score?", answer: "Scores above 80 indicate safe and responsible driving." },
    { question: "Can I see past trips?", answer: "Yes, check your driving history from the dashboard." },
    { question: "Will it work on my car?", answer: "As long as basic driving data is captured, yes!" },
    { question: "What are driving insights?", answer: "They help you understand patterns and improve your driving habits." },
    { question: "How does DriveSafe work with insurers?", answer: "We partner with insurers to offer benefits based on your driving score." },
    { question: "Is DriveSafe GDPR compliant?", answer: "Yes, we fully comply with GDPR and similar privacy regulations." },
    { question: "Can I link multiple vehicles?", answer: "Yes, add multiple vehicles to your account from the dashboard." },
    { question: "Is there a mobile app?", answer: "A native mobile app is coming soon for iOS and Android." },
    { question: "Do you support Apple CarPlay or Android Auto?", answer: "Not yet, but integration is planned for future updates." },
    { question: "Can I download my entire driving history?", answer: "Yes, from the settings or profile section." },
    { question: "How are driving reports generated?", answer: "They are generated automatically based on your driving sessions." },
    { question: "How can I update my profile info?", answer: "Go to your profile settings to edit your information." },
    { question: "Is it safe to use while driving?", answer: "The platform is designed for passive tracking—no interaction required while driving." },
    { question: "Can parents use this for teen drivers?", answer: "Yes, monitor driving behavior of young drivers easily." },
    { question: "Do you support government fleets?", answer: "Yes, we can support large government or municipal fleets." },
    { question: "How can I give feedback?", answer: "Use the feedback form in the support section or contact us directly." },
    { question: "Can I pause data tracking?", answer: "Yes, toggle tracking from your dashboard settings." },
    { question: "Does it work without GPS?", answer: "Basic insights are possible, but GPS improves accuracy." },
    { question: "How long is my data stored?", answer: "Data is retained for as long as your account is active." },
    { question: "Can I set driving goals?", answer: "Yes, set goals and receive tips to achieve them." },
    { question: "Do you provide coaching?", answer: "AI-powered coaching tips are provided after every session." },
    { question: "Can I print my reports?", answer: "Yes, reports are available in printable PDF formats." },
    { question: "What payment methods are supported?", answer: "We accept all major cards, UPI, and PayPal." },
    { question: "Can I cancel my subscription?", answer: "Yes, cancel anytime from your billing section." },
    { question: "Is DriveSafe eco-friendly?", answer: "Yes, we encourage green driving habits and reward eco-friendly behavior." },
    { question: "What is the average driving score?", answer: "The average is around 72, but varies by region." },
    { question: "How do I refer a friend?", answer: "Share your referral code from the rewards tab." },
    { question: "What’s new in the latest update?", answer: "Check our release notes on the website for update highlights." },
    { question: "Can I use DriveSafe abroad?", answer: "Yes, it's accessible globally with minor data variations." },
    { question: "Is the platform accessible for disabled users?", answer: "Yes, we follow accessibility guidelines for usability." },
    { question: "Can I hide certain data from reports?", answer: "Yes, choose what to include before exporting." },
    { question: "What happens if I uninstall it?", answer: "Your data is safe and accessible when you return." },
    { question: "Do you offer corporate plans?", answer: "Yes, contact us for tailored business and fleet solutions." },
    { question: "Is there a family safety mode?", answer: "Coming soon—manage driving safety for family groups." },
    { question: "Can I earn badges or achievements?", answer: "Yes! Unlock achievements for safe milestones." },
    { question: "How often should I check my dashboard?", answer: "We recommend reviewing insights weekly." },
    { question: "How are scores calculated?", answer: "Using weighted averages of different driving behaviors." },
    { question: "Can I sync DriveSafe with third-party apps?", answer: "Integration with fitness and vehicle apps is coming soon." },
    { question: "Is there an offline mode?", answer: "Data is cached offline and synced when online." },
    { question: "Can I reset my driving score?", answer: "Scores are cumulative but you can start a new tracking phase." },
    { question: "Does it support bike or scooter data?", answer: "Currently optimized for cars, bike support is on the roadmap." },
    { question: "Can DriveSafe help with licensing?", answer: "We provide driving insights but not licensing services directly." },
    { question: "Hi", answer: "Hello! How can I assist you today?" },
    { question: "Hello", answer: "Hi there! Need help with something?" },
    { question: "Hey", answer: "Hey! What would you like to know about DriveSafe?" },
    { question: "How are you?", answer: "I'm just a bot, but I'm here and ready to help!" },
    { question: "What's up?", answer: "All good here! Ask me anything about driving safety or our platform." },
    { question: "Are you a real person?", answer: "I'm a chatbot designed to help you with DriveSafe-related queries." },
    { question: "What can you do?", answer: "I can answer questions about driving behavior, risk prediction, and using the DriveSafe platform." },
    { question: "Who made you?", answer: "I was created by the DriveSafe development team to assist users like you!" },
    { question: "Bye", answer: "Goodbye! Drive safe and visit us again soon!" },
    { question: "Thank you", answer: "You're welcome! Happy to help." },
    { question: "Thanks", answer: "Anytime! Let me know if you need anything else." },
    { question: "Ok", answer: "Got it! Let me know if you have more questions." },
    { question: "Cool", answer: "Glad you think so! 😊" },
    { question: "I need help", answer: "Sure! Please ask your question or tell me what you're trying to do." },
    { question: "Help me", answer: "Of course! What would you like assistance with?" },

  ];
  

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m your DriveSafe assistant. Ask me anything about the platform!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = input.trim();
    const match = faqs.find(
      (faq) =>
        faq.question.toLowerCase().includes(userMessage.toLowerCase()) ||
        userMessage.toLowerCase().includes(faq.question.toLowerCase())
    );

    const newMessages = [...messages, { from: "user", text: userMessage }];
    setMessages(newMessages);

    setTimeout(() => {
      if (match) {
        setMessages((prev) => [...prev, { from: "bot", text: match.answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Sorry, I didn't understand that. Please try a different question."
          }
        ]);
      }
    }, 500);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        >
          <MessageSquare size={28} />
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="bg-white shadow-2xl rounded-2xl w-80 h-[420px] flex flex-col"
        >
          <div className="flex justify-between items-center p-4 border-b font-semibold text-lg text-blue-700">
            DriveSafe Chat
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-blue-100 text-right ml-auto"
                    : "bg-gray-100 text-left mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-lg text-sm"
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
