"use client";

import { siteConfig } from "@/config";
import { LinkedinIcon, TwitterXIcon, InstagramIcon, YoutubeIcon, Thinkers360Icon, TopmateIcon } from "@/components/icons/SocialIcons";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "LinkedIn", url: siteConfig.social.linkedin, icon: LinkedinIcon },
    { name: "X (Twitter)", url: siteConfig.social.twitter, icon: TwitterXIcon },
    { name: "Instagram", url: siteConfig.social.instagram, icon: InstagramIcon },
    { name: "YouTube", url: siteConfig.social.youtube, icon: YoutubeIcon },
    { name: "Thinkers360", url: siteConfig.social.thinkers360, icon: Thinkers360Icon },
    { name: "Topmate", url: siteConfig.social.topmate, icon: TopmateIcon },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-white/10">
      {/* Decorative gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-t-full" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Brand/About */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-4 w-fit group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-400 transition-colors">
                <Image src={siteConfig.profileImage} alt="Abhishek Shukla" fill className="object-cover" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">
                Abhishek Shukla
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Customer Experience | AI | Business Operations | Leadership | Future of Work
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors w-fit flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Contact Info */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <p>Based in India and available globally through remote consulting, advisory, workshops and project-based engagements.</p>
              <a href={`mailto:${siteConfig.email}`} className="text-blue-400 hover:text-blue-300 transition-colors mt-2">
                Say Hello &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Abhishek Shukla. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
