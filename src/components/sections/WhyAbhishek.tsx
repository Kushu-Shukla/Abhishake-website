import { siteConfig } from "@/config";

export default function WhyAbhishek() {
  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-light mb-20 max-w-4xl leading-tight">
          {siteConfig.whyAbhishek.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {siteConfig.whyAbhishek.statements.map((statement, index) => (
            <div key={index} className="border-t border-white/20 pt-6">
              <h3 className="text-xl font-medium text-brand-gold mb-4">{statement.title}</h3>
              <p className="text-white/80 font-light text-lg">{statement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
