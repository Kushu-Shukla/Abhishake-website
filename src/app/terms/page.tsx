import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-32 pb-20 px-6 min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#0f172a]">Terms of Service</h1>
          <div className="max-w-none">
            
      <p className="text-slate-500 mb-8">Last updated: September 2026</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">1. Agreement to Terms</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">By accessing our website and using our consulting services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">2. Consulting Services</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">Our consulting services are provided on an "as is" and "as available" basis. We reserve the right to modify, suspend, or discontinue any part of the services at any time.</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">3. Intellectual Property</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">The original content, features, and functionality of this website are and will remain the exclusive property of Abhishek Shukla and its licensors. Our frameworks, methodologies, and materials shared during consulting engagements remain our intellectual property unless explicitly transferred in a signed agreement.</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">4. Limitation of Liability</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">In no event shall Abhishek Shukla, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.</p>
      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-800">5. Governing Law</h2>
      <p className="mb-4 text-slate-600 leading-relaxed">These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
    
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
