import { siteConfig } from "@/config";

export function TalentHiring() {
  const { headline, orgSupport, guardrail } = siteConfig.talentHiring;
  return (
    <section id="talent" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center max-w-4xl mx-auto">{headline}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-100">For Organizations: Hiring Support</h3>
            <ul className="space-y-4 mb-8">
              {orgSupport.map((item, idx) => (
                <li key={idx} className="flex items-start text-slate-300">
                  <span className="text-[#0284c7] mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block text-[#0284c7] font-semibold hover:underline">
              Discuss Your Hiring Requirement →
            </a>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border-l-4 border-[#0284c7]">
            <h3 className="text-xl font-bold mb-4 text-slate-100">Crucial Positioning Guardrail</h3>
            <p className="text-slate-300 leading-relaxed">{guardrail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}