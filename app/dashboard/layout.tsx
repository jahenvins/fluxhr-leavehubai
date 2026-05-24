import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      
      <Sidebar />

      <div className="flex-1 overflow-hidden">
        
        <Topbar />

        <main className="p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}