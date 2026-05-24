"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Engineering",
    value: 40,
  },

  {
    name: "Design",
    value: 20,
  },

  {
    name: "HR",
    value: 15,
  },

  {
    name: "Marketing",
    value: 25,
  },
];

const COLORS = [
  "#14b8a6",
  "#06b6d4",
  "#0f766e",
  "#164e63",
];

export default function DepartmentPerformance() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      
      <div className="mb-8">
        
        <h2 className="font-heading text-3xl font-black tracking-tight text-white">
          Department Performance
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Workforce distribution overview
        </p>
      </div>

      <div className="h-[320px]">
        
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          
          <PieChart>
            
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={5}
            >
              
              {data.map((_, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 space-y-4">
        
        {data.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between"
          >
            
            <div className="flex items-center gap-3">
              
              <div
                className="h-3 w-3 rounded-full"
                style={{
                  background: COLORS[i],
                }}
              />

              <p className="text-sm text-zinc-300">
                {item.name}
              </p>
            </div>

            <p className="text-sm text-zinc-500">
              {item.value}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}