import EmployeeCard from "@/components/dashboard/EmployeeCard";
import AddEmployeeForm from "@/components/dashboard/AddEmployeeForm";
import { supabase } from "@/lib/supabase";

import {
  Search,
  Users,
  UserCheck,
  BriefcaseBusiness,
} from "lucide-react";

export default async function EmployeesPage() {
  const { data: employees } = await supabase
    .from("employees")
    .select("*");

  const totalEmployees = employees?.length || 0;

  const activeEmployees =
    employees?.filter(
      (employee) => employee.status === "Active"
    ).length || 0;

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-2 pb-16">

      {/* HEADER */}

      <section className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="font-heading text-5xl font-black tracking-tight text-white">
            Employees
          </h1>

          <p className="mt-3 max-w-xl text-sm text-zinc-500">
            Manage workforce, departments and employee
            profiles in one place.
          </p>
        </div>

        <button className="rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-4 text-sm font-semibold text-black shadow-[0_0_30px_rgba(20,184,166,0.25)] transition duration-300 hover:scale-[1.03]">
          + Add Member
        </button>
      </section>

      {/* STATS */}

      <section className="grid gap-5 md:grid-cols-3">

        <StatCard
          title="Total Employees"
          value={totalEmployees.toString()}
          icon={<Users size={20} />}
        />

        <StatCard
          title="Active Employees"
          value={activeEmployees.toString()}
          icon={<UserCheck size={20} />}
        />

        <StatCard
          title="Departments"
          value="8"
          icon={<BriefcaseBusiness size={20} />}
        />
      </section>

      {/* ADD EMPLOYEE */}

      <AddEmployeeForm />

      {/* SEARCH + FILTER */}

      <section className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex h-12 w-full max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4">

            <Search
              size={18}
              className="text-zinc-500"
            />

            <input
              placeholder="Search employees..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
          </div>

          <div className="flex items-center gap-3">

            <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/10">
              All Departments
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/10">
              Active Only
            </button>
          </div>
        </div>
      </section>

      {/* EMPLOYEES */}

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {employees?.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            department={employee.department}
            status={employee.status}
          />
        ))}
      </section>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-2xl transition duration-300 hover:border-teal-500/20">

      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-teal-500/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
            {title}
          </p>

          <h3 className="mt-4 font-heading text-4xl font-black text-white">
            {value}
          </h3>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-teal-300">
          {icon}
        </div>
      </div>
    </div>
  );
}