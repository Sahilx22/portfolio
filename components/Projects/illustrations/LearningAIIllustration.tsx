import { ACCENT, ACCENT2, WARM, LINE_SOFT } from './palette';

export default function LearningAIIllustration() {
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" fill="none">
      <defs>
        <radialGradient id="lrn-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.22" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="url(#lrn-glow)" />

      {/* graduation cap */}
      <g transform="translate(110,55)">
        <path d="M0 14 L46 0 L92 14 L46 28 Z" fill="rgba(109,123,255,0.12)" stroke={ACCENT} strokeWidth="1.5" />
        <path d="M20 20 V38 C20 46 34 52 46 52 C58 52 72 46 72 38 V20" stroke={ACCENT} strokeWidth="1.4" fill="none" opacity="0.7" />
        <line x1="86" y1="12" x2="86" y2="34" stroke={ACCENT2} strokeWidth="1.6" />
        <circle cx="86" cy="36" r="3" fill={ACCENT2} />
      </g>

      {/* AI core processing student records */}
      <g transform="translate(150,130)">
        <polygon points="0,-26 22,-13 22,13 0,26 -22,13 -22,-13" fill="rgba(109,123,255,0.1)" stroke={ACCENT} strokeWidth="1.5" />
        <polygon points="0,-26 22,-13 22,13 0,26 -22,13 -22,-13" fill="none" stroke={ACCENT} strokeWidth="1.5" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="14s" repeatCount="indefinite" />
        </polygon>
        <circle r="9" fill={ACCENT} opacity="0.9" />
      </g>

      {/* incoming feedback cards */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={40 + i * 6} y={20 + i * 8} width="34" height="44" rx="5" fill="rgba(255,255,255,0.04)" stroke={LINE_SOFT} strokeWidth="1.2" opacity={0.8 - i * 0.15}>
          <animate attributeName="y" values={`${20 + i * 8};${110 + i * 8};${20 + i * 8}`} dur={`${6 + i}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.7;0" dur={`${6 + i}s`} repeatCount="indefinite" />
        </rect>
      ))}

      {/* cohort clusters */}
      {[
        { x: 110, y: 200, c: ACCENT2 },
        { x: 150, y: 210, c: WARM },
        { x: 190, y: 198, c: ACCENT },
      ].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="7" fill={p.c} opacity="0.85">
          <animate attributeName="r" values="6;9;6" dur={`${2.4 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* rising mastery curve */}
      <path d="M230 190 C 260 190, 270 150, 300 130 S 340 70, 360 45" stroke={ACCENT2} strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.85" />
      <circle r="4" fill="#ffffff">
        <animateMotion dur="4s" repeatCount="indefinite" path="M230 190 C 260 190, 270 150, 300 130 S 340 70, 360 45" />
      </circle>

      {/* insight bars */}
      <g transform="translate(300,205)">
        {[14, 22, 30, 40].map((h, i) => (
          <rect key={i} x={i * 13} y={-h} width="9" height={h} rx="2" fill={i % 2 === 0 ? ACCENT2 : WARM} opacity="0.85" />
        ))}
      </g>
    </svg>
  );
}
