import { siteConfig } from "@/config";
import Image from "next/image";

export function TalentHiring() {
  const { headline, orgSupport, guardrail } = siteConfig.talentHiring;
  return (
    <section id="talent" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center max-w-4xl mx-auto">{headline}</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3 relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 shrink-0">
            <Image src="/profile_navy_jacket.png" alt="Abhishek Shukla - Hiring Support" fill className="object-cover object-top" />
          </div>
          
          <div className="flex-1 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-100">For Organizations: Hiring Support</h3>
              <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                {orgSupport.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate-300">
                    <span className="text-[#0284c7] mr-3">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-block text-[#0284c7] font-semibold hover:underline">
                Discuss Your Hiring Requirement &rarr;
              </a>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border-l-4 border-[#0284c7]">
              <h3 className="text-xl font-bold mb-4 text-slate-100">Crucial Positioning Guardrail</h3>
              <p className="text-slate-300 leading-relaxed">{guardrail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}