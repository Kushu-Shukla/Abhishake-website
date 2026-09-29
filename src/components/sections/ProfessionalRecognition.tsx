import { siteConfig } from "@/config";
import Link from "next/link";

export default function ProfessionalRecognition() {
  return (
    <section className="py-24 bg-white border-b border-brand-gray/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-light text-brand-navy mb-12">
          {siteConfig.recognition.heading}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {siteConfig.recognition.items.map((item, index) => (
            <div key={index} className="px-6 py-3 border border-brand-gray text-brand-navy font-medium text-sm tracking-wide">
              {item}
            </div>
          ))}
        </div>
        
        {siteConfig.social.thinkers360 && (
          <div className="mt-12">
             <Link href={siteConfig.social.thinkers360} target="_blank" className="text-brand-gold hover:text-brand-navy underline transition-colors">
                View Thinkers360 Profile
             </Link>
          </div>
        )}
      </div>
    </section>
  );
}
