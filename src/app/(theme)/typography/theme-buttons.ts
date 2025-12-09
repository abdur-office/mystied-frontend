import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
type ButtonSize = VariantProps<typeof buttonVariants>["size"];

export type ThemeButton = {
  name: string;
  variant: ButtonVariant;
  size: ButtonSize;
  example: string;
  className?: string;
};
export const themeButtons: ThemeButton[] = [
  {
    name: 'variant="primary" size="xs"',
    variant: "primary",
    size: "s-30",
    example: `<Button variant="primary" size="xs">Primary</Button>`,
  },

  {
    name: 'variant="primary" size="s-38"',
    variant: "primary",
    size: "s-38",
    example: `<Button variant="primary" size="s-38">Primary</Button>`,
  },
  {
    name: 'variant="outline" size="xs"',
    variant: "outline",
    size: "s-30",
    example: `<Button variant="outline" size="xs">Outline</Button>`,
  },
  {
    name: 'className="bg-[#2C2832]" variant="outline"',
    variant: "outline",
    size: "default",
    className: "bg-[#2C2832]",
    example: `<Button className="bg-[#2C2832]" variant="outline" type="button">Cancel</Button>`,
  },
];
