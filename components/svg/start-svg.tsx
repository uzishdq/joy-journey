const StarSvg = ({ className }: { className?: string }) => (
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
    {/* Star shape */}
    <path
      d="M50 10 L58 38 L88 38 L64 56 L72 85 L50 68 L28 85 L36 56 L12 38 L42 38 Z"
      fill="hsl(45 90% 65%)"
    />

    {/* Shine */}
    <circle cx="40" cy="40" r="5" fill="hsl(45 90% 85%)" opacity="0.7" />

    {/* Cute face */}
    <circle cx="42" cy="48" r="2" fill="hsl(45 80% 20%)" />
    <circle cx="58" cy="48" r="2" fill="hsl(45 80% 20%)" />
    <path
      d="M46 56 Q50 60 54 56"
      stroke="hsl(45 80% 20%)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default StarSvg;
