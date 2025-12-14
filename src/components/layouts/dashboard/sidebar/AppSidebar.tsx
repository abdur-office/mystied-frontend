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
        {/* Mobile overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 xl:hidden ${isMobileOpen ? "visible opacity-100" : "invisible opacity-0"}`}
          onClick={toggleMobileSidebar}
          aria-hidden="true"
        ></div>
        <SidebarToggle />
        <aside
          className={`dark:bg-dark-1-card fixed inset-y-0 left-0 z-50 flex h-screen flex-col overflow-y-hidden bg-[#F0EEEE] duration-300 ease-linear xl:static xl:h-auto xl:translate-x-0 xl:rounded-[14px] dark:shadow-[inset_0_0_4px_0_#3B3849] ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} ${isCollapsed && !isMobileOpen ? "w-[58px]" : "w-57"}`}
        >
          {/* <!-- SIDEBAR HEADER --> */}
          <div className="mb-3 flex items-center justify-between gap-2 px-3 py-5 xl:hidden">
            <Logo />

            <button
              onClick={toggleMobileSidebar}
              aria-controls="sidebar"
              aria-expanded={isMobileOpen}
            >
              <X className="size-5 text-black dark:text-white" />
            </button>
          </div>
          {/* <!-- SIDEBAR HEADER --> */}

          <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
            {/* <!-- Sidebar Menu --> */}
            <nav>
              <ul className="flex flex-col gap-1.5 py-2">
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
