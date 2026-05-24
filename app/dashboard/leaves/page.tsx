import CreateLeaveRequest from "@/components/dashboard/CreateLeaveRequest";
import LeaveManagementTable from "@/components/dashboard/LeaveManagementTable";

import { supabase } from "@/lib/supabase";

export default async function LeavesPage() {
  const { data: requests } = await supabase
    .from("leave_requests")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return (
    <div className="space-y-8">
      
      <div>
        <h1 className="font-heading text-5xl font-black tracking-tight text-white">
          Leave Management
        </h1>

        <p className="mt-3 text-zinc-500">
          Handle employee leave workflows
        </p>
      </div>

      <CreateLeaveRequest />

      <LeaveManagementTable
        requests={requests || []}
      />
    </div>
  );
}