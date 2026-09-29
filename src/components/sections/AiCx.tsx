import { siteConfig } from "@/config";
import { Check } from "lucide-react";

export default function AiCx() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-8">
            {siteConfig.aiCx.heading}
          </h2>
          <p className="text-xl text-brand-gray-dark leading-relaxed mb-12">
            &ldquo;{siteConfig.aiCx.copy}&rdquo;
          </p>
          <div className="p-6 bg-brand-offwhite border border-brand-gray/50 font-medium text-brand-navy tracking-wide rounded shadow-sm text-sm md:text-base">
            {siteConfig.aiCx.formula}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {siteConfig.aiCx.applications.map((app, index) => (
            <div key={index} className="flex items-center space-x-3 text-brand-navy">
              <Check className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="font-light">{app}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
