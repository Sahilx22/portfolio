'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from './data';
import TrackPackIllustration from './illustrations/TrackPackIllustration';
import SalesCRMIllustration from './illustrations/SalesCRMIllustration';
import RecruitectIllustration from './illustrations/RecruitectIllustration';
import RAGToolIllustration from './illustrations/RAGToolIllustration';
import NBFCChatbotIllustration from './illustrations/NBFCChatbotIllustration';
import LearningAIIllustration from './illustrations/LearningAIIllustration';

const ILLUSTRATIONS = {
  trackpack: TrackPackIllustration,
  salescrm: SalesCRMIllustration,
  recruitect: RecruitectIllustration,
  ragagent: RAGToolIllustration,
  nbfcchatbot: NBFCChatbotIllustration,
  pgdms: LearningAIIllustration,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 0.84, 0.44, 1] } },
};
const tag = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProjectStory({ project, index }: { project: Project; index: number }) {
  const even = index % 2 === 1;
  const [expanded, setExpanded] = useState(true);

  const Illustration = ILLUSTRATIONS[project.id];

  return (
    <div
      className={`relative flex items-center gap-10 md:gap-20 flex-col md:flex-row ${even ? 'md:flex-row-reverse' : ''}`}
    >
      <span
        className={`hidden md:block absolute font-mono font-bold text-transparent select-none pointer-events-none`}
        style={{
          fontSize: '4.5rem',
          WebkitTextStroke: '1px rgba(109,123,255,0.28)',
          top: '-2.6rem',
          [even ? 'right' : 'left']: '-0.2rem',
        }}
      >
        {project.number}
      </span>

      <motion.div
        initial={{ opacity: 0, x: even ? 70 : -70, scale: 0.94 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 0.84, 0.44, 1] }}
        className="relative flex-none w-full md:max-w-[460px]"
        style={{ flexBasis: '44%' }}
      >
        <div
          className="absolute -inset-[18%] opacity-70 pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(109,123,255,0.22), transparent 65%)', filter: 'blur(70px)' }}
        />
        <div className="relative z-10 rounded-[20px] border border-border bg-gradient-to-br from-[rgba(18,20,26,0.55)] to-[rgba(12,14,19,0.4)] backdrop-blur-md shadow-[0_30px_70px_rgba(0,0,0,0.45)] overflow-hidden">
          <div className="flex gap-1.5 px-4 py-3.5 border-b border-border bg-[rgba(10,12,16,0.5)]">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
          </div>
          <div className="relative w-full h-[260px]">
            <Illustration />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex-1 min-w-0 relative z-10"
      >
        <motion.div variants={item} className="font-mono text-xs tracking-widest uppercase text-accent2 mb-4">
          {project.eyebrow}
        </motion.div>
        <motion.h3
          variants={item}
          className="font-display font-bold text-heading tracking-tight mb-4"
          style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}
        >
          {project.title}
        </motion.h3>
        <motion.p variants={item} className="text-base text-muted leading-relaxed max-w-[480px] mb-6">
          {project.desc}
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-2 mb-7">
          {project.stack.map((s, i) => (
            <motion.span key={s} variants={tag} custom={i} className="stack-tag">
              {s}
            </motion.span>
          ))}
        </motion.div>
        <motion.div variants={item} className="flex gap-4 flex-wrap mb-2">
          <a
            href={project.github}
            target="_blank"
            className="border border-border text-text px-7 py-2.5 rounded-lg font-medium font-display text-sm transition-all hover:border-accent2 hover:text-accent2 hover:-translate-y-0.5"
          >
            GitHub ↗
          </a>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="border border-border text-text px-6 py-2.5 rounded-lg font-medium font-display text-sm inline-flex items-center gap-2 transition-all hover:border-accent2 hover:text-accent2 hover:-translate-y-0.5"
          >
            🔍 {expanded ? 'Show less ↑' : 'Click to expand ↓'}
          </button>
        </motion.div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-border pt-5 mt-7 max-w-[560px]"
          >
            <div className="text-xs text-accent2 font-semibold tracking-wide uppercase mb-2.5">What I built</div>
            <ul className="flex flex-col gap-2">
              {project.bullets.map((b) => (
                <li key={b} className="text-[0.85rem] text-muted pl-4 relative leading-relaxed">
                  <span className="absolute left-0 text-accent">·</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
