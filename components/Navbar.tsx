"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full top-0 z-50 bg-[#fbf9f4] sticky border-b border-outline-variant/30">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-5 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
              <path d="M18 4L4 16V32H14V22H22V32H32V16L18 4Z" fill="#98b39a" />
            </svg>
          </div>
          <span className="text-xl font-serif font-black tracking-tight text-primary">
            Big Green Builders
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif font-bold text-base transition-colors duration-200 pb-0.5 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-background/60 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:block bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-container transition-all duration-200 active:opacity-80"
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fbf9f4] border-t border-outline-variant/30 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-serif font-bold text-lg ${
                pathname === link.href ? "text-primary" : "text-on-background/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold text-sm text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
