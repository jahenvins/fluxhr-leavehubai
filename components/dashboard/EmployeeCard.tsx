type Props = {
  name: string;
  role: string;
  department: string;
  status: string;
};

export default function EmployeeCard({
  name,
  role,
  department,
  status,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-teal-500/20">

      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-teal-500/10 blur-[80px] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 text-lg font-black text-black">
              {name.charAt(0)}
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-white">
                {name}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                {role}
              </p>
            </div>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              status === "Active"
                ? "bg-emerald-500/10 text-emerald-300"
                : "bg-red-500/10 text-red-300"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="mt-6 border-t border-white/5 pt-5">

          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
            Department
          </p>

          <div className="mt-3 flex items-center justify-between">

            <p className="text-sm font-medium text-white">
              {department}
            </p>

            <button className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}