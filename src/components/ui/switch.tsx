"use client";

import { cn } from "@/lib/utils";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

const variantStyles = {
  primary: {
    rootChecked: "data-[state=checked]:bg-primary/10",
    thumbChecked:
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
  },
  secondary: {
    rootChecked: "data-[state=checked]:bg-[#01AFEF]/10",
    thumbChecked:
      "data-[state=checked]:border-[#01AFEF] data-[state=checked]:bg-[#01AFEF]",
  },
};

function Switch({
  className,
  variant = "primary",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  variant?: "primary" | "secondary";
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[1.1rem] w-8 shrink-0 items-center rounded-full border border-transparent",
        "shadow-xs transition-all outline-none",
        "focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=unchecked]:bg-[#5A6169]",
        variantStyles[variant].rootChecked,
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 scale-125 rounded-full border-[0.14rem]",
          "ring-0 transition-transform",
          "bg-background border-[#8F9398] data-[state=unchecked]:translate-x-0",
          "data-[state=checked]:translate-x-[calc(100%-2px)]",
          variantStyles[variant].thumbChecked,
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
