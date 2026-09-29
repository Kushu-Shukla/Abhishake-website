import { siteConfig } from "@/config";
import Link from "next/link";

export default function WorkWithAbhishek() {
  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-6">
            {siteConfig.workWithAbhishek.heading}
          </h2>
          <p className="text-lg text-brand-gray-dark leading-relaxed">
            {siteConfig.workWithAbhishek.copy}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Organizations */}
          <div className="bg-white p-10 border border-brand-gray shadow-sm text-center">
            <h3 className="text-2xl font-light text-brand-navy mb-4">{siteConfig.workWithAbhishek.organizations.title}</h3>
            <p className="text-sm font-medium tracking-widest uppercase text-brand-gold mb-8">
              {siteConfig.workWithAbhishek.organizations.tags}
            </p>
            <Link href={siteConfig.workWithAbhishek.organizations.cta.href} className="inline-block px-8 py-4 bg-brand-navy text-white rounded-none font-medium hover:bg-brand-navy/90 transition-colors w-full">
              {siteConfig.workWithAbhishek.organizations.cta.text}
            </Link>
          </div>

          {/* Professionals */}
          <div className="bg-white p-10 border border-brand-gray shadow-sm text-center">
            <h3 className="text-2xl font-light text-brand-navy mb-4">{siteConfig.workWithAbhishek.professionals.title}</h3>
            <p className="text-sm font-medium tracking-widest uppercase text-brand-gold mb-8">
              {siteConfig.workWithAbhishek.professionals.tags}
            </p>
            <Link href={siteConfig.workWithAbhishek.professionals.cta.href} className="inline-block px-8 py-4 border border-brand-navy text-brand-navy rounded-none font-medium hover:bg-brand-navy hover:text-white transition-colors w-full">
              {siteConfig.workWithAbhishek.professionals.cta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
