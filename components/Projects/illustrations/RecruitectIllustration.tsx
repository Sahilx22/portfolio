import { ACCENT, ACCENT2, LINE, LINE_SOFT } from './palette';

export default function RecruitectIllustration() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
      <defs>
        <radialGradient id="rc-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.22" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#rc-glow)" />

      {/* resume document */}
      <g transform="translate(130,40)">
        <rect width="120" height="160" rx="8" fill="rgba(255,255,255,0.03)" stroke={LINE} strokeWidth="1.4" />
        <circle cx="24" cy="26" r="10" stroke={ACCENT2} strokeWidth="1.4" fill="rgba(53,217,180,0.12)" />
        <rect x="42" y="20" width="52" height="6" rx="3" fill={LINE_SOFT} />
        <rect x="42" y="30" width="36" height="5" rx="2.5" fill={LINE_SOFT} />
        {[54, 68, 82, 96, 110, 124].map((y, i) => (
          <rect key={i} x="14" y={y} width={i % 2 === 0 ? 92 : 70} height="5" rx="2.5" fill={LINE_SOFT} />
        ))}

        {/* scan line sweeping the resume */}
        <rect x="0" y="0" width="120" height="6" fill={ACCENT2} opacity="0.5">
          <animate attributeName="y" values="0;160;0" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.15;0.6" dur="4.5s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* match confidence ring */}
      <g transform="translate(300,70)">
        <circle r="34" stroke={LINE} strokeWidth="2" fill="rgba(10,12,16,0.4)" />
        <circle r="34" stroke={ACCENT2} strokeWidth="3" strokeDasharray="180" strokeDashoffset="45" strokeLinecap="round" transform="rotate(-90)">
          <animate attributeName="stroke-dashoffset" values="214;30;214" dur="5s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="5" textAnchor="middle" fontSize="16" fill="#ffffff" fontFamily="monospace">83%</text>
      </g>

      {/* skill tags */}
      {['NLP', 'XGBoost', 'spaCy'].map((t, i) => (
        <g key={t} transform={`translate(${60 + i * 6}, ${170 + i * 22})`}>
          <rect width={t.length * 8 + 16} height="22" rx="11" fill="rgba(109,123,255,0.1)" stroke={ACCENT} strokeWidth="1" opacity="0.8" />
          <text x={(t.length * 8 + 16) / 2} y="15" textAnchor="middle" fontSize="10" fill={ACCENT} fontFamily="monospace">
            {t}
          </text>
        </g>
      ))}
    </svg>
  );
}
