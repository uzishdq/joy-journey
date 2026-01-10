"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/8bit/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/8bit/dialog";
import { format } from "date-fns";
import {
  formatDateKey,
  getDaysInMonth,
  getMonthName,
  JoyEntry,
} from "@/lib/utils";
import JoyCell from "./joy-cell";
import JoyLegend from "./joy-legend";
import JoySlider from "./joy-slider";
import { joyEntries } from "@/lib/constant";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const JoyCalendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [entries, setEntries] = useState<JoyEntry[]>(joyEntries);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [tempValue, setTempValue] = useState(5);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getDaysInMonth(year, month);
  const getEntryValue = (date: Date): number | undefined => {
    const key = formatDateKey(date);
    return entries.find((e) => e.date === key)?.value;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleCellClick = (date: Date) => {
    const existingValue = getEntryValue(date);
    setTempValue(existingValue || 5);
    setSelectedDate(date);
  };

  const handleSave = () => {
    if (!selectedDate) return;

    const key = formatDateKey(selectedDate);
    setEntries((prev) => {
      const filtered = prev.filter((e) => e.date !== key);
      return [...filtered, { date: key, value: tempValue }];
    });
    setSelectedDate(null);
  };

  const handleClear = () => {
    if (!selectedDate) return;

    const key = formatDateKey(selectedDate);
    setEntries((prev) => prev.filter((e) => e.date !== key));
    setSelectedDate(null);
  };

  const averageJoy =
    entries.length > 0
      ? (entries.reduce((sum, e) => sum + e.value, 0) / entries.length).toFixed(
          1
        )
      : null;

  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6 text-retro-ink">
        <div className="inline-flex items-center gap-2 mb-2">
          <Sparkles className="w-6 h-6" />
          <h1 className="text-2xl font-extrabold">Joy Journey</h1>
          <Sparkles className="w-6 h-6" />
        </div>
        <p className="text-sm text-retro-paper">Track your daily happiness</p>
      </div>

      {/* Calendar Card */}
      <div className="rounded-2xl p-5">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
          <Button
            variant="secondary"
            size="icon"
            onClick={handlePrevMonth}
            className="p-2 sm:p-2.5 md:p-3"
          >
            <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>

          <h2 className="text-base md:text-lg lg:text-xl font-semibold text-center">
            {getMonthName(month)} {year}
          </h2>

          <Button
            variant="secondary"
            size="icon"
            onClick={handleNextMonth}
            className="p-2 sm:p-2.5 md:p-3"
          >
            <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-semibold text-retro-paper py-1"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((date) => (
            <JoyCell
              key={date.getTime()}
              date={date}
              value={getEntryValue(date)}
              isCurrentMonth={date.getMonth() === month}
              isToday={formatDateKey(date) === formatDateKey(today)}
              onClick={() => handleCellClick(date)}
            />
          ))}
        </div>

        {/* Stats */}
        {averageJoy && (
          <div className="mt-5 pt-4 border-t border-border text-center space-y-2">
            <p className="text-sm text-retro-paper">
              Average Joy:{" "}
              <span className="font-bold text-retro-ink">{averageJoy}</span>/10
            </p>
            <p className="text-sm">({entries.length} days tracked)</p>
          </div>
        )}
      </div>

      {/* Legend */}
      <JoyLegend />

      {/* Edit Dialog */}
      <Dialog open={!!selectedDate} onOpenChange={() => setSelectedDate(null)}>
        <DialogContent className="sm:max-w-sm max-w-[95vw] p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-xl sm:text-2xl font-bold tracking-tight">
              {selectedDate && format(selectedDate, "EEEE, MMMM d")}
            </DialogTitle>
            {selectedDate && (
              <DialogDescription className="text-center text-muted-foreground text-sm mt-1">
                How are you feeling today?
              </DialogDescription>
            )}
          </DialogHeader>

          <div className="py-2">
            <JoySlider value={tempValue} onChange={setTempValue} />
          </div>

          <DialogFooter className="sm:justify-between gap-3 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handleClear}
              className="flex-1 sm:flex-none sm:min-w-25"
            >
              Clear
            </Button>

            <Button
              onClick={handleSave}
              className="flex-1 sm:flex-none sm:min-w-25"
              disabled={!tempValue} // optional: disable kalau belum pilih
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JoyCalendar;
