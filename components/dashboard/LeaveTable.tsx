"use client";

import { Check, Clock3, X } from "lucide-react";

const requests = [
  {
    name: "Sarah Johnson",
    role: "UI Designer",
    type: "Vacation",
    days: "4 Days",
    status: "Approved",
  },

  {
    name: "Alex Chen",
    role: "Frontend Developer",
    type: "Sick Leave",
    days: "2 Days",
    status: "Pending",
  },

  {
    name: "Priya Sharma",
    role: "HR Manager",
    type: "Personal",
    days: "1 Day",
    status: "Rejected",
  },

  {
    name: "Michael Lee",
    role: "Backend Engineer",
    type: "Vacation",
    days: "7 Days",
    status: "Approved",
  },
];

export default function LeaveTable() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      
      <div className="mb-8 flex items-center justify-between">
        
        <div>
          <h2 className="font-heading text-3xl font-black tracking-tight text-white">
            Leave Requests
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Manage employee leave approvals
          </p>
        </div>

        <button className="rounded-2xl bg-teal-500 px-5 py-3 text-sm font-semibold text-black transition hover:scale-105">
          New Request
        </button>
      </div>

      <div className="overflow-x-auto">
        
        <table className="w-full border-collapse">
          
          <thead>
            <tr className="border-b border-white/10 text-left">
              
              <th className="pb-5 text-sm font-medium text-zinc-500">
                Employee
              </th>

              <th className="pb-5 text-sm font-medium text-zinc-500">
                Leave Type
              </th>

              <th className="pb-5 text-sm font-medium text-zinc-500">
                Duration
              </th>

              <th className="pb-5 text-sm font-medium text-zinc-500">
                Status
              </th>

              <th className="pb-5 text-sm font-medium text-zinc-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            
            {requests.map((request, i) => (
              <tr
                key={i}
                className="border-b border-white/5 transition hover:bg-white/[0.03]"
              >
                
                <td className="py-5">
                  
                  <div className="flex items-center gap-4">
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 font-bold text-black">
                      {request.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-medium text-white">
                        {request.name}
                      </p>

                      <p className="text-sm text-zinc-500">
                        {request.role}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-5 text-zinc-300">
                  {request.type}
                </td>

                <td className="py-5 text-zinc-300">
                  {request.days}
                </td>

                <td className="py-5">
                  <StatusBadge status={request.status} />
                </td>

                <td className="py-5">
                  
                  <div className="flex items-center gap-3">
                    
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 transition hover:bg-emerald-500/20">
                      <Check size={18} />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-300 transition hover:bg-amber-500/20">
                      <Clock3 size={18} />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-300 transition hover:bg-red-500/20">
                      <X size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  if (status === "Approved") {
    return (
      <div className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
        Approved
      </div>
    );
  }

  if (status === "Pending") {
    return (
      <div className="inline-flex rounded-full bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
        Pending
      </div>
    );
  }

  return (
    <div className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-300">
      Rejected
    </div>
  );
}