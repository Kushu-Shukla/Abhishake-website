import { siteConfig } from "@/config";

export default function SelectedWork() {
  return (
    <section className="py-24 bg-brand-offwhite border-y border-brand-gray/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-16">
          {siteConfig.selectedWork.heading}
        </h2>

        <div className="space-y-12">
          {siteConfig.selectedWork.projects.map((project, index) => (
            <div key={index} className="bg-white p-8 md:p-12 border border-brand-gray/50 shadow-sm">
              <div className="mb-6 pb-6 border-b border-brand-gray/50">
                <span className="text-sm font-semibold tracking-wide text-brand-navy/60 uppercase">
                  {project.client}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy uppercase mb-2">Challenge</h4>
                  <p className="text-brand-gray-dark font-light">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy uppercase mb-2">Approach</h4>
                  <p className="text-brand-gray-dark font-light">{project.approach}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy uppercase mb-2">Outcome</h4>
                  <p className="text-brand-gray-dark font-light">{project.outcome}</p>
                  <div className="mt-4 pt-4 border-t border-brand-gray/50">
                    <h4 className="text-xs font-semibold text-brand-gold uppercase mb-1">Role</h4>
                    <p className="text-sm text-brand-navy">{project.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
