import { BadgeRounded, BadgeSize, BadgeVariant } from "@/components/ui/badge";

export type ThemeBadge = {
  name: string;
  variant: BadgeVariant;
  size: BadgeSize;
  rounded: BadgeRounded;
  example: string;
};

export const themeBadges: ThemeBadge[] = [
  // Large badges
  {
    name: "Purple Large (md)",
    variant: "default",
    size: "large",
    rounded: "md",
    example: `<Badge variant="default" size="large" rounded="md">Purple</Badge>`,
  },
  {
    name: "Gray Large (full)",
    variant: "gray",
    size: "large",
    rounded: "full",
    example: `<Badge variant="gray" size="large" rounded="full">Gray</Badge>`,
  },
  {
    name: "Green Large (lg)",
    variant: "success",
    size: "large",
    rounded: "lg",
    example: `<Badge variant="green" size="large" rounded="lg">Green</Badge>`,
  },
  {
    name: "Warning Large (sm)",
    variant: "warning",
    size: "large",
    rounded: "sm",
    example: `<Badge variant="warning" size="large" rounded="sm">Warning</Badge>`,
  },

  // Medium badges
  {
    name: "Blue Medium (md)",
    variant: "blue",
    size: "medium",
    rounded: "md",
    example: `<Badge variant="blue" size="medium" rounded="md">Blue</Badge>`,
  },
  {
    name: "Brown Medium (full)",
    variant: "brown",
    size: "medium",
    rounded: "full",
    example: `<Badge variant="brown" size="medium" rounded="full">Brown</Badge>`,
  },
  {
    name: "Light Medium (sm)",
    variant: "light",
    size: "medium",
    rounded: "sm",
    example: `<Badge variant="light" size="medium" rounded="sm">Light</Badge>`,
  },
  {
    name: "Danger Medium (md)",
    variant: "danger",
    size: "medium",
    rounded: "md",
    example: `<Badge variant="danger" size="medium" rounded="md">Danger</Badge>`,
  },

  // Small badges
  {
    name: "Green Small (sm)",
    variant: "success",
    size: "small",
    rounded: "sm",
    example: `<Badge variant="green" size="small" rounded="sm">Green</Badge>`,
  },
  {
    name: "Warning Small (md)",
    variant: "warning",
    size: "small",
    rounded: "md",
    example: `<Badge variant="warning" size="small" rounded="md">Warning</Badge>`,
  },
  {
    name: "Danger Small (full)",
    variant: "danger",
    size: "small",
    rounded: "full",
    example: `<Badge variant="danger" size="small" rounded="full">Danger</Badge>`,
  },
  {
    name: "Blue Small (lg)",
    variant: "blue",
    size: "small",
    rounded: "lg",
    example: `<Badge variant="blue" size="small" rounded="lg">Blue</Badge>`,
  },
];
