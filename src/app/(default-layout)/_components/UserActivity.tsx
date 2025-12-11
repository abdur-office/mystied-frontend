"use client";
import { LockIcon, XIcon } from "@/components/icons";
import Image from "next/image";
import { useState } from "react";
import { activityData } from "./activity-data";

export default function UserActivity({
  activity,
}: {
  activity: (typeof activityData)[0];
}) {
  const [view, setView] = useState(
    activity.message || activity.file ? true : false,
  );
  return (
    <div
      className={`group rounded-2xl border-[#F0EEEE] bg-[#F0EEEE] shadow-[inset_0_5px_10px_0_rgba(168,130,207,0.1)] lg:rounded-[22px] dark:border-[#413f47ce] dark:bg-[#1A1C1E] ${view && activity.message ? "border-[1.5px]" : ""}`}
    >
      <div
        onClick={() => setView(!view)}
        className="user-activity-card-gradient flex cursor-pointer items-center justify-between gap-2 rounded-2xl border border-[#d1d1d1] bg-[#E1E3E9] px-1.5 py-1 lg:rounded-[22px] lg:px-[10px] lg:py-1.5 dark:border-[#413F47] dark:bg-[#282A2F]"
      >
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={activity.image}
              alt="Ellipse 16963"
              width={300}
              height={300}
              className="size-7 rounded-full object-cover lg:size-10"
            />
          </div>
          <p className="line-clamp-1 text-sm font-medium text-black lg:text-base dark:text-white">
            {activity.name} {activity.isOnline ? "is Online " : ""}
            {activity.isOnline && (
              <span className="bg-theme-success inline-block size-[9px] rounded-full text-base font-medium"></span>
            )}
          </p>
        </div>
        <button className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <XIcon className="stroke-black dark:stroke-white" />
        </button>
      </div>
      {activity.message && (
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity,transform,padding] duration-300 ease-in-out ${view ? "translate-y-0 grid-rows-[1fr] py-2 opacity-100" : "-translate-y-1 grid-rows-[0fr] py-0 opacity-0"} px-3 lg:ps-8`}
        >
          <div className="max-w-[254px] overflow-hidden">
            <p className="line-clamp-2 text-sm font-medium tracking-[0.154px] text-black/80 dark:text-white/80">
              {activity.message}
            </p>
          </div>
        </div>
      )}
      {activity.file && view && (
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity,transform,padding] duration-300 ease-in-out ${view ? "translate-y-0 grid-rows-[1fr] px-3 pb-4 opacity-100 lg:px-8 lg:pb-[26px]" : "-translate-y-1 grid-rows-[0fr] px-8 pb-0 opacity-0"}`}
        >
          <div className="relative h-[120px] w-full overflow-hidden rounded-[5px] border border-[rgba(127,184,239,0)] bg-[#6A6B72] shadow-[inset_0_0_14px_0_rgba(54,50,72,0.4)] select-none sm:h-[140px] lg:h-[168px]">
            <Image
              src={activity.file}
              alt={activity.name}
              width={100}
              height={100}
              className="h-full w-full rounded-[22px] border-0 bg-cover bg-center bg-no-repeat object-cover blur-sm filter"
            />
            <button className="unlock-btn absolute top-1/2 left-1/2 flex h-8 -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-[6px] border-0 border-[rgba(168,190,255,0.60)] bg-linear-to-b from-[#8285CF] to-[#ABADD1] px-3 opacity-[0.83] backdrop-blur-[1.8px] lg:h-[52px]">
              <LockIcon className="size-5 stroke-white" />
              <span className="font-primary -mb-1 inline-flex text-sm tracking-[0.168px] text-white text-shadow-[0_1px_2px_rgba(44,44,44,0.6)]">
                UNLOCK
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
