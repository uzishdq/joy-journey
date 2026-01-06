const CloudSvg = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 120 80"
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
    {/* Cloud body */}
    <ellipse cx="60" cy="50" rx="40" ry="22" fill="hsl(200 30% 95%)" />
    <circle cx="35" cy="45" r="20" fill="hsl(200 30% 95%)" />
    <circle cx="85" cy="45" r="18" fill="hsl(200 30% 95%)" />
    <circle cx="55" cy="35" r="22" fill="hsl(200 30% 95%)" />
    <circle cx="75" cy="35" r="18" fill="hsl(200 30% 95%)" />

    {/* Cute face */}
    <circle cx="48" cy="48" r="2.5" fill="hsl(220 20% 40%)" />
    <circle cx="68" cy="48" r="2.5" fill="hsl(220 20% 40%)" />
    <path
      d="M52 56 Q58 62 64 56"
      stroke="hsl(220 20% 40%)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Blush */}
    <ellipse
      cx="42"
      cy="54"
      rx="4"
      ry="2"
      fill="hsl(350 60% 80%)"
      opacity="0.5"
    />
    <ellipse
      cx="74"
      cy="54"
      rx="4"
      ry="2"
      fill="hsl(350 60% 80%)"
      opacity="0.5"
    />
  </svg>
);

export default CloudSvg;
