export default function Monogram({ size = 64, color, style = {} }) {
  return (
    <div className="monogram" style={{ width: size, height: size, color, ...style }}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <line x1="38" y1="46" x2="82" y2="46" stroke="currentColor" strokeWidth="1.2" />
        <text
          x="60"
          y="73"
          fontFamily="Cormorant Garamond, serif"
          fontStyle="italic"
          fontSize="28"
          fill="currentColor"
          textAnchor="middle"
        >
          L&amp;A
        </text>
        <line x1="38" y1="84" x2="82" y2="84" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
