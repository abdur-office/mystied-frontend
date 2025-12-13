import FansOverview from "./FansOverview";
import PinnedNotification from "./PinnedNotification";
export default function MessageDetails() {
  return (
    <div className="hidden w-[35.50%] xl:block">
      <PinnedNotification />

      <div
        className={`group rounded-2xl border-[#F0EEEE] bg-[#F0EEEE] shadow-[inset_0_5px_10px_0_rgba(168,130,207,0.1)] lg:rounded-[22px] dark:border-[#413f47ce] dark:bg-[#1A1C1E]`}
      >
        <div className="user-activity-card-gradient flex cursor-pointer items-center justify-between gap-2 rounded-2xl border border-[#d1d1d1] bg-[#E1E3E9] px-2 py-1.5 lg:rounded-[22px] lg:px-[22px] lg:py-3 dark:border-[#413F47] dark:bg-[#282A2F]">
          <h3 className="text-common-text text-xs font-semibold tracking-[0.192px] xl:text-[16px] dark:text-white">
            Fan’s Overview
          </h3>
        </div>

        <FansOverview />
      </div>
    </div>
  );
}
