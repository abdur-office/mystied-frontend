import { cn } from "@/lib/utils";
import { IconProps } from "@/type/icon";

export const ElectricityIcon = ({ size = 20, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    className={cn("stroke-white", className)}
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.6059 0.541577L0.520943 7.34089C0.471629 7.40683 0.518684 7.50078 0.601026 7.50078H4.89945C4.96099 7.50078 5.00793 7.55584 4.99819 7.6166L4.30379 11.9497C4.2878 12.0494 4.41292 12.1073 4.47854 12.0305L10.2604 5.26575C10.3158 5.20086 10.2697 5.10078 10.1843 5.10078H5.88598C5.83075 5.10078 5.78598 5.05601 5.78598 5.00078V0.601467C5.78598 0.505297 5.6635 0.464561 5.6059 0.541577Z" />
  </svg>
);
