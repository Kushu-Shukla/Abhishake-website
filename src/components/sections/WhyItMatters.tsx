import { siteConfig } from "@/config";

export function WhyItMatters() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#0f172a]">Core Brand Positioning</h2>
        <blockquote className="text-2xl md:text-3xl font-medium text-[#334155] mb-8 leading-relaxed">
          {siteConfig.positioning.statement}
        </blockquote>
        <p className="text-lg text-slate-600 leading-relaxed">
          {siteConfig.positioning.expanded}
        </p>
      </div>
    </section>
  );
}