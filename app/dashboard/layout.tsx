"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 flex flex-col">
       <Topbar open={open} setOpen={setOpen} />

        <main className="p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}