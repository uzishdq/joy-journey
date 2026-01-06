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
  1: "bg-slate-500", // very sad – berat, mati rasa
  2: "bg-slate-400", // sad
  3: "bg-blue-400", // low mood, dingin
  4: "bg-sky-400", // mulai ringan
  5: "bg-teal-400", // netral / stabil
  6: "bg-lime-400", // mulai positif
  7: "bg-yellow-400", // happy
  8: "bg-amber-400", // joyful
  9: "bg-orange-400", // excited
  10: "bg-rose-500", // very happy / euphoric
};

export const JOY_COLORS_HOVER: Record<number, string> = {
  1: "hover:bg-slate-600",
  2: "hover:bg-slate-500",
  3: "hover:bg-blue-500",
  4: "hover:bg-sky-500",
  5: "hover:bg-teal-500",
  6: "hover:bg-lime-500",
  7: "hover:bg-yellow-500",
  8: "hover:bg-amber-500",
  9: "hover:bg-orange-500",
  10: "hover:bg-rose-600",
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
