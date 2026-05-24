"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      
      <div className="flex items-center justify-between px-6 py-5">
        
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
            Dashboard
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Welcome back to FluxHR
          </p>
        </div>

        <div className="flex items-center gap-4">
          
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-white/10">
            <Search size={18} />
          </button>

          <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-white/10">
            <Bell size={18} />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-teal-400" />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500" />

            <div>
              <p className="text-sm font-medium text-white">
                Jahnevi
              </p>

              <p className="text-xs text-zinc-500">
                HR Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}