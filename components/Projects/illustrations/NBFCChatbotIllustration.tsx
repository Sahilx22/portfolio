import { ACCENT, ACCENT2, WARM, LINE } from './palette';

export default function NBFCChatbotIllustration() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
      <defs>
        <radialGradient id="nbfc-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={ACCENT2} stopOpacity="0.2" />
          <stop offset="100%" stopColor={ACCENT2} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#nbfc-glow)" />

      {/* bank pillars */}
      <g transform="translate(50,60)" opacity="0.75">
        <path d="M0 30 L40 6 L80 30 Z" fill="rgba(255,255,255,0.04)" stroke={LINE} strokeWidth="1.3" />
        <line x1="4" y1="30" x2="4" y2="90" stroke={LINE} strokeWidth="4" />
        <line x1="22" y1="30" x2="22" y2="90" stroke={LINE} strokeWidth="4" />
        <line x1="40" y1="30" x2="40" y2="90" stroke={LINE} strokeWidth="4" />
        <line x1="58" y1="30" x2="58" y2="90" stroke={LINE} strokeWidth="4" />
        <line x1="76" y1="30" x2="76" y2="90" stroke={LINE} strokeWidth="4" />
        <rect x="-6" y="90" width="92" height="8" rx="2" fill="rgba(255,255,255,0.06)" stroke={LINE} strokeWidth="1" />
      </g>

      {/* RBAC/ABAC shield gate */}
      <g transform="translate(200,110)">
        <path d="M0 -38 L26 -26 V6 C26 30 12 44 0 50 C-12 44 -26 30 -26 6 V-26 Z" fill="rgba(109,123,255,0.1)" stroke={ACCENT} strokeWidth="1.6" />
        <path d="M-11 2 l8 8 16 -18" stroke={ACCENT2} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite" />
        </path>
      </g>

      {/* internal / external message dots crossing the gate */}
      {[
        { from: '60,180', to: '176,120', color: ACCENT2, dur: '3.2s' },
        { from: '340,90', to: '224,118', color: WARM, dur: '2.8s' },
        { from: '340,150', to: '224,130', color: WARM, dur: '3.6s' },
      ].map((p, i) => {
        const [fx, fy] = p.from.split(',');
        const [tx, ty] = p.to.split(',');
        return (
          <g key={i}>
            <line x1={fx} y1={fy} x2={tx} y2={ty} stroke={p.color} strokeWidth="1" opacity="0.25" />
            <circle r="4" fill={p.color}>
              <animateMotion dur={p.dur} repeatCount="indefinite" path={`M${p.from} L${p.to}`} />
              <animate attributeName="opacity" values="0;1;0" dur={p.dur} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}

      {/* chat bubble output */}
      <g transform="translate(90,150)">
        <rect width="70" height="46" rx="12" fill="rgba(53,217,180,0.1)" stroke={ACCENT2} strokeWidth="1.4" />
        <path d="M14 46 L14 58 L28 46 Z" fill="rgba(53,217,180,0.1)" stroke={ACCENT2} strokeWidth="1.4" />
        <line x1="14" y1="16" x2="56" y2="16" stroke={ACCENT2} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        <line x1="14" y1="26" x2="42" y2="26" stroke={ACCENT2} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* human-in-the-loop badge */}
      <g transform="translate(300,50)">
        <circle r="16" fill="rgba(255,180,84,0.1)" stroke={WARM} strokeWidth="1.4" />
        <circle r="16" stroke={WARM} strokeWidth="1.4" opacity="0.5">
          <animate attributeName="r" values="16;22;16" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="4" textAnchor="middle" fontSize="9" fontFamily="monospace" fill={WARM}>
          HITL
        </text>
      </g>
    </svg>
  );
}
