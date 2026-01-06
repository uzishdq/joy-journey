const FlowerSvg = ({ className }: { className?: string }) => (
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
    {/* Petals */}
    <ellipse cx="50" cy="25" rx="12" ry="18" fill="hsl(350 80% 75%)" />
    <ellipse
      cx="75"
      cy="40"
      rx="12"
      ry="18"
      fill="hsl(350 80% 75%)"
      transform="rotate(72 75 40)"
    />
    <ellipse
      cx="68"
      cy="70"
      rx="12"
      ry="18"
      fill="hsl(350 80% 75%)"
      transform="rotate(144 68 70)"
    />
    <ellipse
      cx="32"
      cy="70"
      rx="12"
      ry="18"
      fill="hsl(350 80% 75%)"
      transform="rotate(-144 32 70)"
    />
    <ellipse
      cx="25"
      cy="40"
      rx="12"
      ry="18"
      fill="hsl(350 80% 75%)"
      transform="rotate(-72 25 40)"
    />

    {/* Center */}
    <circle cx="50" cy="50" r="15" fill="hsl(45 95% 60%)" />

    {/* Cute face */}
    <circle cx="45" cy="48" r="2" fill="hsl(45 80% 20%)" />
    <circle cx="55" cy="48" r="2" fill="hsl(45 80% 20%)" />
    <path
      d="M46 54 Q50 58 54 54"
      stroke="hsl(45 80% 20%)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Blush */}
    <ellipse
      cx="40"
      cy="52"
      rx="3"
      ry="1.5"
      fill="hsl(15 85% 75%)"
      opacity="0.5"
    />
    <ellipse
      cx="60"
      cy="52"
      rx="3"
      ry="1.5"
      fill="hsl(15 85% 75%)"
      opacity="0.5"
    />
  </svg>
);

export default FlowerSvg;
