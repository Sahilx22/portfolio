'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

const stats = [
  { num: '3', suffix: '+', label: 'Years Experience' },
  { num: '250', suffix: '+', label: 'Agents Scaled To' },
  { num: '5M', suffix: '+', label: 'Records Processed' },
  { num: '60', suffix: '%', label: 'Query Speed Gained' },
];

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen flex items-center px-8 pt-32 pb-16 overflow-hidden">
      {!reducedMotion && (
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            maskImage: 'radial-gradient(ellipse 65% 60% at 50% 38%, black 0%, black 35%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 60% at 50% 38%, black 0%, black 35%, transparent 78%)',
          }}
        >
          <HeroScene />
        </div>
      )}
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)',
        }}
      />
      <div
        className="absolute top-[20%] left-[30%] w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb),0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(var(--accent2-rgb),0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[rgba(var(--accent-rgb),0.1)] border border-[rgba(var(--accent-rgb),0.3)] px-4 py-1.5 rounded-full text-accent text-sm font-medium mb-6 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-heading leading-[1.05] tracking-tight mb-2"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
        >
          Backend &amp; Database
          <br />
          <span className="text-accent">Developer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-muted max-w-[520px] my-5 font-light leading-relaxed"
        >
          I build <strong className="text-text font-medium">data systems and backend APIs</strong> that power real
          products. From migrating databases to building CRMs for 250+ agents I turn complex problems into clean,
          working systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm text-muted mb-9 tracking-wide"
        >
          Currently focused on backend systems, data pipelines, and applied ML.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="relative overflow-hidden bg-accent text-white px-8 py-3.5 rounded-lg font-semibold font-display text-sm inline-flex items-center gap-2 transition-all hover:bg-[#c49f7e] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.3)]"
          >
            View My Work ↓
          </a>
          <a
            href="#contact"
            className="border border-border text-text px-8 py-3.5 rounded-lg font-medium font-display text-sm inline-flex items-center gap-2 transition-all hover:border-accent2 hover:text-accent2 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href="/sahil-ds.pdf"
            download="Sahil-Soni-Resume.pdf"
            className="border border-border text-text px-8 py-3.5 rounded-lg font-medium font-display text-sm inline-flex items-center gap-2 transition-all hover:border-accent2 hover:text-accent2 hover:-translate-y-0.5"
          >
            Download Resume ↗
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-12 mt-16 pt-10 border-t border-border flex-wrap"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-heading">
                {s.num}
                <span className="text-accent">{s.suffix}</span>
              </div>
              <div className="text-sm text-muted mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
