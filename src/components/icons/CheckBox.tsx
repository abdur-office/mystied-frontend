import { IconProps } from "@/type/icon";

export function CheckBox({ size = 10, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_4865_22802)">
        <mask
          id="mask0_4865_22802"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="1"
          width="11"
          height="8"
        >
          <path
            d="M0.833496 5.625L2.50016 7.29167L6.97933 2.8125"
            stroke="white"
            strokeWidth="0.833333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.125 5.625L4.79167 7.29167L9.27083 2.8125"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.125 5.625L4.79167 7.29167L9.27083 2.8125"
            stroke="white"
            strokeWidth="0.833333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
        <g mask="url(#mask0_4865_22802)">
          <path d="M10 0H0V10H10V0Z" fill="#9B9A9D" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_4865_22802">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
