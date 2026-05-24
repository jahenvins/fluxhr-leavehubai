"use client";

import { Sparkles, WandSparkles } from "lucide-react";
import AIChatCard from "@/components/dashboard/AIChatCard";

export default function AIPage() {
  return (
    <div className="space-y-8">
      
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        
        <div>
          <h1 className="font-heading text-5xl font-black tracking-tight text-white">
            AI Assistant
          </h1>

          <p className="mt-3 text-zinc-500">
            Intelligent workforce insights powered by AI
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-2xl border border-teal-500/20 bg-teal-500/10 px-5 py-3 text-sm text-teal-300">
          <Sparkles size={18} />
          AI Active
        </div>
      </div>

      <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 p-8 backdrop-blur-2xl">
        
        <div className="mb-8 flex items-center gap-4">
          
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-400 to-cyan-500 text-black">
            <WandSparkles size={30} />
          </div>

          <div>
            <h2 className="font-heading text-3xl font-black tracking-tight text-white">
              AI Leave Generator
            </h2>

            <p className="mt-2 text-zinc-400">
              Generate professional leave reasons instantly
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          
          <input
            placeholder="Example: Need leave for personal work tomorrow..."
            className="h-16 flex-1 rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none placeholder:text-zinc-500"
          />

          <button className="rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105">
            Generate
          </button>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6">
          
          <p className="text-sm uppercase tracking-[0.2em] text-teal-300">
            AI GENERATED
          </p>

          <p className="mt-4 leading-relaxed text-zinc-300">
            I would like to request leave for tomorrow due to important
            personal commitments that require my attention. I will ensure
            all pending work is completed before the leave period.
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        
        <AIChatCard
          title="Burnout Detection"
          description="Engineering team overtime has increased by 18% this week. Consider workload balancing."
        />

        <AIChatCard
          title="Smart Recommendation"
          description="Friday leave requests are increasing. AI suggests introducing flexible hybrid scheduling."
        />

        <AIChatCard
          title="Workforce Insight"
          description="Design team productivity increased by 12% after implementing flexible work hours."
        />
      </div>
    </div>
  );
}