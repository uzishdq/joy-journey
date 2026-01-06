"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/8bit/button";
import {
  Dialog,
  DialogContent,
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

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const JoyCalendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [entries, setEntries] = useState<JoyEntry[]>([]);
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
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 mb-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-extrabold text-foreground">
            Joy Journey
          </h1>
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">
          Track your daily happiness
        </p>
      </div>

      {/* Calendar Card */}
      <div className="bg-card rounded-2xl p-5 shadow-soft animate-slide-up">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-5">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevMonth}
            className="rounded-xl hover:bg-secondary"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <h2 className="text-lg font-bold text-foreground">
            {getMonthName(month)} {year}
          </h2>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextMonth}
            className="rounded-xl hover:bg-secondary"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-semibold text-muted-foreground py-1"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((date, index) => (
            <JoyCell
              key={index}
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
          <div className="mt-5 pt-4 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Average Joy:{" "}
              <span className="font-bold text-primary">{averageJoy}</span>/10{" "}
              <span className="ml-2">({entries.length} days tracked)</span>
            </p>
          </div>
        )}
      </div>

      {/* Legend */}
      <JoyLegend />

      {/* Edit Dialog */}
      <Dialog open={!!selectedDate} onOpenChange={() => setSelectedDate(null)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center font-bold text-xl">
              {selectedDate && format(selectedDate, "EEEE, MMMM d")}
            </DialogTitle>
          </DialogHeader>

          <div className="py-4">
            <JoySlider value={tempValue} onChange={setTempValue} />
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleClear}
              className="flex-1 rounded-xl"
            >
              Clear
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 rounded-xl bg-primary hover:bg-primary/90"
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JoyCalendar;
