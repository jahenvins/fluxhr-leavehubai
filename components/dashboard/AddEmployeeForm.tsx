"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Plus } from "lucide-react";

export default function AddEmployeeForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);

  async function addEmployee() {
    if (!name || !role || !department) return;

    setLoading(true);

    const { error } = await supabase
      .from("employees")
      .insert([
        {
          name,
          role,
          department,
          status: "Active",
        },
      ]);

    setLoading(false);

    if (error) {
      console.log(error);
      return;
    }

    setName("");
    setRole("");
    setDepartment("");

    window.location.reload();
  }

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-2xl">

      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="relative">

        <div className="mb-8 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 text-black shadow-[0_0_30px_rgba(20,184,166,0.3)]">
            <Plus size={22} />
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-white">
              Add Employee
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Create employee records quickly
            </p>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">

          <input
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition focus:border-teal-400"
          />

          <input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="h-12 rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition focus:border-teal-400"
          />

          <input
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="h-12 rounded-2xl border border-white/10 bg-black/30 px-5 text-sm text-white outline-none transition focus:border-teal-400"
          />
        </div>

        <button
          onClick={addEmployee}
          disabled={loading}
          className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 font-semibold text-black shadow-[0_0_30px_rgba(20,184,166,0.3)] transition hover:scale-[1.01]"
        >
          <Plus size={18} />

          {loading ? "Adding Employee..." : "Add Employee"}
        </button>
      </div>
    </section>
  );
}