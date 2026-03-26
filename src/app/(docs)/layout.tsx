import type { Metadata } from "next";
import { AppSidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Whiz Cove Project",
};
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-white">
                <AppSidebar />
                {/* SidebarInset handles the padding and transition automatically */}
                <SidebarInset className="flex flex-col">
                    <Header />
                    <main className="flex-1 overflow-y-auto bg-slate-50/30">
                        <div className="p-6 lg:p-10 mx-auto">
                            {children}
                        </div>
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}