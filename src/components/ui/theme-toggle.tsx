"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  compact?: boolean;
  className?: string;
};

const ThemeToggle = ({ compact = false, className }: ThemeToggleProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleToggle = () => {
    if (!mounted) return;
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={handleToggle}
      className={cn(
        "border-border text-foreground focus-visible:ring-ring flex w-full items-center rounded-2xl border bg-black text-sm font-medium transition-colors hover:bg-black/80 focus-visible:ring-2 focus-visible:outline-none",
        compact
          ? "justify-center gap-0 px-2 py-2"
          : "justify-between gap-3 px-3 py-2",
        className,
      )}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <Sun
          className={cn(
            "text-foreground size-4 transition-all",
            isDark ? "scale-0 opacity-0" : "scale-100 opacity-100",
          )}
        />
        <Moon
          className={cn(
            "text-foreground absolute size-4 transition-all",
            isDark ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        />
      </span>
      {!compact && (
        <span className="text-xs tracking-wide uppercase">
          {isDark ? "Light mode" : "Dark mode"}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
