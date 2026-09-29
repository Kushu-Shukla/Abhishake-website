import { siteConfig } from "@/config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-6">
              {siteConfig.insights.heading}
            </h2>
            <div className="flex flex-wrap gap-3">
              {siteConfig.insights.categories.map((cat, i) => (
                <span key={i} className="text-xs font-semibold tracking-wider text-brand-navy/60 uppercase bg-brand-offwhite px-3 py-1 rounded-full border border-brand-gray/50">
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <Link href={siteConfig.insights.cta.href} target="_blank" className="hidden md:flex items-center text-brand-navy font-medium hover:text-brand-gold transition-colors mt-8 md:mt-0">
            {siteConfig.insights.cta.text} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.insights.articles.map((article, index) => (
            <Link href={article.link} target="_blank" key={index} className="group block p-8 border border-brand-gray/50 hover:border-brand-navy transition-colors">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-brand-gold uppercase">{article.category}</span>
                <span className="text-sm text-brand-gray-dark">{article.date}</span>
              </div>
              <h3 className="text-2xl font-light text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{article.title}</h3>
              <p className="text-brand-gray-dark font-light mb-6">{article.description}</p>
              <span className="text-sm font-medium text-brand-navy uppercase tracking-wide flex items-center">
                Read More <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
              </span>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href={siteConfig.insights.cta.href} target="_blank" className="inline-flex items-center text-brand-navy font-medium hover:text-brand-gold transition-colors">
            {siteConfig.insights.cta.text} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
