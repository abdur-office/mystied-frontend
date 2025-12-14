import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CstCardProps {
  children: ReactNode;
  className?: string;
  isHideGradient?: boolean;
}

const CstCard = ({ children, className, isHideGradient }: CstCardProps) => {
  return (
    <div
      className={cn(
        "rounded-[20px] bg-[#F0EEEE] pb-7 dark:bg-[#1A1C1E] dark:shadow-[inset_0_0_4px_0_#3B3849]",
        className,
      )}
    >
      {/* Background Layer */}
      {!isHideGradient && <div className="bg-image-card" />}

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default CstCard;
