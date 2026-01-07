"use client";

import { toast as sonnerToast } from "sonner";

import "./styles/retro.css";
import { cn } from "@/lib/utils";

type ToastType = "success" | "warning" | "error" | "info";

const bgByType: Record<ToastType, string> = {
  success: "bg-retro-green text-retro-paper",
  warning: "bg-retro-yellow text-retro-ink",
  error: "bg-retro-red text-retro-paper",
  info: "bg-retro-blue text-retro-paper",
};

export function toast(toast: string, type: ToastType = "info") {
  return sonnerToast.custom((id) => (
    <Toast id={id} title={toast} type={type} />
  ));
}

interface ToastProps {
  id: string | number;
  title: string;
  type: ToastType;
}

function Toast(props: Readonly<ToastProps>) {
  const { title, type } = props;

  return (
    <div className={`relative ${"retro"}`}>
      <div
        className={cn(
          "flex rounded-lg shadow-lg ring-1 ring-black/5 w-full md:max-w-91 items-center p-4",
          bgByType[type]
        )}
      >
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <p className="text-sm font-medium">{title}</p>
          </div>
        </div>
      </div>

      <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1 -left-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute top-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-1 -right-1.5 h-1/2 w-1.5 bg-foreground dark:bg-ring" />
    </div>
  );
}
