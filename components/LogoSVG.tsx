interface LogoSVGProps {
  className?: string;
  variant?: "default" | "white" | "gold";
}

export default function LogoSVG({ className = "w-12 h-12", variant = "default" }: LogoSVGProps) {
  const outerColor = variant === "white" ? "#ffffff" : "#C9962A";
  const innerColor = variant === "gold" ? "#C9962A" : "#1C3557";
  const letterColor = variant === "default" ? "#ffffff" : variant === "white" ? "#1C3557" : "#ffffff";

  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer square rotated 45deg */}
      <rect
        x="7"
        y="7"
        width="38"
        height="38"
        rx="4"
        fill={outerColor}
        transform="rotate(8 26 26)"
        opacity="0.25"
      />
      {/* Main background square */}
      <rect x="4" y="4" width="44" height="44" rx="8" fill={innerColor} />
      {/* Gold accent line top */}
      <rect x="4" y="4" width="44" height="4" rx="2" fill={outerColor} />
      {/* Letters LC */}
      <text
        x="26"
        y="32"
        textAnchor="middle"
        fontFamily="Montserrat, sans-serif"
        fontWeight="800"
        fontSize="18"
        fill={letterColor}
        letterSpacing="-1"
      >
        LC
      </text>
    </svg>
  );
}
