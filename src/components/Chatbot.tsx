"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: React.ReactNode, isBot: boolean}[]>([
    { text: "Hi! I am Abhishek's AI Assistant. How can I help you today?", isBot: true },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    setInput("");
    
    // Simulate smart bot response based on keywords
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let reply: React.ReactNode = "Thanks for reaching out! Abhishek is currently away, but he will get back to you soon. Feel free to explore his CX & AI Consulting Services, download his resume, or check out his books!";
      
      if (lowerInput.includes("why") && (lowerInput.includes("buy") || lowerInput.includes("hire") || lowerInput.includes("choose"))) {
        reply = "Great question! You should work with Abhishek because he is a Top 100 Global Thought Leader in Agile & Customer Loyalty (Thinkers360). He uniquely combines 7+ years of Customer Experience (CX) leadership with advanced AI Automation (GenAI). He doesn't just consult; he guarantees 10X productivity growth and operational excellence.";
      } else if (lowerInput.includes("service") || lowerInput.includes("consulting") || lowerInput.includes("offer")) {
        reply = "Abhishek offers premium CX & AI Consulting Services. This includes GenAI workflow automation, Customer Experience transformation, and Leadership coaching to scale businesses efficiently. Check out the Work/Services section for case studies!";
      } else if (lowerInput.includes("resume") || lowerInput.includes("cv") || lowerInput.includes("experience") || lowerInput.includes("background")) {
        reply = "Abhishek has 7+ years of high-level experience as a CX & AI Project Leader. He holds certifications from IBM and HP Life, and is an expert in Lean Six Sigma. You can download his full resume using the blue button at the top of the page!";
      } else if (lowerInput.includes("book") || lowerInput.includes("bridge you become") || lowerInput.includes("author") || lowerInput.includes("writing")) {
        reply = "Yes! Abhishek is the proud author of 'THE BRIDGE YOU BECOME'. It focuses on leadership, personal growth, and navigating career challenges. You can find purchase links in the Books section below.";
      } else if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("tool") || lowerInput.includes("know")) {
        reply = "His core competencies include: Customer Experience Strategy, AI & Prompt Engineering (GenAI), Agile Project Management, Data Analytics, and Lean Six Sigma methodologies.";
      } else if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("hey") || lowerInput.includes("greetings")) {
        reply = "Hello there! 👋 I am Abhishek's AI Assistant. You can ask me why you should hire him, what his skills are, or about his book 'The Bridge You Become'!";
      } else if (lowerInput.includes("mail") || lowerInput.includes("email") || lowerInput.includes("contact") || lowerInput.includes("message")) {
        reply = (
          <span>
            You can email Abhishek directly right now by clicking here: <br /><br />
            <a href="mailto:abhishekshukla16102000@gmail.com" className="font-bold underline text-blue-600 dark:text-blue-400">
              abhishekshukla16102000@gmail.com
            </a>
          </span>
        );
      } else if (lowerInput.includes("cost") || lowerInput.includes("price") || lowerInput.includes("rate") || lowerInput.includes("charge")) {
        reply = "Abhishek's consulting rates depend on the scope of the project (whether it's AI integration, CX transformation, or leadership coaching). Please use the Contact form to request a custom quote!";
      } else if (lowerInput.includes("who are you") || lowerInput.includes("what are you") || lowerInput.includes("bot")) {
        reply = "I am a custom AI assistant built exclusively for Abhishek Shukla's portfolio. I am here to help you learn more about his expertise in CX and AI!";
      }

      setMessages((prev) => [
        ...prev,
        { text: reply, isBot: true },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-[320px] sm:w-[350px] bg-white dark:bg-slate-950 dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-950/20 flex items-center justify-center text-white font-bold text-sm">
                  AI
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Abhishek's Assistant</h3>
                  <p className="text-blue-100 text-xs">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-[300px] p-4 overflow-y-auto flex flex-col gap-3 bg-slate-50 dark:bg-slate-900 dark:bg-slate-950/50">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.isBot 
                        ? "bg-white dark:bg-slate-950 dark:bg-slate-800 text-slate-800 dark:text-slate-100 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700 rounded-tl-sm" 
                        : "bg-blue-600 text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-slate-950 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
              <button 
                onClick={handleSend}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shrink-0"
              >
                <Send size={16} className="mr-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}

