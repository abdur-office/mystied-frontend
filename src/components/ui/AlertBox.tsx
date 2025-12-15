import { cn } from "@/lib/utils";
import { AlertTriangle, Info } from "lucide-react";
import { ReactNode } from "react";

type AlertVariant = "danger" | "info";

interface AlertBoxProps {
  variant: AlertVariant;
  children: ReactNode;
}

const variants = {
  danger: {
    wrapper: "border-theme-danger-3/30 bg-theme-danger-3/10",
    bar: "bg-theme-danger-3",
    iconBg: "bg-theme-danger-3/20 text-theme-danger-3",
    icon: AlertTriangle,
  },
  info: {
    wrapper: "border-theme-blue/30 bg-theme-blue/10",
    bar: "bg-theme-blue",
    iconBg: "bg-theme-blue/20 text-theme-blue",
    icon: Info,
  },
};

const AlertBox = ({ variant, children }: AlertBoxProps) => {
  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "relative flex gap-3 rounded-[12px] border p-4",
        config.wrapper,
      )}
    >
      {/* left color bar */}
      <span
        className={cn(
          "absolute top-0 left-0 h-full w-[4px] rounded-l-[12px]",
          config.bar,
        )}
      />

      {/* icon */}
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
          config.iconBg,
        )}
      >
        <Icon size={18} />
      </div>

      {/* content */}
      <div className="text-sm leading-relaxed text-black/80 dark:text-white/80">
        {children}
      </div>
    </div>
  );
};

export default AlertBox;
