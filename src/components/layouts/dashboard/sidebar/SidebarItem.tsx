import { useSidebar } from "@/providers/SidebarContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item }: any) => {
  const pathname = usePathname();
  const { isCollapsed, toggleMobileSidebar, isMobileOpen } = useSidebar();

  // Close the mobile drawer only when it is open; no-op on desktop.
  const handleClick = () => {
    if (isMobileOpen) toggleMobileSidebar();
  };

  const isActive = (menuItem: any): boolean => {
    if (menuItem.path === pathname) return true;
    if (menuItem.children) return menuItem.children.some(isActive);
    return false;
  };

  const isItemActive = isActive(item);
  const Icon = item.icon as React.ElementType<{ variant?: string }>;

  return (
    <li>
      <Link
        href={item.path}
        onClick={handleClick}
        className={`font-primary flex h-11 items-center gap-2.5 rounded-[14px] px-3 text-[#A4A5A8] dark:text-white ${isItemActive ? "dark:bg-theme-dark-purple-3 bg-[#D6DBE0] font-semibold text-black dark:shadow-[inset_0_0_4px_0_#3B3849]" : "font-medium"} ${isCollapsed && !isMobileOpen ? "mx-auto h-[42px] w-[42px] justify-center" : "justify-start"}`}
      >
        {/* icon */}
        <span
          className={`transition-all duration-300 ${isCollapsed && !isMobileOpen ? "ml-[10px]" : "ml-0"} `}
        >
          <Icon variant={item.iconVariant} />
        </span>

        {/* label */}
        <span
          className={`overflow-hidden text-base whitespace-nowrap transition-all duration-300 ${isCollapsed && !isMobileOpen ? "max-w-0 px-0 opacity-0" : "max-w-[300px] px-1 opacity-100"} `}
        >
          {item.label}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
