import { IconProps } from "@/type/icon";

export const UndoIcon = ({ size = 16, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M10.5 6.07627C10.5 8.51943 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.51943 1.5 6.07627C1.5 3.63311 3.5 1.65254 6 1.65254C9 1.65254 10.5 4.11017 10.5 4.11017M10.5 4.11017L10.5 1.5M10.5 4.11017H8.17245"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
