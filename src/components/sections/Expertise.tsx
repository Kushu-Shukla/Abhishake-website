import { siteConfig } from "@/config";

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light mb-16">
          {siteConfig.expertise.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {siteConfig.expertise.categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium text-brand-gold mb-6 pb-2 border-b border-white/10">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="text-brand-gray-dark text-white/80 font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
