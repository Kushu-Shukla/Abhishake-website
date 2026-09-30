import { siteConfig } from "@/config";
import Link from "next/link";
import * as Icons from "lucide-react";

export default function Organizations() {
  return (
    <section id="organizations" className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-4">
            {siteConfig.organizations.heading}
          </h2>
          <p className="text-lg text-brand-gray-dark">
            {siteConfig.organizations.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {siteConfig.organizations.services.map((service, index) => {
            const IconName = service.icon as keyof typeof Icons;
            const Icon = (Icons[IconName] as any) || Icons.Circle;
            return (
              <div key={index} className="p-8 bg-white border border-brand-gray/50 hover:border-brand-gold/30 transition-colors shadow-sm">
                <Icon className="w-8 h-8 text-brand-gold mb-6" />
                <h3 className="text-xl font-medium text-brand-navy mb-4">{service.title}</h3>
                <p className="text-brand-gray-dark leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href={siteConfig.organizations.cta.href} className="inline-block px-8 py-4 bg-brand-navy text-white text-center rounded-none font-medium hover:bg-brand-navy/90 transition-colors">
            {siteConfig.organizations.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
