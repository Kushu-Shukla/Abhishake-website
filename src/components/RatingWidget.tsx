'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';

export default function RatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) return;
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      // Reset after closing so it's ready if they open it again later
      setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        setFeedback("");
      }, 500);
    }, 2000);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 mb-4 w-72 origin-bottom-right"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-green-500 fill-current" />
                </div>
                <h4 className="font-bold text-slate-800 mb-1">Thank You!</h4>
                <p className="text-sm text-slate-500">Your feedback helps us improve.</p>
              </div>
            ) : (
              <>
                <h4 className="font-bold text-slate-800 mb-1">Rate this website</h4>
                <p className="text-xs text-slate-500 mb-4">How was your experience today?</p>
                
                <div className="flex gap-1 justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="p-1 hover:scale-110 transition-transform focus:outline-none"
                    >
                      <Star 
                        className={`w-8 h-8 transition-colors ${
                          star <= (hoveredRating || rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-slate-200'
                        }`} 
                      />
                    </button>
                  ))}
                </div>

                <textarea
                  placeholder="Tell us what you think (optional)"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full text-sm p-3 border border-slate-200 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none h-20 text-slate-700 placeholder-slate-400"
                ></textarea>

                <button 
                  onClick={handleSubmit}
                  disabled={rating === 0}
                  className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    rating > 0 
                      ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Submit Rating
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 text-white rounded-full py-3 px-5 font-semibold text-sm shadow-xl hover:scale-105 transition-transform flex items-center gap-2 group"
      >
        <Star className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
        Rate Us
      </button>
    </div>
  );
}
