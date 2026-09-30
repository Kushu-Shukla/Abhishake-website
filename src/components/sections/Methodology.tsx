import { siteConfig } from "@/config";

export function Methodology() {
  const phases = siteConfig.consultingMethodology.phases;
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#0f172a]">Signature Consulting Methodology</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {phases.map((phase, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-50 border-2 border-[#0284c7] text-[#0284c7] flex items-center justify-center font-bold text-xl mx-auto mb-4">
                {phase.number}
              </div>
              <h3 className="font-bold mb-2 text-[#0f172a]">{phase.name}</h3>
              <p className="text-sm text-slate-600">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}