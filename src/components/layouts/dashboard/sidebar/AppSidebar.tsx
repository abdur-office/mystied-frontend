import Logo from "@/components/ui/logo";
import ThemeToggle from "@/components/ui/theme-toggle";
import { menuConfig } from "@/lib/menuConfig";
import { useSidebar } from "@/providers/SidebarContext";
import { X } from "lucide-react";
import SidebarItem from "./SidebarItem";
import SidebarToggle from "./SidebarToggle";

const AppSidebar = () => {
  const { isMobileOpen, isCollapsed, toggleMobileSidebar } = useSidebar();

  return (
    <div className="flex flex-col">
      {/* Top Logo */}
      <div className="mb-5 hidden xl:block">
        <div className="flex h-full items-center">
          <Logo />
        </div>
      </div>

      {/* Sidebar menu */}
      <div className="relative">
        <SidebarToggle />
        <aside
          className={`dark:bg-dark-1-card absolute top-0 left-0 z-50 flex h-max flex-col overflow-y-hidden rounded-[14px] bg-white duration-300 ease-linear xl:static xl:translate-x-0 dark:shadow-[inset_0_0_4px_0_#3B3849] ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} ${isCollapsed ? "w-[58px]" : "w-57"}`}
        >
          {/* <!-- SIDEBAR HEADER --> */}
          <div className="mb-3 flex items-center justify-between gap-2 px-3 py-5 xl:hidden">
            <Logo />

            <button
              onClick={toggleMobileSidebar}
              aria-controls="sidebar"
              aria-expanded={isMobileOpen}
            >
              <X className="size-5" />
            </button>
          </div>
          {/* <!-- SIDEBAR HEADER --> */}

          <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
            {/* <!-- Sidebar Menu --> */}
            <nav>
              <ul className="flex flex-col gap-2 py-2">
                {menuConfig?.map((menuItem, menuIndex) => (
                  <SidebarItem key={menuIndex} item={menuItem} />
                ))}
              </ul>
            </nav>
            {/* <!-- Sidebar Menu --> */}

            <div className="border-border border-t px-3 py-4">
              <ThemeToggle compact={isCollapsed} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AppSidebar;
