'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(8,9,13,0.92)] backdrop-blur-lg border-b border-border shadow-[0_10px_40px_rgba(0,0,0,0.35)] py-3 px-8'
          : 'bg-transparent border-b border-transparent py-5 px-8'
      }`}
    >
      <div className="font-display font-bold text-lg tracking-tight text-heading">
        Sahil<span className="text-accent">.</span>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="relative text-muted text-sm font-medium tracking-wide hover:text-accent2 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-accent2 after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="hidden md:inline-flex bg-accent text-white px-5 py-2 rounded-md text-sm font-semibold font-display transition-all hover:bg-[#c49f7e] hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(var(--accent-rgb),0.35)]"
      >
        Hire Me
      </a>
      <button
        className="md:hidden text-text text-xl"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(8,9,13,0.97)] border-b border-border md:hidden flex flex-col p-4 gap-4">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-muted text-sm" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-accent text-sm font-semibold" onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
