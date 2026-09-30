import { siteConfig } from "@/config";

export function CredibilityStrip() {
  return (
    <section id="credentials" className="py-8 bg-[#0f172a] text-slate-300 border-t border-slate-800 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-center">
          {siteConfig.credibilityStrip.items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}