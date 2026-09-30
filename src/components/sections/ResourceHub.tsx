import { siteConfig } from "@/config";

export function ResourceHub() {
  const { headline, categories } = siteConfig.resources;
  return (
    <section id="resources" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#0f172a]">{headline}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-sm transition">
              <h3 className="font-bold text-lg mb-3 text-[#0284c7]">{cat.title}</h3>
              <p className="text-slate-600 text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}