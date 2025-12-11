import { AngleUpIcon, ArrowUpIcon, UndoIcon } from "@/components/icons";
import PinnedNotificationSlider from "./PinnedNotificationSlider";
export default function PinnedNotification() {
  return (
    <div
      className={`group rounded-2xl border-[#F0EEEE] bg-[#F0EEEE] shadow-[inset_0_5px_10px_0_rgba(168,130,207,0.1)] lg:rounded-[22px] dark:border-[#413f47ce] dark:bg-[#1A1C1E]`}
    >
      <div className="user-activity-card-gradient flex cursor-pointer items-center justify-between gap-2 rounded-2xl border border-[#d1d1d1] bg-[#E1E3E9] px-1.5 py-1 lg:rounded-[22px] lg:px-[22px] lg:py-3 dark:border-[#413F47] dark:bg-[#282A2F]">
        <h3 className="text-common-text text-[16px] font-semibold tracking-[0.192px]">
          Pinned Notification
        </h3>
        <div className="flex items-center gap-1">
          <button>
            <UndoIcon size={16} className="stroke-[#777777]" />
          </button>
          <span className="h-[12px] w-px bg-[#D0D0D0]"></span>
          <button>
            <AngleUpIcon size={24} className="stroke-[#777777]" />
          </button>
          <button>
            <ArrowUpIcon size={16} className="stroke-[#777777]" />
          </button>
        </div>
      </div>
      <PinnedNotificationSlider />
    </div>
  );
}
