import CstCard from "@/components/ui/CstCard";
import { ArrowLeft } from "lucide-react";

export default function TabList() {
  return (
    <CstCard
      isHideGradient
      className="relative col-span-12 w-full space-y-4 overflow-hidden pb-7 lg:col-span-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-[18px] py-2">
        <div className="flex items-center gap-3.5">
          <button className="rounded-lg p-1 transition-colors hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 text-black dark:text-white" />
          </button>
          <h1 className="text-lg font-medium tracking-wide text-black uppercase dark:text-white">
            statements
          </h1>
        </div>
      </div>

      <div className="px-3 py-2.5">
        <div>test</div>
      </div>
    </CstCard>
  );
}
