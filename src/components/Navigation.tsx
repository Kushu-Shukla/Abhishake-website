"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      if (window.location.pathname === '/') {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
      } else {
          window.location.href = href;
      }
      setIsMobileMenuOpen(false);
    } else {
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
          ? "bg-white/95 backdrop-blur-md border-b border-brand-gray" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 text-xl font-medium tracking-wide text-brand-navy">
          i<span className="font-semibold">AbhishekShukla</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium tracking-wide text-brand-navy/70 hover:text-brand-navy transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            onClick={(e) => handleLinkClick(e, "/#contact")}
            className="px-6 py-3 bg-brand-navy text-white text-sm font-medium rounded-none hover:bg-brand-navy/90 transition-colors"
          >
            Work With Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-navy z-50 relative"
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
            className="fixed inset-0 top-24 bg-white z-40 md:hidden flex flex-col p-6 border-t border-brand-gray"
          >
            <div className="flex flex-col space-y-6 mt-4">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-light text-brand-navy tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-full h-px bg-brand-gray my-4" />
              <Link
                href="/#contact"
                onClick={(e) => handleLinkClick(e, "/#contact")}
                className="inline-flex items-center justify-center px-6 py-4 bg-brand-navy text-white font-medium rounded-none uppercase tracking-wide"
              >
                Work With Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
