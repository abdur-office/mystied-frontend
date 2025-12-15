import {
  AngleUpIcon,
  ArrowUpIcon,
  UndoIcon,
  UserScan,
} from "@/components/icons";
import PinnedNotificationSlider from "./PinnedNotificationSlider";
export default function PinnedNotification() {
  return (
    <div
      className={`group rounded-2xl border-[#F0EEEE] bg-[#F0EEEE] shadow-[inset_0_5px_10px_0_rgba(168,130,207,0.1)] lg:rounded-[22px] dark:border-[#413f47ce] dark:bg-[#232428] dark:shadow-[inset_0_0_4px_0_#3B3849]`}
    >
      <div className="user-activity-card-gradient flex cursor-pointer items-center justify-between gap-2 rounded-2xl border border-[#d1d1d1] bg-[#E1E3E9] px-2 py-1.5 lg:rounded-[22px] lg:px-2.5 lg:py-1 dark:border-[#413F47] dark:bg-[#282A2F]">
        <h3 className="flex items-center gap-2 text-xs font-semibold tracking-[0.192px] text-[#141414] xl:text-[15px] dark:text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#413F47] bg-[#2C2E33] shadow-[0_5px_10px_0_rgba(168,130,207,0.10)]">
            <UserScan className="size-6 stroke-black dark:stroke-white" />
          </span>
          Pinned Notification
        </h3>
        <div className="flex items-center gap-1">
          <button className="mr-1">
            <UndoIcon
              size={16}
              className="stroke-[#777777] dark:stroke-white"
            />
          </button>
          <span className="h-[12px] w-px bg-[#D0D0D0] dark:bg-white"></span>
          <button className="mr-1">
            <AngleUpIcon
              size={24}
              className="stroke-[#777777] dark:stroke-white"
            />
          </button>
          <button>
            <ArrowUpIcon
              size={16}
              className="stroke-[#777777] dark:stroke-white"
            />
          </button>
        </div>
      </div>
      <PinnedNotificationSlider />
    </div>
  );
}
