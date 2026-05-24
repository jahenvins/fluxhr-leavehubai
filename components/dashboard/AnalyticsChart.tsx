"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    month: "Jan",
    leaves: 24,
  },

  {
    month: "Feb",
    leaves: 18,
  },

  {
    month: "Mar",
    leaves: 32,
  },

  {
    month: "Apr",
    leaves: 27,
  },

  {
    month: "May",
    leaves: 41,
  },

  {
    month: "Jun",
    leaves: 36,
  },
];

export default function AnalyticsChart() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      
      <div className="mb-8 flex items-center justify-between">
        
        <div>
          <h2 className="font-heading text-3xl font-black tracking-tight text-white">
            Workforce Analytics
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Leave requests overview
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
          Last 6 Months
        </div>
      </div>

      <div className="h-[350px]">
        
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          
          <AreaChart data={data}>
            
            <defs>
              
              <linearGradient
                id="color"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#2dd4bf"
                  stopOpacity={0.8}
                />

                <stop
                  offset="100%"
                  stopColor="#2dd4bf"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#71717a",
                fontSize: 13,
              }}
            />

            <Tooltip
              contentStyle={{
                background: "#09090b",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
                color: "white",
              }}
            />

            <Area
              type="monotone"
              dataKey="leaves"
              stroke="#2dd4bf"
              strokeWidth={3}
              fill="url(#color)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}