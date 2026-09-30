import { siteConfig } from "@/config";

export function AudiencePathways() {
  const { organizations, professionals, collaborators } = siteConfig.audiencePaths;
  return (
    <section id="pathways" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[organizations, professionals, collaborators].map((path, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4 text-[#0f172a]">{path.title}</h3>
              <p className="text-slate-600 mb-6">{path.description}</p>
              <ul className="mb-8 space-y-3">
                {path.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-700">
                    <span className="text-[#0284c7] mr-2">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a href={path.cta.href} className="text-[#0284c7] font-semibold hover:underline">
                {path.cta.text} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}