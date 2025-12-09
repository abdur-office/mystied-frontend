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
        "cst-gradient-main relative overflow-hidden min-h-[714px] p-5",
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
