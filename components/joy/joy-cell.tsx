"use client";

import { cn, EMOJIS, JOY_COLORS } from "@/lib/utils";

interface JoyCellProps {
  date: Date;
  value?: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  onClick: () => void;
}

const JoyCell = ({
  date,
  value,
  isCurrentMonth,
  isToday,
  onClick,
}: JoyCellProps) => {
  const dayNumber = date.getDate();

  let dayTextClass = "text-muted-foreground";

  if (value) {
    dayTextClass = value >= 7 ? "text-foreground" : "text-foreground/75";
  }

  if (isToday) {
    dayTextClass = `font-semibold ${
      dayTextClass === "text-muted-foreground"
        ? "text-foreground"
        : dayTextClass
    }`;
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        // Base style
        "group relative aspect-square rounded-xl",
        "flex flex-col items-center justify-center",
        "cursor-pointer select-none transition-all duration-200",
        "border-2 border-transparent",

        // Value-based background
        value
          ? JOY_COLORS[value]
          : "bg-muted/40 hover:bg-muted/70 active:bg-muted/90",

        // Non-current month
        !isCurrentMonth && "opacity-40 pointer-events-none",

        // Today highlight
        isToday && [
          "ring-2 ring-yellow-400/70 ring-offset-2 ring-offset-background",
          "shadow-sm",
        ],

        // Focus & hover states
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2",
        "hover:shadow-md active:scale-[0.97]"
      )}
    >
      {/* Day number */}
      <span
        className={cn(
          "text-base font-medium tracking-tight",
          "transition-colors",
          dayTextClass
        )}
      >
        {dayNumber}
      </span>

      {/* Emoji / Mood indicator */}
      {value && (
        <span
          className={cn(
            "text-3xl sm:text-4xl",
            "transition-all duration-300 ease-out",
            "group-hover:scale-110 group-active:scale-95",
            "animate-in fade-in zoom-in-50 duration-300",
            value >= 7 ? "drop-shadow-sm" : ""
          )}
          aria-hidden="true"
        >
          {EMOJIS[value]}
        </span>
      )}

      {/* Optional: small today dot untuk mobile (lebih hemat tempat) */}
      {isToday && !value && (
        <span className="absolute bottom-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500/80" />
      )}
    </button>
  );
};

export default JoyCell;
