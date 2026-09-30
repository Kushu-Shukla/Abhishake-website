import { siteConfig } from "@/config";
import Image from "next/image";

export function LeadershipArchitecture() {
  const { quote, points } = siteConfig.leadershipWorkplace;
  return (
    <section id="leadership" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8 text-[#0f172a]">Leadership in an AI Workplace</h2>
          <p className="text-xl font-medium text-[#334155] mb-12 border-l-4 border-[#0284c7] pl-4">{quote}</p>
          <div className="grid sm:grid-cols-2 gap-8">
            {points.map((pt, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#0284c7]/10 text-[#0284c7] rounded-lg flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#0f172a]">{pt.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-5/12 relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image src="/profile_grey_suit.png" alt="Abhishek Shukla - Leadership" fill className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
}