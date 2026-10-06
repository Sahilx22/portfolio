'use client';

import { Reveal, RevealGroup, RevealItem } from './Reveal';
import SectionBlobs from './SectionBlobs';

const TAGS = ['Python', 'PostgreSQL', 'FastAPI', 'MongoDB', 'ETL Pipelines', 'Power BI', 'NLP / ML'];

const CARDS = [
  {
    icon: '🗄️',
    title: 'Database Architecture',
    desc: 'Schema design, query optimisation, migrations, and data integrity across PostgreSQL, MongoDB, and Supabase.',
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    desc: 'REST APIs, real time systems with WebSockets, and workflow automation using FastAPI, Flask, and Django.',
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    desc: 'ETL pipelines, Power BI dashboards, NLP models, and ML pipelines for business intelligence.',
  },
  {
    icon: '🔗',
    title: 'Systems Integration',
    desc: 'WhatsApp API, Firebase, FCM, n8n workflows, and third-party logistics integrations.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 px-8">
      <SectionBlobs />
      <div className="relative z-10 max-w-[1100px] mx-auto">
        <Reveal className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label">About Me</div>
            <h2 className="font-display font-bold text-heading tracking-tight mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
              I make data work for businesses.
            </h2>
            <p className="text-muted leading-relaxed mb-4 text-[0.95rem]">
              I&apos;m a <strong className="text-text">Backend and Database Developer</strong> based in Bhopal with 2+
              years of hands-on experience building systems that actually scale. My work spans database migrations,
              API development, ETL pipelines, and CRM platforms.
            </p>
            <p className="text-muted leading-relaxed mb-4 text-[0.95rem]">
              I started with <strong className="text-text">data science and analytics</strong> which gives me an edge
              in understanding not just how to store data, but how to make it meaningful. I&apos;ve worked with
              startups from early stage automation to production systems serving hundreds of users.
            </p>
            <p className="text-muted leading-relaxed mb-4 text-[0.95rem]">
              Currently exploring roles where I can drive backend architecture and data infrastructure decisions.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-6">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="bg-[rgba(var(--accent-rgb),0.08)] border border-[rgba(var(--accent-rgb),0.2)] text-accent px-3.5 py-1.5 rounded-full text-[0.78rem] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <RevealGroup className="flex flex-col gap-4">
            {CARDS.map((c) => (
              <RevealItem
                key={c.title}
                className="bg-card border border-border rounded-xl px-6 py-5 flex items-start gap-4 transition-colors hover:border-accent"
              >
                <div className="text-2xl mt-0.5">{c.icon}</div>
                <div>
                  <div className="font-display font-bold text-heading text-[0.95rem] mb-1">{c.title}</div>
                  <div className="text-[0.82rem] text-muted">{c.desc}</div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
