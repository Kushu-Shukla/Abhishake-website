import { siteConfig } from "@/config";

export default function CredibilityBar() {
  return (
    <div className="border-y border-brand-gray/50 bg-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {siteConfig.credibility.map((item, index) => (
            <div key={index} className="text-sm font-medium tracking-wide text-brand-navy/70 uppercase">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
