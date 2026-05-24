"use client";

import { supabase } from "@/lib/supabase";

type Leave = {
  id: string;
  employee_name: string;
  leave_type: string;
  days: string;
  reason: string;
  status: string;
};

export default function LeaveManagementTable({
  requests,
}: {
  requests: Leave[];
}) {
  async function updateStatus(
    id: string,
    status: string
  ) {
    await supabase
      .from("leave_requests")
      .update({ status })
      .eq("id", id);

    location.reload();
  }

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      
      <div className="mb-8">
        
        <h2 className="font-heading text-3xl font-black text-white">
          Manager Workflow
        </h2>

        <p className="mt-2 text-zinc-500">
          Approve or reject leave requests
        </p>
      </div>

      <div className="space-y-5">
        
        {requests?.map((request) => (
          <div
            key={request.id}
            className="rounded-3xl border border-white/10 bg-black/30 p-5"
          >
            
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {request.employee_name}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {request.leave_type} • {request.days}
                </p>

                <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">
                  {request.reason}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                
                <div
                  className={`rounded-full px-4 py-2 text-sm text-center ${
                    request.status === "Approved"
                      ? "bg-emerald-500/10 text-emerald-300"
                      : request.status === "Rejected"
                      ? "bg-red-500/10 text-red-300"
                      : "bg-amber-500/10 text-amber-300"
                  }`}
                >
                  {request.status}
                </div>

                <button
                  onClick={() =>
                    updateStatus(
                      request.id,
                      "Approved"
                    )
                  }
                  className="rounded-2xl bg-emerald-500/10 px-5 py-3 text-sm text-emerald-300 transition hover:bg-emerald-500/20"
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      request.id,
                      "Rejected"
                    )
                  }
                  className="rounded-2xl bg-red-500/10 px-5 py-3 text-sm text-red-300 transition hover:bg-red-500/20"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}