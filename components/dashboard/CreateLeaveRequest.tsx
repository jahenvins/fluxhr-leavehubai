"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CreateLeaveRequest() {
  const [employeeName, setEmployeeName] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [days, setDays] = useState("");
  const [reason, setReason] = useState("");

  async function createRequest() {
    if (
      !employeeName ||
      !leaveType ||
      !days ||
      !reason
    ) return;

    await supabase.from("leave_requests").insert([
      {
        employee_name: employeeName,
        leave_type: leaveType,
        days,
        reason,
        status: "Pending",
      },
    ]);

    setEmployeeName("");
    setLeaveType("");
    setDays("");
    setReason("");

    location.reload();
  }

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      
      <h2 className="font-heading text-3xl font-black text-white">
        Create Leave Request
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        
        <input
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) =>
            setEmployeeName(e.target.value)
          }
          className="h-14 rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none"
        />

        <input
          placeholder="Leave Type"
          value={leaveType}
          onChange={(e) =>
            setLeaveType(e.target.value)
          }
          className="h-14 rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none"
        />

        <input
          placeholder="Days"
          value={days}
          onChange={(e) =>
            setDays(e.target.value)
          }
          className="h-14 rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none"
        />

        <input
          placeholder="Reason"
          value={reason}
          onChange={(e) =>
            setReason(e.target.value)
          }
          className="h-14 rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none"
        />
      </div>

      <button
        onClick={createRequest}
        className="mt-6 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 px-8 py-4 font-semibold text-black"
      >
        Submit Request
      </button>
    </div>
  );
}