"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  CircleCheck,
  Clock3,
  TrendingUp,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28">
      
      <div className="absolute top-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
      >
        
        <div className="mb-10 flex items-center justify-between">
          
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-teal-300">
              Analytics
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
              HR Intelligence Dashboard
            </h2>
          </div>

          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm text-teal-300">
            Live Insights
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          
          <Card
            icon={<CalendarDays />}
            title="Total Leaves"
            value="248"
          />

          <Card
            icon={<CircleCheck />}
            title="Approved"
            value="186"
          />

          <Card
            icon={<Clock3 />}
            title="Pending"
            value="32"
          />

          <Card
            icon={<TrendingUp />}
            title="Efficiency"
            value="94%"
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            
            <div className="mb-8 flex items-center justify-between">
              
              <div>
                <h3 className="text-xl font-bold text-white">
                  Leave Trends
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Workforce analytics overview
                </p>
              </div>

              <div className="rounded-xl bg-white/5 px-3 py-2 text-sm text-zinc-400">
                Last 6 Months
              </div>
            </div>

            <div className="flex h-72 items-end gap-4">
              
              {[35, 55, 70, 45, 95, 120].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height }}
                  transition={{ delay: i * 0.08 }}
                  className="flex-1 rounded-t-3xl bg-gradient-to-t from-teal-500 to-cyan-300"
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            
            <h3 className="text-xl font-bold text-white">
              AI Insights
            </h3>

            <div className="mt-6 space-y-4">
              
              <Insight
                title="Friday Leave Spike"
                desc="Leave requests are 23% higher on Fridays."
              />

              <Insight
                title="Burnout Detection"
                desc="Marketing team overtime increased this week."
              />

              <Insight
                title="Best Attendance"
                desc="Engineering achieved 98% presence."
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl">
      
      <div className="flex items-center justify-between">
        
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-300">
          {icon}
        </div>

        <div className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
          +12%
        </div>
      </div>

      <p className="mt-6 text-sm text-zinc-500">
        {title}
      </p>

      <h3 className="mt-2 text-4xl font-black tracking-tight text-white">
        {value}
      </h3>
    </div>
  );
}

function Insight({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      
      <h4 className="font-semibold text-white">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {desc}
      </p>
    </div>
  );
}