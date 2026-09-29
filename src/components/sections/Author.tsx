import { siteConfig } from "@/config";
import Link from "next/link";

export default function Author() {
  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-widest text-brand-navy/60 uppercase mb-4 block">
            {siteConfig.author.heading}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-6">
            {siteConfig.author.title}
          </h2>
          <p className="text-xl text-brand-gray-dark leading-relaxed mb-10 italic">
            &ldquo;{siteConfig.author.copy}&rdquo;
          </p>
          <Link href={siteConfig.author.cta.href} className="inline-block px-8 py-4 bg-brand-navy text-white text-center rounded-none font-medium hover:bg-brand-navy/90 transition-colors">
            {siteConfig.author.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
