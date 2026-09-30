import { siteConfig } from "@/config";

export function WhyItMatters() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[#0f172a] text-center border-b pb-4">Brand Positioning & Hiring Positioning</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#0284c7] mb-4">Core Brand Positioning</h3>
          <p className="text-xl md:text-2xl font-medium text-[#334155] leading-relaxed">
            "I help organizations improve customer experience, operational performance and workplace productivity by bringing together AI, data, process thinking and human-centered leadership."
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#0284c7] mb-4">Hiring Support Positioning</h3>
          <p className="text-xl md:text-2xl font-medium text-[#334155] leading-relaxed">
            Structured hiring support designed to help organizations identify, assess, and onboard relevant talent more effectively and objectively.
          </p>
        </div>
      </div>
    </section>
  );
}