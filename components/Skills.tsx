'use client';

import { Reveal, RevealGroup, RevealItem } from './Reveal';
import SectionBlobs from './SectionBlobs';

const AI_SUBGROUPS = [
  {
    label: 'Generative AI & LLMs',
    tags: [
      'Machine Learning',
      'Generative AI',
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Engineering',
      'AI Agents',
      'Agentic AI',
      'Model Fine-tuning',
      'Embeddings',
      'Model Training',
      'Model Evaluation',
      'Model Deployment',
    ],
  },
  {
    label: 'Frameworks & Vector DBs',
    tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'ChromaDB', 'FAISS', 'Qdrant', 'Pinecone'],
  },
  {
    label: 'Classical ML & Statistics',
    tags: ['Regression', 'Classification', 'Clustering', 'Forecasting', 'Recommendation Systems', 'NLP', 'Statistics'],
  },
];

const TAG_CATEGORIES = [
  {
    label: 'Backend & APIs',
    tags: [
      'Django',
      'Django REST Framework',
      'FastAPI',
      'Next.js',
      'Celery',
      'Redis',
      'Microservices',
      'REST APIs',
      'JWT / OAuth2',
      'API Rate Limiting',
      'Caching',
      'WebSockets',
      'Socket.IO',
      'Swagger',
    ],
  },
  {
    label: 'Data, Databases & Analytics',
    tags: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Supabase',
      'OneLake',
      'Data Modelling',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Power BI',
      'Excel',
    ],
  },
  {
    label: 'Cloud, DevOps & Collaboration',
    tags: ['AWS EC2', 'AWS S3', 'Docker', 'GitLab CI', 'GitHub Actions', 'GitHub', 'GitLab', 'Slack', 'Jira', 'ECS', 'ECR', 'Terraform', 'Kubernetes'],
  },
  {
    label: 'Languages & OS',
    tags: ['Python', 'JavaScript', 'HTML', 'CSS', 'Windows', 'Ubuntu (Linux)'],
  },
  {
    label: 'Payment & Communication',
    tags: ['Razorpay', 'SendGrid', 'Twilio', 'Meta'],
  },
];

function TagList({ tags, spotlight = false }: { tags: string[]; spotlight?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className={
            spotlight
              ? 'bg-[rgba(var(--accent-rgb),0.1)] border border-[rgba(var(--accent-rgb),0.25)] text-accent px-2.5 py-1 rounded-md text-xs'
              : 'bg-[rgba(var(--accent2-rgb),0.07)] border border-[rgba(var(--accent2-rgb),0.15)] text-accent2 px-2.5 py-1 rounded-md text-xs'
          }
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 px-8 bg-[rgba(12,14,19,0.65)] backdrop-blur-xl">
      <SectionBlobs />
      <div className="relative z-10 max-w-[1100px] mx-auto">
        <Reveal>
          <div className="section-label">Technical Skills</div>
          <h2 className="font-display font-bold text-heading tracking-tight mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
            What I work with.
          </h2>
          <p className="text-muted max-w-[520px] text-[0.95rem] leading-relaxed mb-10">
            A breakdown of my core technical skills across AI/ML, backend, data, and tooling.
          </p>
        </Reveal>

        <RevealGroup className="flex flex-col gap-6" stagger={0.06}>
          <RevealItem className="rounded-2xl p-7 md:p-8 bg-[rgba(var(--accent-rgb),0.06)] border border-[rgba(var(--accent-rgb),0.3)] transition-all hover:border-accent">
            <div className="text-[0.7rem] tracking-widest uppercase text-accent font-semibold mb-1.5">Focus Area</div>
            <div className="font-display text-xl font-bold text-heading mb-6">AI &amp; Machine Learning</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {AI_SUBGROUPS.map((g) => (
                <div key={g.label}>
                  <div className="text-xs font-semibold text-muted mb-3">{g.label}</div>
                  <TagList tags={g.tags} spotlight />
                </div>
              ))}
            </div>
          </RevealItem>

          <div className="grid md:grid-cols-2 gap-6">
            {TAG_CATEGORIES.map((cat) => (
              <RevealItem
                key={cat.label}
                className="bg-card border border-border rounded-2xl p-7 transition-all hover:border-accent hover:-translate-y-1"
              >
                <div className="text-[0.7rem] tracking-widest uppercase text-accent2 font-semibold mb-4">{cat.label}</div>
                <TagList tags={cat.tags} />
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
