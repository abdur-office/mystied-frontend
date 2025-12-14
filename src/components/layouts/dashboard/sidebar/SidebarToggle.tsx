"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/SidebarContext";
import { ChevronRight } from "lucide-react";

export default function SidebarToggle() {
  const { toggleCollapse, isCollapsed } = useSidebar();
  return (
    <button
      onClick={toggleCollapse}
      className={cn(
        "theme-toggle-btn absolute top-[52px] -right-[34px] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#F0EEEE] xl:flex",
        isCollapsed ? "-right-[34px]" : "-right-[52px]",
      )}
    >
      <ChevronRight
        className={`${isCollapsed ? "rotate-180" : ""} size-6 transition-all duration-300 ease-in-out`}
      />
    </button>
  );
}
