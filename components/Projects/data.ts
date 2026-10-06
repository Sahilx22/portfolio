export type Project = {
  id: 'trackpack' | 'salescrm' | 'recruitect' | 'ragagent' | 'nbfcchatbot' | 'pgdms';
  number: string;
  eyebrow: string;
  title: string;
  desc: string;
  stack: string[];
  github: string;
  bullets: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 'ragagent',
    number: '01',
    eyebrow: 'Product 01 — Agentic RAG',
    title: 'Agentic RAG: Multi Tool Retrieval System',
    desc: 'RAG application with a tool-calling agent that chooses between open web search, an analytics tool, and a SQL agent over a raw data table, fully traced end to end.',
    stack: ['Groq', 'Tavily', 'Qdrant', 'FastAPI', 'Next.js', 'OpenTelemetry'],
    github: 'https://github.com/sahilx22',
    bullets: [
      'Tool-calling agent that routes each query to open web search (Tavily), an analytics tool, or a SQL agent over the raw data table',
      'Groq-hosted LLM for low-latency inference behind a FastAPI backend and Next.js frontend',
      'Qdrant vector database for embedding storage and semantic retrieval over ingested documents',
      'OpenTelemetry tracing across embedding calls, tool calls, and LLM generations for full request observability',
      'Agent autonomously decides when to search the web, query structured data, or run analytics rather than following a fixed pipeline',
    ],
  },
  {
    id: 'nbfcchatbot',
    number: '02',
    eyebrow: 'Product 02 — Enterprise RAG Chatbot',
    title: 'NBFC Assistant: RBAC/ABAC RAG Chatbot',
    desc: 'Internal and external chatbot for an NBFC bank with role and attribute based access control, human-in-the-loop approvals, and a LoRA fine-tuned local LLM.',
    stack: ['LangChain', 'OpenAI Embeddings', 'Reranker', 'SQL Agents', 'LoRA', 'Qwen-3B'],
    github: 'https://github.com/sahilx22',
    bullets: [
      'RBAC and ABAC enforced retrieval so internal staff and external users only ever see data they are permitted to',
      'Semantic search with OpenAI embeddings plus a reranker stage for higher precision retrieval',
      'SQL agents and internal API-calling tools for account and transaction level queries',
      'Human-in-the-loop approval flow for manager level changes, orchestrated with LangChain',
      'End to end tracing plus a LoRA fine-tuned local Qwen-3B model for on-prem inference',
    ],
  },
  {
    id: 'trackpack',
    number: '03',
    eyebrow: 'Product 03 — Warehouse Operations',
    title: 'TrackPack: Inventory & Order System',
    desc: 'Warehouse management platform for SKU tracking, QR based case tracing, and real time delivery updates for 250+ agents.',
    stack: ['FastAPI', 'PostgreSQL', 'MongoDB', 'Firebase', 'WebSockets'],
    github: 'https://github.com/sahilx22',
    bullets: [
      'Real time driver tracking with WebSockets and Firebase FCM push notifications',
      'QR based case level traceability from warehouse to final delivery',
      'Shipping label generation integrated with external delivery partners',
      'Inward/outward logistics APIs with bin management and SKU transfers',
      'Role based data access ensuring agents only see their own orders',
    ],
  },
  {
    id: 'salescrm',
    number: '04',
    eyebrow: 'Product 04 — Sales Platform',
    title: 'Sales CRM: Full Stack Platform',
    desc: 'End to end CRM for a sales org of 250+ agents with multi role dashboards, lead automation, and revenue analytics.',
    stack: ['React (TS)', 'FastAPI', 'PostgreSQL', 'n8n', 'OAuth'],
    github: 'https://github.com/sahilx22',
    bullets: [
      'Multi role dashboards for Agent, Floor Manager, and Sales Head with separate permissions',
      'n8n workflow automation for performance based lead assignment and round-robin distribution',
      'Revenue analytics and order lifecycle tracking across the full sales funnel',
      'Real time agronomy suggestions via WebSockets integrated into agent view',
      'FCM notifications and OAuth authentication across the platform',
    ],
  },
  {
    id: 'recruitect',
    number: '05',
    eyebrow: 'Product 05 — AI Hiring',
    title: 'Recruitect: AI Hiring Pipeline',
    desc: 'ML powered hiring automation that screened 500+ candidates per cycle, cutting recruiter effort by 80%.',
    stack: ['Python', 'spaCy', 'XGBoost', 'Flask', 'NLP'],
    github: 'https://github.com/sahilx22',
    bullets: [
      'NER based resume parser to extract structured data from unstructured CVs',
      'TF-IDF + cosine similarity engine matching candidates to job descriptions',
      'Random Forest and XGBoost classifiers scoring culture fit and skill alignment',
      'Flask REST API integrated into the HR portal with model monitoring',
      '83% culture fit accuracy, 24 hours saved weekly in manual screening',
    ],
  },
  {
    id: 'pgdms',
    number: '06',
    eyebrow: 'Product 06 — Academic Analytics',
    title: 'PGDMS: Student Feedback Analytics',
    desc: 'NLP pipeline processing 10K+ feedback records per term, surfacing insights to Power BI dashboards for academic leadership.',
    stack: ['BERT', 'LDA', 'VADER', 'Pandas', 'Power BI'],
    github: 'https://github.com/sahilx22',
    bullets: [
      'Automated ingestion, cleaning, and transformation pipeline for student feedback data',
      'Sentiment analysis using VADER and fine-tuned BERT for positive/negative classification',
      'LDA topic modelling to surface recurring themes by subject and instructor',
      'Power BI dashboards with drill-down by course, cohort, and instructor',
      'Adopted across 4 programme tracks, 15% improvement in student experience per cycle',
    ],
  },
];
