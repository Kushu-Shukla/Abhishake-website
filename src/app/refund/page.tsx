import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-32 pb-20 px-6 min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f172a]">Refund Policy</h1>
          <div className="max-w-none">
            
      <p class="text-slate-500 mb-8">Last updated: September 2026</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">Consulting and Advisory Services</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">For project-based consulting engagements, refund terms are governed by the specific Statement of Work (SOW) or consulting agreement signed prior to the commencement of the project. Generally, fees paid for completed milestones or delivered advisory sessions are non-refundable.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">Coaching and Strategy Sessions</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">For one-on-one professional coaching, interview preparation, or strategy sessions, cancellations or rescheduling requests must be made at least 24 hours in advance. Sessions cancelled with less than 24 hours notice may not be eligible for a refund.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-slate-800">Digital Products</h2>
      <p class="mb-4 text-slate-600 leading-relaxed">Any digital products, templates, or downloadable resources purchased directly through this website are generally non-refundable due to the nature of digital goods. If you experience technical issues accessing your purchase, please contact us for support.</p>
    
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
