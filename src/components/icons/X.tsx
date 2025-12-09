import { IconProps } from "@/type/icon";

export const XIcon = ({ size = 10, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7.83984 1.795L9.11893 0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.5 9.22591L4.6875 4.98633"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.11864 9.22583L0.5 0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
