'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote } from 'lucide-react';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Review {
  id: string;
  name: string;
  rating: number;
  feedback: string;
  date: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Fetch latest 20 reviews that have actual feedback text
        const q = query(collection(db, "ratings"), orderBy("timestamp", "desc"), limit(20));
        const querySnapshot = await getDocs(q);
        
        const fetchedReviews: Review[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Only show reviews that have some feedback written
          if (data.feedback && data.feedback.trim().length > 2) {
            fetchedReviews.push({
              id: doc.id,
              name: data.name && data.name.trim() !== "" ? data.name : "Website Visitor",
              rating: data.rating,
              feedback: data.feedback,
              date: data.timestamp ? new Date(data.timestamp.toDate()).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Recently'
            });
          }
        });
        
        // Take up to 3 reviews to display (as requested by user)
        setReviews(fetchedReviews.slice(0, 3));
      } catch (error) {
        console.error("Error fetching reviews: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading || reviews.length === 0) {
    return null; // Don't show the section if there are no written reviews yet
  }

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <MessageSquareQuote className="w-4 h-4" />
            Client Love
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Real feedback from visitors, clients, and collaborators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-100 text-slate-200 dark:fill-slate-800 dark:text-slate-700'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6 italic">
                "{review.feedback}"
              </p>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                <span className="font-medium text-slate-900 dark:text-white">{review.name}</span>
                <span>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
