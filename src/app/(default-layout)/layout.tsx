"use client";

import AppSidebarWrap from "@/components/layouts/dashboard/sidebar/AppSidebarWrap";
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
        <AppSidebarWrap>{children}</AppSidebarWrap>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
