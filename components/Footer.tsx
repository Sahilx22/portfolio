'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-8 px-8 border-t border-border flex justify-between items-center flex-col md:flex-row gap-4 text-center md:text-left"
    >
      <div className="text-[0.82rem] text-muted">
        Built by <span className="text-accent">Sahil Soni</span> · Bhopal, India
      </div>
      <div className="flex gap-6">
        {[
          { href: 'https://github.com/sahilx22', label: 'GitHub' },
          { href: 'https://www.linkedin.com/in/sahilsoni2272/', label: 'LinkedIn' },
          { href: 'mailto:sahilsoni.ds@gmail.com', label: 'Email' },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            className="relative text-[0.82rem] text-muted hover:text-accent2 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-accent2 after:transition-all hover:after:w-full"
          >
            {l.label}
          </a>
        ))}
      </div>
    </motion.footer>
  );
}
