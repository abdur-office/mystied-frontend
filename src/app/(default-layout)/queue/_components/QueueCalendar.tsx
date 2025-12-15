"use client";

import { FilterBigAltIcon } from "@/components/icons";
import CstCard from "@/components/ui/CstCard";
import {
  ArrowLeft,
  ArrowLeft2,
  ArrowRight2,
  MessageNotif,
  Messages1,
} from "iconsax-reactjs";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

type QueueCalendarProps = {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
};

type CalendarDay = {
  date: Date;
  isCurrentMonth: boolean;
};

const isSameDay = (a: Date, b: Date) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

const QueueCalendar = ({ selectedDate, onSelectDate }: QueueCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(
    () => new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1),
  );
  const [activeTab, setActiveTab] = useState("Posts");

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const tabs = ["Posts", "Messages", "Streams"];

  const getCalendarDays = (date: Date): CalendarDay[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startOffset = firstDay.getDay(); // 0 (Sun) - 6 (Sat)
    const startDate = new Date(year, month, 1 - startOffset);

    return Array.from({ length: 42 }, (_, idx) => {
      const dayDate = new Date(startDate);
      dayDate.setDate(startDate.getDate() + idx);

      return {
        date: dayDate,
        isCurrentMonth: dayDate.getMonth() === month,
      };
    });
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  useEffect(() => {
    setCurrentDate((prev) => {
      const monthStart = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1,
      );
      const sameMonth =
        prev.getFullYear() === monthStart.getFullYear() &&
        prev.getMonth() === monthStart.getMonth();
      return sameMonth ? prev : monthStart;
    });
  }, [selectedDate]);

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const days = getCalendarDays(currentDate);

  const handleDayClick = (dayDate: Date) => {
    onSelectDate(dayDate);

    const monthStart = new Date(dayDate.getFullYear(), dayDate.getMonth(), 1);
    const sameMonth =
      currentDate.getFullYear() === monthStart.getFullYear() &&
      currentDate.getMonth() === monthStart.getMonth();
    if (!sameMonth) {
      setCurrentDate(monthStart);
    }
  };

  return (
    <CstCard
      isHideGradient
      className="relative col-span-12 w-full space-y-4 overflow-hidden pb-7 lg:col-span-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-[18px] py-2">
        <div className="flex items-center gap-3.5">
          <button className="rounded-lg p-1 transition-colors hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white" />
          </button>
          <h1 className="text-lg font-medium tracking-wide text-black dark:text-white">
            QUEUE
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <Messages1
              variant="Broken"
              className="h-4 w-4 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
            />
          </button>
          <button>
            <MessageNotif
              variant="Broken"
              className="h-4 w-4 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
            />
          </button>
          <button>
            <Plus className="h-5 w-5 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white" />
          </button>
        </div>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between px-[18px] py-2">
        <div className="flex items-center gap-2">
          <button onClick={previousMonth}>
            <ArrowLeft2
              className="h-4 w-4 text-neutral-600 hover:text-black dark:text-white/60 dark:hover:text-white"
              variant="Broken"
            />
          </button>
          <button onClick={nextMonth}>
            <ArrowRight2
              className="h-4 w-4 text-neutral-600 hover:text-black dark:text-white/60 dark:hover:text-white"
              variant="Broken"
            />
          </button>
          <span className="font-primary text-xs text-neutral-700 dark:text-white/60">
            {formatMonthYear(currentDate)}
          </span>
        </div>
        <button className="rounded p-1.5 transition-colors hover:bg-black/5 dark:hover:bg-white/10">
          <FilterBigAltIcon
            size={20}
            className="stroke-neutral-600 dark:stroke-white/60"
          />
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex items-center gap-1.5 px-[18px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-primary h-[26px] rounded-full bg-black/5 px-2.5 py-1 text-xs text-neutral-600 transition-colors hover:bg-black/10 dark:bg-white/5 dark:text-white/60 dark:hover:bg-white/10`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative -mx-[18px] overflow-x-auto px-[18px] pb-2">
        <table className="min-w-[640px] border-collapse text-sm md:min-w-full">
          <thead>
            <tr>
              {daysOfWeek.map((d, index) => (
                <th
                  key={index}
                  className={`w-[40px] py-2 text-center font-normal text-neutral-600 lg:w-[96px] dark:text-white/60 ${index === 0 ? "pl-1.5" : ""}`}
                >
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, weekIdx) => (
              <tr key={weekIdx}>
                {days.slice(weekIdx * 7, weekIdx * 7 + 7).map((dayObj, idx) => {
                  const isSelected = isSameDay(dayObj.date, selectedDate);
                  const isFirstOfMonth = dayObj.date.getDate() === 1;
                  const dayLabel = isFirstOfMonth
                    ? dayObj.date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    : dayObj.date.getDate();

                  return (
                    <td
                      key={idx}
                      onClick={() => handleDayClick(dayObj.date)}
                      className={`h-[40px] cursor-pointer border border-black/10 pt-1.5 text-center align-baseline transition-colors lg:h-[60px] dark:border-white/10 ${
                        isSelected
                          ? "bg-black/5 text-black dark:bg-white/5 dark:text-white"
                          : dayObj.isCurrentMonth
                            ? "text-neutral-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/5"
                            : "text-neutral-500 hover:bg-black/5 dark:text-white/60 dark:hover:bg-white/5"
                      }`}
                    >
                      {dayLabel}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Calendar Grid */}
      <div className="hidden rounded-xl p-[18px]">
        {/* Day headers */}
        <div className="grid grid-cols-7">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className="border border-transparent py-2 text-center text-xs font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7">
          {days.map((dayObj, index) => {
            const isSelected = isSameDay(dayObj.date, selectedDate);
            const isFirstOfMonth = dayObj.date.getDate() === 1;
            const dayLabel = isFirstOfMonth
              ? dayObj.date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              : dayObj.date.getDate();

            return (
              <div
                key={index}
                onClick={() => handleDayClick(dayObj.date)}
                className={`flex h-[60px] cursor-pointer justify-center border border-white/10 py-1.5 text-sm transition-colors ${
                  isSelected
                    ? "bg-black/5 text-white dark:bg-white/5 dark:text-black"
                    : dayObj.isCurrentMonth
                      ? "text-neutral-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/5"
                      : "text-neutral-500 hover:bg-black/5 dark:text-white/60 dark:hover:bg-white/5"
                }`}
              >
                {dayLabel}
              </div>
            );
          })}
        </div>
      </div>
    </CstCard>
  );
};

export default QueueCalendar;
