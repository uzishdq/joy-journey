import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface JoyEntry {
  date: string; // YYYY-MM-DD
  value: number; // 1-10
}

export const EMOJIS: Record<number, string> = {
  1: "😢",
  2: "😔",
  3: "😕",
  4: "😐",
  5: "🙂",
  6: "😊",
  7: "😄",
  8: "😁",
  9: "🥳",
  10: "🤩",
};

export const JOY_COLORS: Record<number, string> = {
  1: "bg-joy-1",
  2: "bg-joy-2",
  3: "bg-joy-3",
  4: "bg-joy-4",
  5: "bg-joy-5",
  6: "bg-joy-6",
  7: "bg-joy-7",
  8: "bg-joy-8",
  9: "bg-joy-9",
  10: "bg-joy-10",
};

export const formatDateKey = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

export const getDaysInMonth = (year: number, month: number): Date[] => {
  const days: Date[] = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Add padding days from previous month
  const startPadding = firstDay.getDay();
  for (let i = startPadding - 1; i >= 0; i--) {
    const paddingDate = new Date(year, month, -i);
    days.push(paddingDate);
  }

  // Add days of current month
  for (let day = 1; day <= lastDay.getDate(); day++) {
    days.push(new Date(year, month, day));
  }

  // Add padding days for next month to complete the grid
  const endPadding = 42 - days.length; // 6 rows * 7 days
  for (let i = 1; i <= endPadding; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
};

export const getMonthName = (month: number): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month];
};
