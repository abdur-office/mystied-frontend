"use client";

import AppSidebar from "@/components/layouts/dashboard/sidebar/AppSidebar";
import { SidebarProvider } from "@/providers/SidebarContext";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <div className="mx-auto max-w-[1440px] overflow-hidden py-5 xl:px-6">
        {/* Sidebar */}
        <div className="flex xl:gap-[30px]">
          <AppSidebar />
          <main className="flex-1 px-2.5 xl:px-0">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
