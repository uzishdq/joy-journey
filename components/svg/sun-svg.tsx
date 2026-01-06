const SunSvg = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    imageRendering="pixelated"
    style={{
      imageRendering: "pixelated",
      shapeRendering: "crispEdges",
    }}
  >
    {/* Sun body */}
    <circle cx="50" cy="50" r="25" fill="hsl(45 95% 60%)" />

    {/* Cute face */}
    <circle cx="42" cy="46" r="3" fill="hsl(45 80% 20%)" />
    <circle cx="58" cy="46" r="3" fill="hsl(45 80% 20%)" />
    <path
      d="M42 56 Q50 64 58 56"
      stroke="hsl(45 80% 20%)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Blush */}
    <ellipse
      cx="36"
      cy="52"
      rx="4"
      ry="2.5"
      fill="hsl(15 85% 75%)"
      opacity="0.6"
    />
    <ellipse
      cx="64"
      cy="52"
      rx="4"
      ry="2.5"
      fill="hsl(15 85% 75%)"
      opacity="0.6"
    />

    {/* Sun rays */}
    <g stroke="hsl(45 95% 60%)" strokeWidth="4" strokeLinecap="round">
      <line x1="50" y1="15" x2="50" y2="5" />
      <line x1="50" y1="95" x2="50" y2="85" />
      <line x1="15" y1="50" x2="5" y2="50" />
      <line x1="95" y1="50" x2="85" y2="50" />
      <line x1="25" y1="25" x2="18" y2="18" />
      <line x1="82" y1="82" x2="75" y2="75" />
      <line x1="75" y1="25" x2="82" y2="18" />
      <line x1="18" y1="82" x2="25" y2="75" />
    </g>
  </svg>
);

export default SunSvg;
