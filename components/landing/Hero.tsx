"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-9 pt-32 pb-5">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.22),transparent_25%)]" />
      
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          <div className="mb-8 inline-flex items-center rounded-full border border-teal-500/20 bg-teal-500/10 px-5 py-2 text-sm text-teal-300 backdrop-blur-xl">
            AI-Powered Workforce Intelligence
          </div>

          <h1 className="font-heading text-5xl font-black leading-[1] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">
Modern HR

<br/>

  <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-white bg-clip-text text-transparent">
    
Built For Teams
  </span>

</h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Streamline leave management, approvals, and workforce insights with an AI-powered platform designed for modern teams.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <button className="rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 px-8 py-4 font-semibold text-black shadow-[0_0_40px_rgba(20,184,166,0.35)] transition hover:scale-105">
              Start Free Trial
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-xl transition hover:bg-white/10">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}