import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-32 pb-20 px-6 min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f172a]">Disclaimer</h1>
          <div className="max-w-none">
            
      <p className="text-slate-500 mb-8">Last updated: September 2026</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">Professional Guidance Disclaimer</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">The information provided on this website and during our consulting, coaching, or advisory sessions is for educational and informational purposes only. It does not constitute formal legal, financial, or certified professional advice.</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">Career Support Disclaimer</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">Career support is intended to provide strategy, preparation, and professional guidance. Job placement, hiring decisions, compensation, and selection outcomes are determined by employers and are strictly not guaranteed.</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">Business Results</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">While we use proven methodologies and frameworks to improve Customer Experience (CX), Operations, and AI adoption, specific business results, ROI, or operational improvements are dependent on various factors including organizational execution, market conditions, and team adoption. We do not guarantee specific financial outcomes.</p>
    
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
