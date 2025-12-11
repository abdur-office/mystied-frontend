import { IconProps } from "@/type/icon";

export const AngleUpIcon = ({ size = 16, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      className={className}
    >
      <path
        d="M4.78581 9.91252L8.20418 6.49414L11.6226 9.91252"
        strokeWidth="1.02551"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
