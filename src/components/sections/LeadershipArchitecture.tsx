import { siteConfig } from "@/config";

export function LeadershipArchitecture() {
  const { quote, points } = siteConfig.leadershipWorkplace;
  return (
    <section id="leadership" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#0f172a]">Leadership in an AI Workplace</h2>
        <p className="text-xl font-medium text-center text-slate-600 mb-12">{quote}</p>
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((pt, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-[#0284c7]/10 text-[#0284c7] rounded-lg flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-[#0f172a]">{pt.title}</h3>
                <p className="text-slate-600">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}