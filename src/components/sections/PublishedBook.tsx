import { siteConfig } from "@/config";
import Image from "next/image";

export function PublishedBook() {
  const { title, quote, desc, availability, cta, image } = siteConfig.book;
  return (
    <section id="book" className="py-20 px-6 bg-white border-y border-slate-200">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-slate-100 aspect-[3/4] rounded-2xl overflow-hidden relative border border-slate-200 shadow-sm flex items-center justify-center">
            {image ? (
                <Image src={image} alt={title} fill className="object-cover" />
            ) : (
                <span className="text-slate-400 font-bold text-2xl px-8 text-center">{title}</span>
            )}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#0f172a]">{title}</h2>
          <blockquote className="text-xl font-medium text-[#334155] italic mb-6 border-l-4 border-[#0284c7] pl-4">
            {quote}
          </blockquote>
          <p className="text-slate-600 mb-6">{desc}</p>
          <div className="mb-8 font-semibold text-[#0f172a]">{availability}</div>
          <a href={siteConfig.book.link} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#0f172a] text-white rounded-full font-semibold hover:bg-slate-800 transition">
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}