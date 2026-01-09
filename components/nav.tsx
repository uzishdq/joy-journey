"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { ROUTES } from "@/lib/constant";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full mb-10">
      <div
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between px-4 py-3",
          "retro-panel"
        )}
      >
        {/* Logo */}
        <Link href={ROUTES.PRIVATE.INDEX} className="retro-title">
          JoyJourney
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3">
          <NavItem href={ROUTES.PRIVATE.INDEX}>Journey</NavItem>
          <NavItem href={ROUTES.PRIVATE.PROFILE}>Profile</NavItem>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden retro-button px-3 py-1 text-sm"
          aria-label="Toggle menu"
        >
          <Menu className="w-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 right-0 md:hidden mt-2">
          <div className="mx-auto max-w-5xl px-4">
            <div className="retro-panel flex flex-col gap-2 p-3">
              <NavItem
                href={ROUTES.PRIVATE.INDEX}
                onClick={() => setOpen(false)}
              >
                Journey
              </NavItem>
              <NavItem
                href={ROUTES.PRIVATE.PROFILE}
                onClick={() => setOpen(false)}
              >
                Profile
              </NavItem>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({
  href,
  children,
  onClick,
}: Readonly<{
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}>) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("retro-button text-sm sm:text-base text-center")}
    >
      {children}
    </Link>
  );
}
