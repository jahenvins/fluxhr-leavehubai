"use client";

import { Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type TopbarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Topbar({ open, setOpen }: TopbarProps) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-xl px-5 py-4">
      
      {/* Left side */}
      <div className="flex items-center gap-3">
        
        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white"
        >
          <Menu />
        </button>

        <div>
          <h1 className="text-sm font-medium text-white">
            Dashboard
          </h1>
          <p className="text-xs text-zinc-500">
            Welcome back 👋
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500" />
      </div>
    </header>
  );
}