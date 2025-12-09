"use client";
import { useSidebar } from "@/providers/SidebarContext";
import { Menu } from "lucide-react";
import AppSearch from "./AppSearch";

const AppHeader = () => {
  const { toggleMobileSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-30">
      <div className="px-6">
        <div className="-mb-px flex h-[65px] items-center justify-between">
          {/* Header: Left side */}
          <div>
            <button
              className="block xl:hidden"
              onClick={() => toggleMobileSidebar()}
            >
              <Menu className="size-5" />
            </button>

            {/* <button className="hidden xl:block" onClick={toggleCollapse}>
              Collapsed
            </button> */}
          </div>

          {/* header search */}
          <AppSearch />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
