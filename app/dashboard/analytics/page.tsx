import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DepartmentPerformance from "@/components/dashboard/DepartmentPerformance";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        
        <div>
          <h1 className="font-heading text-5xl font-black tracking-tight text-white">
            Analytics
          </h1>

          <p className="mt-3 text-zinc-500">
            Workforce performance and leave insights
          </p>
        </div>

        <button className="rounded-2xl bg-teal-500 px-6 py-4 font-semibold text-black transition hover:scale-105">
          Export Report
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        
        <div className="xl:col-span-2">
          <AnalyticsChart />
        </div>

        <DepartmentPerformance />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        
        <MetricCard
          title="Attendance Rate"
          value="98%"
        />

        <MetricCard
          title="Leave Approval"
          value="94%"
        />

        <MetricCard
          title="Team Productivity"
          value="89%"
        />

        <MetricCard
          title="Employee Satisfaction"
          value="92%"
        />
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
      
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h3 className="mt-4 font-heading text-5xl font-black tracking-tight text-white">
        {value}
      </h3>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
        
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-500"
          style={{
            width: value,
          }}
        />
      </div>
    </div>
  );
}