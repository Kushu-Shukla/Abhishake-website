"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { siteConfig } from "@/config";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Intersection Observer for active sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = siteConfig.navLinks.map((link) =>
      document.getElementById(link.href.replace("#", ""))
    );
    
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled 
          ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,212,255,0.05)]" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 z-50">
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-gold-500/50 transition-colors">
            <span className="text-lg font-bold bg-gradient-to-br from-gold-500 to-gold-400 bg-clip-text text-transparent">
              AS
            </span>
          </div>
          <span className="text-white font-semibold hidden sm:block tracking-wide group-hover:text-gold-400 transition-colors">
            Abhishek Shukla
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  isActive ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 rounded-full font-semibold text-sm hover:scale-105 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 bg-slate-900/95 backdrop-blur-3xl z-40 md:hidden flex flex-col p-6 border-t border-white/5"
          >
            <div className="flex flex-col gap-6 mt-8">
              {siteConfig.navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-2xl font-bold tracking-tight ${
                      isActive ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="w-full h-px bg-white/10 my-4" />
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-slate-900 rounded-xl font-bold text-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
