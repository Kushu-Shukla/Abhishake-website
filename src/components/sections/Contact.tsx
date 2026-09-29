"use client";

import { siteConfig } from "@/config";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-brand-gray/50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-6">
            {siteConfig.contactSection.heading}
          </h2>
          <div className="flex flex-col items-center gap-4">
             <Link href={siteConfig.consultingRates.bookingLink} target="_blank" className="text-brand-gold hover:text-brand-navy underline font-medium">
               Book a Consultation
             </Link>
          </div>
        </div>

        <form className="space-y-6 bg-brand-offwhite p-8 border border-brand-gray/50" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 border border-brand-gray focus:border-brand-navy focus:outline-none bg-white rounded-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-brand-gray focus:border-brand-navy focus:outline-none bg-white rounded-none" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-navy mb-2">Organization</label>
            <input type="text" className="w-full px-4 py-3 border border-brand-gray focus:border-brand-navy focus:outline-none bg-white rounded-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-navy mb-3">I am contacting you as:</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {siteConfig.contactSection.options.map((opt, i) => (
                <label key={i} className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="contactType" className="text-brand-gold focus:ring-brand-gold border-brand-gray" />
                  <span className="text-sm text-brand-gray-dark">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-navy mb-2">What would you like to discuss?</label>
            <textarea rows={5} className="w-full px-4 py-3 border border-brand-gray focus:border-brand-navy focus:outline-none bg-white rounded-none"></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-brand-navy text-white font-medium hover:bg-brand-navy/90 transition-colors">
            Start the Conversation
          </button>
        </form>
      </div>
    </section>
  );
}
