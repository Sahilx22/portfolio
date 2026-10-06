import { ACCENT, ACCENT2, LINE, LINE_SOFT } from './palette';

export default function TrackPackIllustration() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
      <defs>
        <radialGradient id="tp-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.22" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#tp-glow)" />

      {/* dashed delivery route */}
      <path d="M40 200 C 120 150, 160 210, 230 160 S 340 90, 360 60" stroke={ACCENT2} strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" opacity="0.65">
        <animate attributeName="stroke-dashoffset" from="0" to="-120" dur="6s" repeatCount="indefinite" />
      </path>
      <circle cx="40" cy="200" r="5" fill={ACCENT2} />
      <circle cx="360" cy="60" r="5" fill={ACCENT}>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {/* warehouse crate */}
      <g transform="translate(150,95)">
        <path d="M0 26 L54 0 L108 26 L54 52 Z" fill="rgba(109,123,255,0.08)" stroke={ACCENT} strokeWidth="1.5" />
        <path d="M0 26 L0 84 L54 110 L54 52 Z" fill="rgba(109,123,255,0.05)" stroke={LINE} strokeWidth="1.5" />
        <path d="M108 26 L108 84 L54 110 L54 52 Z" fill="rgba(109,123,255,0.12)" stroke={LINE} strokeWidth="1.5" />
        <path d="M27 13 L81 39 M27 -1 v14" stroke={ACCENT2} strokeWidth="1.2" opacity="0.7" />
      </g>

      {/* QR chip */}
      <g transform="translate(268,138)">
        <rect width="46" height="46" rx="6" fill="rgba(10,12,16,0.7)" stroke={ACCENT2} strokeWidth="1.4" />
        {[
          [6, 6], [16, 6], [34, 6],
          [6, 16], [26, 16],
          [6, 34], [16, 34], [26, 34], [34, 34],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="6" height="6" fill={ACCENT2} opacity="0.85" />
        ))}
      </g>

      {/* bin markers */}
      <rect x="40" y="150" width="30" height="30" rx="4" stroke={LINE_SOFT} strokeWidth="1.4" />
      <rect x="78" y="150" width="30" height="30" rx="4" stroke={LINE_SOFT} strokeWidth="1.4" />
    </svg>
  );
}
