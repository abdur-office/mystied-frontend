import { IconProps } from "@/type/icon";

export function VoiceIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width="11"
      height="15"
      viewBox="0 0 11 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.83317 2.83333C7.83317 1.54467 6.7885 0.5 5.49984 0.5C4.21117 0.5 3.1665 1.54467 3.1665 2.83333V7.16667C3.1665 8.45533 4.21117 9.5 5.49984 9.5C6.7885 9.5 7.83317 8.45533 7.83317 7.16667V2.83333Z"
        stroke="#9B9A9D"
        strokeLinejoin="round"
      />
      <path
        d="M0.5 6.83398C0.5 9.59532 2.73867 11.834 5.5 11.834M5.5 11.834C8.26133 11.834 10.5 9.59532 10.5 6.83398M5.5 11.834V13.834"
        stroke="#9B9A9D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
