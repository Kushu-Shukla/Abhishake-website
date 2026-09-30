'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/animations';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call to Mailchimp/Newsletter service
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 px-4 py-2 rounded-full font-medium text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Join 5,000+ Leaders
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            Weekly Insights on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CX & AI</span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Get my best strategies on operational excellence, AI integration, and team leadership delivered straight to your inbox every Tuesday. No spam, ever.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <form 
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto relative flex items-center"
          >
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status !== 'idle'}
              placeholder="Enter your email address..."
              className="w-full pl-6 pr-32 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            
            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-blue-600 font-bold hover:bg-blue-500 transition-colors flex items-center justify-center min-w-[100px]"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : status === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-300" />
              ) : (
                <>
                  Subscribe
                </>
              )}
            </button>
          </form>
          
          {status === 'success' && (
            <p className="text-green-400 text-sm mt-4 font-medium animate-pulse">
              Success! Check your inbox to confirm your subscription.
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
