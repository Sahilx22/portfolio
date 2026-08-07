import { ACCENT, ACCENT2, WARM, LINE, LINE_SOFT } from './palette';

export default function SalesCRMIllustration() {
  const bars = [40, 78, 55, 100, 70];
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
      <defs>
        <radialGradient id="crm-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={ACCENT2} stopOpacity="0.2" />
          <stop offset="100%" stopColor={ACCENT2} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#crm-glow)" />

      {/* pipeline columns */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={40 + i * 60} y="30" width="46" height="150" rx="8" fill="rgba(255,255,255,0.03)" stroke={LINE} strokeWidth="1.2" />
      ))}
      {[52, 78, 100].map((y, i) => (
        <rect key={i} x={48} y={y} width="30" height="16" rx="3" fill={i === 1 ? 'rgba(53,217,180,0.18)' : 'rgba(109,123,255,0.14)'} stroke={i === 1 ? ACCENT2 : ACCENT} strokeWidth="1" />
      ))}
      {[62, 92].map((y, i) => (
        <rect key={i} x={108} y={y} width="30" height="16" rx="3" fill="rgba(255,180,84,0.14)" stroke={WARM} strokeWidth="1" />
      ))}
      <rect x={168} y={70} width="30" height="16" rx="3" fill="rgba(53,217,180,0.2)" stroke={ACCENT2} strokeWidth="1" />

      {/* moving lead dot across columns */}
      <circle r="4" fill="#ffffff">
        <animateMotion dur="5s" repeatCount="indefinite" path="M63 60 L123 78 L183 78" />
        <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" />
      </circle>

      {/* revenue bar chart */}
      <g transform="translate(250,200)">
        {bars.map((h, i) => (
          <rect key={i} x={i * 24} y={-h} width="14" height={h} rx="2" fill={i % 2 === 0 ? ACCENT : ACCENT2} opacity="0.85">
            <animate attributeName="height" values={`${h * 0.7};${h};${h * 0.7}`} dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
            <animate attributeName="y" values={`${-h * 0.7};${-h};${-h * 0.7}`} dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
          </rect>
        ))}
        <line x1="-6" y1="0" x2="126" y2="0" stroke={LINE_SOFT} strokeWidth="1.4" />
      </g>
    </svg>
  );
}
