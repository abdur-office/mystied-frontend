import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-theme-purple text-white hover:opacity-90",
        gray: "border-transparent bg-theme-gray text-white hover:opacity-90",
        success:
          "border-transparent bg-theme-success text-white hover:opacity-90",
        warning:
          "border-transparent bg-theme-warning text-white hover:opacity-90",
        danger:
          "border-transparent bg-theme-danger text-white hover:opacity-90",
        blue: "border-transparent bg-theme-blue text-white hover:opacity-90",
        brown: "border-transparent bg-theme-brown text-white hover:opacity-90",
        light: "border border-white/20 bg-white/10 text-white hover:opacity-90",
        transparent: "bg-transparent text-white hover:opacity-90",
      },
      size: {
        large: "h-[33px] px-3",
        "h-12": "h-[12px] px-1 py-0.5",
        "h-14": "h-[14px] px-1 py-0.5",
        medium: "h-[26px] px-2.5",
        small: "h-[22px] px-2",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-[4px]",
        md: "rounded-[6px]",
        lg: "rounded-[8px]",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      rounded: "md", // default border-radius
    },
  },
);

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
export type BadgeSize = VariantProps<typeof badgeVariants>["size"];
export type BadgeRounded = VariantProps<typeof badgeVariants>["rounded"];
interface BadgeProps
  extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}
function Badge({
  className,
  variant,
  size,
  rounded,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, rounded }), className)}
      {...props}
    />
  );
}
export { Badge, badgeVariants };
