"use client";

import CstCard from "@/components/ui/CstCard";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import { Plus } from "lucide-react";

type TaskCalenderProps = {
  selectedDate: Date;
  onChangeDate: (date: Date) => void;
};

export default function TaskCalender({
  selectedDate,
  onChangeDate,
}: TaskCalenderProps) {
  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const changeDay = (direction: -1 | 1) => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + direction);
    onChangeDate(nextDate);
  };

  return (
    <CstCard className="col-span-4 hidden w-full lg:block">
      <div className="flex items-center justify-between border-b border-black/10 px-[18px] py-2 dark:border-white/10">
        <button onClick={() => changeDay(-1)}>
          <ArrowLeft2
            className="h-4 w-4 text-black dark:text-white/60"
            variant="Broken"
          />
        </button>
        <h1 className="text-sm font-normal text-black uppercase dark:text-white/60">
          {formattedDate}
        </h1>
        <button onClick={() => changeDay(1)}>
          <ArrowRight2
            className="h-4 w-4 text-black dark:text-white/60"
            variant="Broken"
          />
        </button>
      </div>
      <div className="p-[18px]">
        <button className="flex w-full items-center justify-center rounded-lg bg-black/5 p-2 transition-colors hover:bg-black/10 dark:bg-black/10 dark:hover:bg-white/5">
          <Plus className="h-4 w-4 text-black dark:text-white/60" />
        </button>
      </div>
    </CstCard>
  );
}
