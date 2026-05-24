"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  BellRing,
  ShieldCheck,
  ChartNoAxesCombined,
} from "lucide-react";

const features = [
  {
    icon: <Sparkles size={30} />,
    title: "AI Leave Assistant",
    desc: "Generate professional leave requests instantly with AI assistance.",
  },

  {
    icon: <ChartNoAxesCombined size={30} />,
    title: "Advanced Analytics",
    desc: "Track workforce productivity and leave trends in real time.",
  },

  {
    icon: <ShieldCheck size={30} />,
    title: "Role Based Access",
    desc: "Secure dashboards for admins, managers, and employees.",
  },

  {
    icon: <BellRing size={30} />,
    title: "Smart Notifications",
    desc: "Receive real-time updates for approvals and team activities.",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28">
      
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        
        <div className="mb-20 text-center">
          
          <div className="inline-flex rounded-full border border-teal-500/20 bg-teal-500/10 px-5 py-2 text-sm text-teal-300">
            Premium Features
          </div>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-white">
            Built for Modern HR Teams
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Powerful AI-driven tools designed to simplify employee leave
            management and optimize workforce operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-teal-500/10 text-teal-300">
                  {feature.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-400">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}