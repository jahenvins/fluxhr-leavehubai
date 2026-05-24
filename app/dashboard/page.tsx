import StatCard from "@/components/dashboard/StatCard";
import AIInsights from "@/components/dashboard/AIInsights";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import LeaveTable from "@/components/dashboard/LeaveTable";

import { getDashboardStats } from "@/lib/dashboard-data";

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-8">
      
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        
        <StatCard
          title="Total Employees"
          value={String(stats.totalEmployees)}
        />

        <StatCard
          title="Leave Requests"
          value={String(stats.totalRequests)}
        />

        <StatCard
          title="Approval Rate"
          value={`${stats.approvalRate}%`}
        />

        <StatCard
          title="Pending Requests"
          value={String(stats.pending)}
        />
      </div>

      <AIInsights />

      <AnalyticsChart />

      <LeaveTable />
    </div>
  );
}