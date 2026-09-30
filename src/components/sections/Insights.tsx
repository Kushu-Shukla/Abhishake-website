import { siteConfig } from "@/config";

export function Insights() {
  const { headline, pillars } = siteConfig.insights;
  return (
    <section id="insights" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#0f172a]">{headline}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#0284c7] transition cursor-pointer group">
              <h3 className="font-bold text-lg text-[#334155] group-hover:text-[#0284c7]">{pillar}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}