import { cn } from "@/lib/utils";
import { IconProps } from "@/type/icon";

export const Twitter = ({ size = 18, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path
      d="M1 2H3.5L18.5 22H16L1 2ZM5.5 2H8L23 22H20.5L5.5 2ZM3 2H8V4H3V2ZM16 20H21V22H16V20ZM18.5 2H22L5 22H1.5L18.5 2Z"
      fill="white"
    />
  </svg>
);
