"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/SidebarContext";
import { Menu } from "lucide-react";
import AppSidebar from "./AppSidebar";

export default function AppSidebarWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed, toggleMobileSidebar } = useSidebar();
  return (
    <div className={cn("flex", isCollapsed ? "xl:gap-3" : "xl:gap-[30px]")}>
      <AppSidebar />
      <main className="flex-1 px-2.5 xl:px-0">
        <div className="absolute top-4 right-2 mb-4 flex items-center xl:hidden">
          <button
            type="button"
            onClick={toggleMobileSidebar}
            aria-label="Toggle sidebar"
            className="dark:bg-dark-1-card flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md dark:text-white dark:ring-white/10"
          >
            <Menu className="size-5 text-black dark:text-white" />
          </button>
        </div>
        <span className="body-drop-shadw"></span>
        {children}
      </main>
    </div>
  );
}
