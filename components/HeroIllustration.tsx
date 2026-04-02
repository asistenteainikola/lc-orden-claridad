export default function HeroIllustration() {
  return (
    <div className="relative w-[420px] h-[420px]">
      <svg
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle */}
        <circle cx="210" cy="210" r="180" fill="white" fillOpacity="0.04" />
        <circle cx="210" cy="210" r="160" stroke="#C9962A" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 6" />

        {/* Central diamond / order symbol */}
        <rect x="155" y="155" width="110" height="110" rx="12"
          fill="#1C3557" stroke="#C9962A" strokeWidth="2"
          transform="rotate(0 210 210)" />
        <rect x="168" y="168" width="84" height="84" rx="8"
          fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />

        {/* LC letters in center */}
        <text x="210" y="220" textAnchor="middle"
          fontFamily="Montserrat, sans-serif" fontWeight="800"
          fontSize="32" fill="white" letterSpacing="-1">
          LC
        </text>
        <text x="210" y="238" textAnchor="middle"
          fontFamily="Montserrat, sans-serif" fontWeight="500"
          fontSize="8" fill="#E8B84B" letterSpacing="3">
          ORDEN Y CLARIDAD
        </text>

        {/* Orbiting nodes */}
        {/* Node 1 — top */}
        <circle cx="210" cy="70" r="28" fill="#2E5F8A" />
        <circle cx="210" cy="70" r="20" fill="#1C3557" />
        {/* Icon: light bulb replacement — star */}
        <path d="M210 60 L212.5 67 L220 67 L214 72 L216.5 79 L210 74.5 L203.5 79 L206 72 L200 67 L207.5 67 Z"
          fill="#E8B84B" />

        {/* Node 2 — right */}
        <circle cx="350" cy="210" r="28" fill="#2E5F8A" />
        <circle cx="350" cy="210" r="20" fill="#1C3557" />
        {/* Icon: chart bar */}
        <rect x="342" y="216" width="5" height="8" rx="1" fill="#E8B84B" />
        <rect x="348" y="210" width="5" height="14" rx="1" fill="#C9962A" />
        <rect x="354" y="213" width="5" height="11" rx="1" fill="#E8B84B" />

        {/* Node 3 — bottom */}
        <circle cx="210" cy="350" r="28" fill="#2E5F8A" />
        <circle cx="210" cy="350" r="20" fill="#1C3557" />
        {/* Icon: checkmark */}
        <path d="M201 350 L207 357 L220 343" stroke="#E8B84B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Node 4 — left */}
        <circle cx="70" cy="210" r="28" fill="#2E5F8A" />
        <circle cx="70" cy="210" r="20" fill="#1C3557" />
        {/* Icon: compass / target */}
        <circle cx="70" cy="210" r="8" stroke="#E8B84B" strokeWidth="2" />
        <circle cx="70" cy="210" r="3" fill="#C9962A" />

        {/* Connecting lines */}
        <line x1="210" y1="98" x2="210" y2="155" stroke="#C9962A" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 4" />
        <line x1="322" y1="210" x2="265" y2="210" stroke="#C9962A" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 4" />
        <line x1="210" y1="322" x2="210" y2="265" stroke="#C9962A" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 4" />
        <line x1="98" y1="210" x2="155" y2="210" stroke="#C9962A" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 4" />

        {/* Corner accent squares */}
        <rect x="310" y="100" width="16" height="16" rx="3" fill="#C9962A" fillOpacity="0.3" transform="rotate(15 318 108)" />
        <rect x="90" y="290" width="12" height="12" rx="2" fill="#C9962A" fillOpacity="0.25" transform="rotate(-10 96 296)" />
        <rect x="320" y="300" width="10" height="10" rx="2" fill="white" fillOpacity="0.1" transform="rotate(20 325 305)" />

        {/* Floating dots */}
        <circle cx="140" cy="100" r="4" fill="#C9962A" fillOpacity="0.5" />
        <circle cx="300" cy="130" r="3" fill="#E8B84B" fillOpacity="0.4" />
        <circle cx="130" cy="300" r="3" fill="#C9962A" fillOpacity="0.35" />
        <circle cx="310" cy="320" r="4" fill="white" fillOpacity="0.1" />
      </svg>
    </div>
  );
}
