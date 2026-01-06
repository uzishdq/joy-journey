"use client";

import { cn, EMOJIS, JOY_COLORS, JOY_COLORS_HOVER } from "@/lib/utils";
import { Button } from "../ui/button";

interface JoySliderProps {
  value: number;
  onChange: (value: number) => void;
}

const JoySlider = ({ value, onChange }: JoySliderProps) => {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <span className="text-5xl animate-bounce-soft inline-block">
          {EMOJIS[value]}
        </span>
        <p className="mt-2 text-sm font-semibold text-muted-foreground">
          Joy Level: {value}/10
        </p>
      </div>

      <div className="flex gap-1.5 justify-center flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
          <Button
            key={level}
            onClick={() => onChange(level)}
            className={cn(
              "w-10 h-10 rounded-md text-lg transition-all duration-200",
              "hover:scale-110 focus:outline-none",
              JOY_COLORS[level],
              JOY_COLORS_HOVER[level],
              value === level
                ? "ring-2 ring-primary scale-110"
                : "opacity-60 hover:opacity-100"
            )}
          >
            {EMOJIS[level]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default JoySlider;
