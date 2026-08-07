'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Reveal } from './Reveal';
import SectionBlobs from './SectionBlobs';

type Entry = {
  company: string;
  role: string;
  date: string;
  bullets: string[];
  chips: string[];
};

const TABS: Record<'backend' | 'database' | 'analytics', { label: string; entries: Entry[] }> = {
  backend: {
    label: 'Backend Development',
    entries: [
      {
        company: 'Katyayani Organics · Bhopal',
        role: 'Database Developer',
        date: 'June 2025 to Mar 2026',
        bullets: [
          'Built FastAPI backend for a full CRM serving 250+ sales agents with order management, inventory tracking, and shipping integrations.',
          'Implemented WebSocket and Firebase FCM real time updates for field agents, reducing support escalations by 35%.',
          'Designed QR based case tracking, inward/outward logistics, and shipping label generation connected to delivery partners.',
          'Built role based access control so agents only see their own leads, managers see aggregated data across 7 org tiers.',
          'Implemented live agent activity tracking using FCM triggers to record cumulative call times and idle hours, improving productivity by ~50%.',
        ],
        chips: ['FastAPI', 'WebSockets', 'Firebase', 'PostgreSQL', 'Docker'],
      },
      {
        company: 'Icon Tensile and Structure · Indore',
        role: 'Analyst, Automation & BI',
        date: 'Mar 2024 to Jun 2025',
        bullets: [
          'Built internal tools using Flask and REST APIs for data extraction, reporting, and workflow automation.',
          'Integrated WhatsApp Business API for automated client messaging across 500+ clients.',
          'Automated 6+ manual processes saving 20+ hours per week using Python and Google Apps Script.',
        ],
        chips: ['Flask', 'Python', 'REST APIs', 'Google Apps Script'],
      },
      {
        company: 'Deep Thought EduTech · Hyderabad',
        role: 'Data Scientist',
        date: 'Sept 2023 to Feb 2024',
        bullets: [
          'Deployed ML models via Flask REST APIs integrated into the HR portal for automated candidate screening.',
          'Built data pipeline processing 10K+ feedback records per term and delivering insights to a Power BI dashboard.',
        ],
        chips: ['Flask', 'scikit-learn', 'REST APIs', 'Python'],
      },
    ],
  },
  database: {
    label: 'Database Work',
    entries: [
      {
        company: 'Katyayani Organics · Bhopal',
        role: 'Database Developer',
        date: 'June 2025 to Mar 2026',
        bullets: [
          'Migrated production database from MongoDB to Supabase (PostgreSQL), redesigned schema with universal keys across the entire userbase.',
          'Optimised PostgreSQL queries cutting average response time by 60% for concurrent order and inventory operations.',
          'Built ETL pipelines streaming live transactional data into Power BI for real time sales and warehouse dashboards.',
          'Cleaned and standardised 100K+ legacy records across product, customer and order tables, improving data accuracy by 45%.',
          'Masked sensitive contact fields and enforced row-level access so each agent only sees their own customer data.',
        ],
        chips: ['PostgreSQL', 'MongoDB', 'Supabase', 'ETL', 'Power BI'],
      },
      {
        company: 'Icon Tensile and Structure · Indore',
        role: 'Analyst, Automation & BI',
        date: 'Mar 2024 to Jun 2025',
        bullets: [
          'Built a live sales tracking system on Google Sheets API feeding Power BI dashboards, moving reporting from weekly to daily.',
          'Analysed 2 years of project data to surface cost and timeline trends for leadership decision-making.',
        ],
        chips: ['Google Sheets API', 'Power BI', 'Python'],
      },
    ],
  },
  analytics: {
    label: 'Data & Analytics',
    entries: [
      {
        company: 'Deep Thought EduTech · Hyderabad',
        role: 'Data Scientist',
        date: 'Sept 2023 to Feb 2024',
        bullets: [
          'Built a hiring pipeline using NLP (spaCy, NLTK) and ML classifiers (Random Forest, XGBoost) that screened 500+ candidates per cycle.',
          'Developed resume parser using Named Entity Recognition to extract structured data from CVs, then matched them to job descriptions using TF-IDF similarity at 83% accuracy.',
          'Reduced recruiter workload by 80% and saved 24 hours per week of manual screening effort.',
          'Processed 10K+ student feedback records per term using sentiment analysis (VADER + BERT) and LDA topic modelling.',
          'Delivered Power BI dashboards by course and instructor adopted across 4 programme tracks, driving 15% improvement in student experience each cycle.',
        ],
        chips: ['NLP', 'spaCy', 'BERT', 'XGBoost', 'Power BI', 'LDA'],
      },
      {
        company: 'Icon Tensile and Structure · Indore',
        role: 'Analyst, Automation & BI',
        date: 'Mar 2024 to Jun 2025',
        bullets: [
          'Analysed sales and operations workflows to identify bottlenecks, then automated 6+ manual processes saving 20+ hours weekly.',
          'Cut quotation turnaround from 1.5 hours to under 10 minutes using Python automation handling 30+ quotes per week.',
          'Built live Power BI dashboards improving management decision speed by 50%.',
        ],
        chips: ['Python', 'Power BI', 'Google Sheets', 'Analytics'],
      },
    ],
  },
};

export default function Experience() {
  const [tab, setTab] = useState<keyof typeof TABS>('backend');
  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!timelineRef.current || !fillRef.current) return;
      gsap.fromTo(
        fillRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 85%',
            end: 'bottom 30%',
            scrub: 0.6,
          },
        }
      );
    },
    { dependencies: [tab], scope: timelineRef }
  );

  useGSAP(() => {
    ScrollTrigger.refresh();
  }, [tab]);

  const active = TABS[tab];

  return (
    <section id="experience" className="relative overflow-hidden py-20 px-8">
      <SectionBlobs />
      <div className="relative z-10 max-w-[1100px] mx-auto">
        <Reveal>
          <div className="section-label">Experience</div>
          <h2 className="font-display font-bold text-heading tracking-tight mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            Where I&apos;ve worked.
          </h2>
          <p className="text-muted max-w-[480px] text-[0.95rem] leading-relaxed mb-10">
            3 companies, 2+ years, real production systems. Explore by focus area.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex gap-2 mb-10 border-b border-border">
            {(Object.keys(TABS) as (keyof typeof TABS)[]).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`font-display text-sm font-semibold px-5 py-3 -mb-px border-b-2 transition-colors ${
                  tab === key ? 'text-accent border-accent' : 'text-muted border-transparent hover:text-text'
                }`}
              >
                {TABS[key].label}
              </button>
            ))}
          </div>

          <div ref={timelineRef} className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            <div ref={fillRef} className="absolute left-0 top-0 w-px bg-gradient-to-b from-accent to-accent2 shadow-[0_0_10px_rgba(var(--accent-rgb),0.6)]" style={{ height: '0%' }} />

            {active.entries.map((entry, i) => (
              <motion.div
                key={entry.company + entry.role}
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                <span className="absolute -left-[2.35rem] top-1.5 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.2),0_0_12px_rgba(var(--accent-rgb),0.5)]" />
                <div className="text-xs text-accent2 font-semibold tracking-wide uppercase mb-1">{entry.company}</div>
                <div className="font-display text-lg font-bold text-heading mb-1">{entry.role}</div>
                <div className="text-xs text-muted mb-3">{entry.date}</div>
                <ul className="flex flex-col gap-2 mb-3">
                  {entry.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted pl-5 relative leading-relaxed">
                      <span className="absolute left-0 text-accent text-xs top-0.5">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {entry.chips.map((c) => (
                    <span
                      key={c}
                      className="bg-[rgba(var(--accent-rgb),0.08)] border border-[rgba(var(--accent-rgb),0.15)] text-accent px-2.5 py-1 rounded text-xs font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
