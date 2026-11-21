// Taza con vapor, en línea. Es decorativa; el vapor se anima desde el CSS.
export default function Taza({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 130"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <g className="taza__vapor" strokeWidth="3.5">
        <path d="M40 8 C33 18 47 25 40 35 C33 45 46 49 40 56" />
        <path d="M60 4 C53 14 67 21 60 31 C53 41 66 45 60 52" />
        <path d="M80 8 C73 18 87 25 80 35 C73 45 86 49 80 56" />
      </g>
      <g className="taza__cuerpo" strokeWidth="5">
        <ellipse cx="60" cy="68" rx="40" ry="6" />
        <path d="M21 69 L27 104 C28 115 42 121 60 121 C78 121 92 115 93 104 L99 69" />
        <path d="M97 78 C120 76 120 104 92 106" />
      </g>
    </svg>
  )
}
