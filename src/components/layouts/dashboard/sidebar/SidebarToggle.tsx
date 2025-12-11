"use client";
import { useSidebar } from "@/providers/SidebarContext";
import { ChevronRight } from "lucide-react";

export default function SidebarToggle() {
  const { toggleCollapse, isCollapsed } = useSidebar();
  return (
    <button
      onClick={toggleCollapse}
      className="theme-toggle-btn absolute top-[52px] -right-[52px] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full"
    >
      <ChevronRight
        className={`${isCollapsed ? "rotate-180" : ""} size-6 transition-all duration-300 ease-in-out`}
      />
    </button>
  );
}
