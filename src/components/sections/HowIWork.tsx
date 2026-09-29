import { siteConfig } from "@/config";
import { ArrowRight } from "lucide-react";

export default function HowIWork() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-16 text-center">
          {siteConfig.howIWork.heading}
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start relative">
          <div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-brand-gray z-0"></div>
          
          {siteConfig.howIWork.stages.map((stage, index) => (
            <div key={index} className="relative z-10 flex-1 px-4 mb-10 lg:mb-0">
              <div className="w-12 h-12 bg-white border border-brand-gold rounded-full flex items-center justify-center text-brand-gold font-medium mb-6 mx-auto lg:mx-0">
                {stage.number}
              </div>
              <h3 className="text-lg font-medium text-brand-navy mb-3 text-center lg:text-left">{stage.title}</h3>
              <p className="text-sm text-brand-gray-dark text-center lg:text-left">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
