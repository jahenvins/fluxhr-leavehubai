"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  CalendarDays,
  BarChart3,
  Sparkles,
} from "lucide-react";

const links = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Employees", icon: Users, href: "/dashboard/employees" },
  { name: "Leaves", icon: CalendarDays, href: "/dashboard/leaves" },
  { name: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
  { name: "AI Assistant", icon: Sparkles, href: "/dashboard/ai" },
];

export default function Sidebar({
  open,
}: {
  open: boolean;
}) {
  const pathname = usePathname();

  return (
    <aside
      className={`
        w-[280px] border-r border-white/10 bg-zinc-950
        flex flex-col
        lg:flex
        ${open ? "flex" : "hidden lg:flex"}
      `}
    >
      <div className="border-b border-white/10 p-8">
        <h1 className="font-heading text-3xl font-black tracking-tight text-white">
          FluxHR
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          AI Workforce Platform
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {links.map((link, i) => {
          const Icon = link.icon;
          const active = pathname === link.href;

          return (
            <Link
              key={i}
              href={link.href}
              className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition ${
                active ? "bg-teal-500/10" : "hover:bg-white/5"
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                  active
                    ? "bg-teal-500 text-black"
                    : "bg-white/5 text-teal-300"
                }`}
              >
                <Icon size={20} />
              </div>

              <p
                className={`font-medium ${
                  active ? "text-white" : "text-zinc-300"
                }`}
              >
                {link.name}
              </p>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}