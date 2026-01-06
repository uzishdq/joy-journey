const HeartSvg = ({ className }: { className?: string }) => (
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
    {/* Heart shape */}
    <path
      d="M50 85 C20 60 10 40 25 25 C35 15 50 20 50 35 C50 20 65 15 75 25 C90 40 80 60 50 85Z"
      fill="hsl(350 80% 70%)"
    />

    {/* Shine */}
    <ellipse
      cx="35"
      cy="35"
      rx="8"
      ry="6"
      fill="hsl(350 80% 85%)"
      opacity="0.6"
    />

    {/* Cute face */}
    <circle cx="40" cy="45" r="2.5" fill="hsl(350 80% 30%)" />
    <circle cx="60" cy="45" r="2.5" fill="hsl(350 80% 30%)" />
    <path
      d="M45 55 Q50 60 55 55"
      stroke="hsl(350 80% 30%)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default HeartSvg;
