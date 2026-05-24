import { supabase } from "./supabase";

export async function getDashboardStats() {
  const { data: employees } = await supabase
    .from("employees")
    .select("*");

  const { data: requests } = await supabase
    .from("leave_requests")
    .select("*");

  const totalEmployees = employees?.length || 0;

  const totalRequests = requests?.length || 0;

  const approved =
    requests?.filter(
      (r) => r.status === "Approved"
    ).length || 0;

  const rejected =
    requests?.filter(
      (r) => r.status === "Rejected"
    ).length || 0;

  const pending =
    requests?.filter(
      (r) => r.status === "Pending"
    ).length || 0;

  const approvalRate =
    totalRequests > 0
      ? Math.round(
          (approved / totalRequests) * 100
        )
      : 0;

  return {
    totalEmployees,
    totalRequests,
    approved,
    rejected,
    pending,
    approvalRate,
  };
}