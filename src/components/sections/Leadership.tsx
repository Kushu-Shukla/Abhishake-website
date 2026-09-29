import { siteConfig } from "@/config";
import Link from "next/link";

export default function Leadership() {
  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              {siteConfig.leadership.heading}
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-10 border-l-2 border-brand-gold pl-6 py-2">
              &ldquo;{siteConfig.leadership.copy}&rdquo;
            </p>
            <Link href={siteConfig.leadership.cta.href} className="inline-block px-8 py-4 border border-white text-white text-center rounded-none font-medium hover:bg-white hover:text-brand-navy transition-colors">
              {siteConfig.leadership.cta.text}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {siteConfig.leadership.principles.map((principle, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-medium text-brand-gold mb-3">{principle.title}</h3>
                <p className="text-white/70 font-light text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
