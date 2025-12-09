import { useSidebar } from "@/providers/SidebarContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item }: any) => {
  const pathname = usePathname();
  const { isCollapsed, toggleMobileSidebar } = useSidebar();

  const handleClick = () => toggleMobileSidebar();

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
        className={`font-primary flex h-11 items-center gap-2.5 rounded-[14px] px-3 text-[#363636] dark:text-white ${isItemActive ? "dark:bg-theme-dark-purple-3 bg-[#D6DBE0] font-semibold dark:shadow-[inset_0_0_4px_0_#3B3849]" : "font-medium"}`}
      >
        {/* icon */}
        <span className={`transition-all`}>
          <Icon variant={item.iconVariant} />
        </span>

        {/* label */}
        <span
          className={`overflow-hidden text-base whitespace-nowrap transition-all duration-300 ${
            isCollapsed ? "w-0 px-0" : "w-full"
          } `}
        >
          {item.label}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
