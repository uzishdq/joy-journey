"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="sticky z-0 w-full mb-10">
      <div
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between px-4 py-3",
          "retro-panel"
        )}
      >
        {/* Logo / Title */}
        <Link href="/" className="retro-title">
          JoyJourney
        </Link>

        {/* Menu */}
        <div className="flex gap-2 sm:gap-4">
          <NavItem href="/dashboard">Dashboard</NavItem>
          <NavItem href="/journal">Journal</NavItem>
          <NavItem href="/profile">Profile</NavItem>
        </div>
      </div>
    </nav>
  );
}

function NavItem({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <Link href={href} className={cn("retro-button text-sm sm:text-base")}>
      {children}
    </Link>
  );
}
