import { siteConfig } from "@/config";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-medium tracking-wide text-white mb-6 inline-block">
              {siteConfig.name}
            </Link>
            <p className="text-brand-gold font-medium mb-2">{siteConfig.title}</p>
            <p className="text-white/60 font-light max-w-md">{siteConfig.tagline}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Links</h4>
            <ul className="space-y-4">
              {siteConfig.navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/60 hover:text-brand-gold transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <Link href={siteConfig.social.linkedin} target="_blank" className="text-white/60 hover:text-brand-gold transition-colors font-light flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
                </Link>
              </li>
              <li>
                <Link href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-brand-gold transition-colors font-light">
                  Email Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm font-light">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
