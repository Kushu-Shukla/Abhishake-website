import { siteConfig } from "@/config";
import Link from "next/link";
import * as Icons from "lucide-react";

export default function Professionals() {
  return (
    <section id="professionals" className="py-24 bg-white border-b border-brand-gray/50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-4">
            {siteConfig.professionals.heading}
          </h2>
          <p className="text-lg text-brand-gray-dark">
            {siteConfig.professionals.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {siteConfig.professionals.services.map((service, index) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType || Icons.Circle;
            return (
              <div key={index} className="p-8 bg-brand-offwhite border border-brand-gray/50 hover:border-brand-gold/30 transition-colors">
                <Icon className="w-8 h-8 text-brand-navy mb-6" />
                <h3 className="text-xl font-medium text-brand-navy mb-4">{service.title}</h3>
                <p className="text-brand-gray-dark leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href={siteConfig.professionals.cta.href} className="inline-block px-8 py-4 border border-brand-navy text-brand-navy text-center rounded-none font-medium hover:bg-brand-navy hover:text-white transition-colors">
            {siteConfig.professionals.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
