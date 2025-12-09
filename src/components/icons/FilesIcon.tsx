import { cn } from "@/lib/utils";
import { IconProps } from "@/type/icon";

export const FilesIcon = ({ size = 20, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={cn("stroke-dark", className)}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0832 15.8334H10.4165C8.05948 15.8334 6.88097 15.8334 6.14874 15.1011C5.4165 14.3689 5.4165 13.1904 5.4165 10.8334V6.66669C5.4165 4.30966 5.4165 3.13115 6.14874 2.39892C6.88097 1.66669 8.05948 1.66669 10.4165 1.66669H11.5358C12.2171 1.66669 12.5577 1.66669 12.864 1.79355C13.1702 1.92042 13.4111 2.16128 13.8928 2.643L16.1068 4.85705C16.5886 5.33875 16.8294 5.57962 16.9563 5.8859C17.0832 6.19219 17.0832 6.53281 17.0832 7.21406V10.8334C17.0832 13.1904 17.0832 14.3689 16.3509 15.1011C15.6187 15.8334 14.4402 15.8334 12.0832 15.8334Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.4999 2.08331V2.91665C12.4999 4.488 12.4999 5.27367 12.988 5.76182C13.4762 6.24998 14.2619 6.24998 15.8332 6.24998H16.6665"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.41589 4.16669C4.03519 4.16669 2.91589 5.28598 2.91589 6.66669V13.3334C2.91589 15.6904 2.91589 16.8689 3.64813 17.6011C4.38036 18.3334 5.55887 18.3334 7.91589 18.3334H12.0829C13.4635 18.3334 14.5829 17.214 14.5829 15.8334"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33337 9.16669H11.6667M8.33337 12.5H14.1667"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
