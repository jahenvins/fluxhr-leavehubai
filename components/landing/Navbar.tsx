"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 pt-5"
    >
      <nav className="mx-auto max-w-7xl rounded-3xl border border-teal-500/10 bg-black/40 backdrop-blur-2xl px-8 py-4">
        
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 shadow-[0_0_30px_rgba(20,184,166,0.35)]">
              <span className="text-black font-black text-l font-sans">
                FHR
              </span>
            </div>

            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">
                FluxHR
              </h1>

              <p className="text-xs text-zinc-500">
                Modern HR Built For Teams
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm">
            
            <a href="#" className="text-teal-300 transition hover:text-white">
              Home
            </a>

            <a href="#" className="text-zinc-400 transition hover:text-white">
              Features
            </a>

            <a href="#" className="text-zinc-400 transition hover:text-white">
              Analytics
            </a>

            {/* FIXED DASHBOARD LINK */}
            <Link
              href="/dashboard"
              className="text-zinc-400 transition hover:text-white"
            >
              Dashboard
            </Link>

            <a href="/employees" className="text-zinc-400 transition hover:text-white">
              Contact
            </a>
          </div>

          <Link
            href="/sign-up"
            className="rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Get Started
          </Link>

        </div>
      </nav>
    </motion.header>
  );
}