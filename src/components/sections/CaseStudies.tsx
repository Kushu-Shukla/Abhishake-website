export function CaseStudies() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Anonymized Case Study Framework</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-6 text-[#0284c7]">Example Case Study</h3>
            <ul className="space-y-4 text-slate-300">
              <li><strong className="text-white">Challenge:</strong> What operational friction needed improvement.</li>
              <li><strong className="text-white">Approach:</strong> What was analyzed, redesigned or automated.</li>
              <li><strong className="text-white">Outcome:</strong> Quantifiable business metrics & lift achieved.</li>
              <li><strong className="text-white">Role:</strong> Exact advisory, engineering or project capacity.</li>
              <li><strong className="text-white">Key Lesson:</strong> Enduring principle learned for the reader.</li>
            </ul>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-center">
             <h3 className="text-xl font-bold mb-4">Genuine Social Proof Elements</h3>
             <ul className="space-y-3 text-slate-300">
               <li>• 50+ Global client ratings & CX director endorsements</li>
               <li>• Verified LinkedIn recommendations & reader reviews</li>
               <li>• Case studies with tangible ROI (+35% onboarding, 3x cost savings)</li>
               <li>• Keynote appearances, published work & media mentions</li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}