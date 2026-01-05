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

  return (
    <button
      onClick={onClick}
      className={cn(
        "joy-cell relative aspect-square rounded-xl flex flex-col items-center justify-center cursor-pointer",
        "border-2 border-transparent",
        value ? JOY_COLORS[value] : "bg-muted/50 hover:bg-muted",
        !isCurrentMonth && "opacity-30",
        isToday && "ring-2 ring-primary ring-offset-2 ring-offset-background",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      )}
    >
      <span
        className={cn(
          "text-xs font-semibold mb-0.5",
          value && value >= 7 ? "text-foreground/80" : "text-foreground/60"
        )}
      >
        {dayNumber}
      </span>
      {value && (
        <span className="text-lg leading-none animate-pop-in">
          {EMOJIS[value]}
        </span>
      )}
    </button>
  );
};

export default JoyCell;
