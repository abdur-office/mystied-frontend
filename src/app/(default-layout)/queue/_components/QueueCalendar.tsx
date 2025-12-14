"use client";

import CstCard from "@/components/ui/CstCard";
import {
  ArrowLeft,
  ArrowLeft2,
  ArrowRight2,
  MessageNotif,
  Messages1,
} from "iconsax-reactjs";
import { Plus } from "lucide-react";
import { useState } from "react";

const QueueCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1)); // October 2025
  const [activeTab, setActiveTab] = useState("Posts");

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const tabs = ["Posts", "Messages", "Streams"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isNextMonth: false,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        isNextMonth: false,
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isNextMonth: true,
      });
    }

    return days;
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

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

  const days = getDaysInMonth(currentDate);

  return (
    <CstCard className="w-full space-y-4 pb-7">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-white/10 px-[18px] py-2">
        <div className="flex items-center gap-3.5">
          <button className="rounded-lg p-2 transition-colors hover:bg-white/10">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-medium tracking-wide">QUEUE</h1>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <Messages1 variant="Broken" className="h-4 w-4" />
          </button>
          <button>
            <MessageNotif variant="Broken" className="h-4 w-4" />
          </button>
          <button>
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Month Navigation */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={previousMonth}
            className="rounded p-1.5 transition-colors hover:bg-white/10"
          >
            <ArrowLeft2 className="h-4 w-4" variant="Broken" />
          </button>
          <button
            onClick={nextMonth}
            className="rounded p-1.5 transition-colors hover:bg-white/10"
          >
            <ArrowRight2 className="h-4 w-4" variant="Broken" />
          </button>
          <span className="text-sm text-gray-400">
            {formatMonthYear(currentDate)}
          </span>
        </div>
        <button className="rounded p-1.5 transition-colors hover:bg-white/10">
          <div className="flex gap-1">
            <div className="h-4 w-1 rounded-full bg-white/60"></div>
            <div className="h-4 w-1 rounded-full bg-white/60"></div>
            <div className="h-4 w-1 rounded-full bg-white/60"></div>
          </div>
        </button>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-1 rounded-lg bg-black/30 p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="rounded-xl bg-[#0a0a0a] p-4">
        {/* Day headers */}
        <div className="mb-2 grid grid-cols-7">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className="py-2 text-center text-xs font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((dayObj, index) => {
            const isOct1 =
              dayObj.day === 1 &&
              dayObj.isCurrentMonth &&
              currentDate.getMonth() === 9;
            const isNov1 = dayObj.day === 1 && dayObj.isNextMonth;

            return (
              <div
                key={index}
                className={`flex aspect-square cursor-pointer items-center justify-center rounded-lg text-sm transition-colors ${dayObj.isCurrentMonth ? "text-white hover:bg-white/5" : "text-gray-600"} ${!dayObj.isCurrentMonth && "hover:bg-white/5"} `}
              >
                {isOct1 ? "Oct 1" : isNov1 ? "Nov 1" : dayObj.day}
              </div>
            );
          })}
        </div>
      </div>
    </CstCard>
  );
};

export default QueueCalendar;
