import { siteConfig } from "@/config";
import { ArrowRight } from "lucide-react";

export default function BusinessProblem() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-8">
            {siteConfig.businessProblem.heading}
          </h2>
          <p className="text-lg text-brand-gray-dark mb-6 leading-relaxed">
            {siteConfig.businessProblem.copy1}
          </p>
          <p className="text-lg text-brand-gray-dark leading-relaxed">
            {siteConfig.businessProblem.copy2}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-16">
          {siteConfig.businessProblem.steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <span className="px-6 py-3 bg-brand-offwhite text-brand-navy font-medium text-sm tracking-wide rounded">
                {step}
              </span>
              {index < siteConfig.businessProblem.steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-brand-gold mx-2 md:mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
