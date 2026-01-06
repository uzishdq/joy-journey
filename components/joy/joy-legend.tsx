import { cn, EMOJIS, JOY_COLORS } from "@/lib/utils";

const JoyLegend = () => {
  return (
    <div
      className="mt-6 text-center animate-slide-up"
      style={{ animationDelay: "0.1s" }}
    >
      <p className="text-xs font-semibold text-muted-foreground mb-3">
        Joy Scale
      </p>
      <div className="flex justify-center gap-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
          <div
            key={level}
            className={cn(
              "w-10 h-10 rounded-md flex items-center justify-center text-xs",
              JOY_COLORS[level]
            )}
            title={`${level}: ${EMOJIS[level]}`}
          >
            <span className="text-lg">{EMOJIS[level]}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground mt-1 px-1 max-w-50 mx-auto">
        <span>Sad</span>
        <span>Happy</span>
      </div>
    </div>
  );
};

export default JoyLegend;
