import Sidebar from "@/components/sidebar";
import DashboardNavbar from "@/components/dashboard-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1">
        <DashboardNavbar />

        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}