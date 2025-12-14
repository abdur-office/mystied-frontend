import { IconProps } from "@/type/icon";

export const FilterBigAltIcon = ({ size = 20, className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
    >
      <path
        d="M4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7Z"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M9.5 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7C20 7.53043 19.7893 8.03914 19.4142 8.41421C19.0391 8.78929 18.5304 9 18 9H9.5"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17C14 15.3431 15.3431 14 17 14C18.6569 14 20 15.3431 20 17Z"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M14.5 15H6C5.46957 15 4.96086 15.2107 4.58579 15.5858C4.21071 15.9609 4 16.4696 4 17C4 17.5304 4.21071 18.0391 4.58579 18.4142C4.96086 18.7893 5.46957 19 6 19H14.5"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
    </svg>
  );
};
