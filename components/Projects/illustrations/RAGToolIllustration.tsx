import { ACCENT, ACCENT2, WARM, LINE } from './palette';

const TOOLS = [
  { label: 'Web', angle: -50, color: ACCENT2 },
  { label: 'SQL', angle: 55, color: WARM },
  { label: 'Analytics', angle: 180, color: ACCENT },
];

export default function RAGToolIllustration() {
  const cx = 150;
  const cy = 130;
  const r = 92;

  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
      <defs>
        <radialGradient id="rag-glow" cx="45%" cy="50%" r="55%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.24" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#rag-glow)" />

      {TOOLS.map((t) => {
        const rad = (t.angle * Math.PI) / 180;
        const x = cx + Math.cos(rad) * r;
        const y = cy + Math.sin(rad) * r;
        return (
          <g key={t.label}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke={t.color} strokeWidth="1.4" strokeDasharray="2 6" opacity="0.6">
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.6s" repeatCount="indefinite" />
            </line>
            <rect x={x - 30} y={y - 16} width="60" height="32" rx="8" fill="rgba(10,12,16,0.65)" stroke={t.color} strokeWidth="1.3" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontFamily="monospace" fill={t.color}>
              {t.label}
            </text>
          </g>
        );
      })}

      {/* LLM core */}
      <g transform={`translate(${cx},${cy})`}>
        <circle r="30" fill="rgba(109,123,255,0.12)" stroke={ACCENT} strokeWidth="1.6" />
        <circle r="30" stroke={ACCENT} strokeWidth="1.6" opacity="0.4">
          <animate attributeName="r" values="30;40;30" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="10" fill={ACCENT} opacity="0.9" />
      </g>

      {/* vector db cluster */}
      <g transform="translate(300,190)">
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i / 10) * Math.PI * 2;
          const rr = 18 + (i % 3) * 6;
          return <circle key={i} cx={Math.cos(a) * rr} cy={Math.sin(a) * rr * 0.6} r="3" fill={ACCENT2} opacity="0.75" />;
        })}
        <text x="0" y="46" textAnchor="middle" fontSize="9" fontFamily="monospace" fill={ACCENT2} opacity="0.8">
          Qdrant
        </text>
      </g>

      {/* trace spans */}
      <g transform="translate(230,40)">
        <rect width="140" height="8" rx="2" fill={ACCENT} opacity="0.55" />
        <rect y="14" width="90" height="8" rx="2" fill={ACCENT2} opacity="0.55" />
        <rect y="28" width="60" height="8" rx="2" fill={WARM} opacity="0.55" />
      </g>
    </svg>
  );
}
