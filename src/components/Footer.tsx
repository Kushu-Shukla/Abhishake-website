"use client";

import { siteConfig } from "@/config";
import { LinkedinIcon, TwitterXIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "LinkedIn", url: siteConfig.social.linkedin, icon: LinkedinIcon },
    { name: "X (Twitter)", url: siteConfig.social.twitter, icon: TwitterXIcon },
    { name: "Instagram", url: siteConfig.social.instagram, icon: InstagramIcon },
    { name: "YouTube", url: siteConfig.social.youtube, icon: YoutubeIcon },
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-start mb-16">
          {/* Brand/About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
                <span className="text-sm font-bold bg-gradient-to-br from-gold-500 to-gold-400 bg-clip-text text-transparent">
                  AS
                </span>
              </div>
              <span className="text-white font-bold text-xl tracking-wide">
                Abhishek Shukla
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Transforming operations through AI, automation & human-centered leadership. Building bridges between technology and human potential.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors w-fit"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Connect</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:bg-slate-700 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Abhishek Shukla. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
