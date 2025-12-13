"use client";

import { FilterIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";
import MessageList from "./MessageList";

export default function MessageLists() {
  const filters = [
    {
      icon: "https://i.ibb.co.com/m560m1ZM/Ellipse-16969.png",
      name: "James",
      badge: "Rebill on",
      text: "preview text last text here",
      balance: "100",
      time: "10:45 pm",
    },
    {
      icon: "https://i.ibb.co.com/vCjqyZcX/Ellipse-16969-1.png",
      name: "John",
      badge: "EXPIRED",
      text: "Hi how arey ou blah blah",
      balance: "100",
      time: "10:45 pm",
    },
    {
      icon: "https://i.ibb.co.com/jPw6n8s2/Ellipse-16969-2.png",
      name: "Jane",
      badge: "Rebill on",
      text: "test time blah blah",
      balance: "100",
      time: "10:45 pm",
    },
    {
      icon: "https://i.ibb.co.com/0jxSbBWk/Ellipse-16969-4.png",
      name: "James",
      badge: "Rebill on",
      text: "Here how are you ??",
      balance: "100",
      time: "10:45 pm",
    },
  ];

  const tabs = [
    {
      id: "queue",
      label: "Queue",
      active: true,
    },
    {
      id: "pinned",
      label: "Pinned",
      count: 5,
    },
    {
      id: "online",
      label: "Online now",
      success: true,
    },
    {
      id: "new",
      label: "New Message",
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex items-center justify-between border-b border-[#C7C7CC] px-[18px] py-2.5 dark:border-[#F6F6F81A]">
        <h2 className="text-base font-semibold text-black dark:text-white">
          Newest First
        </h2>
        <FilterIcon className="text-black dark:text-white" />
      </div>

      <div className="hidden pe-0 sm:block sm:pe-5">
        <ul className="cst-scrollbar-3 mt-1 ml-2 flex touch-pan-x flex-nowrap gap-2 overflow-x-auto overflow-y-hidden pt-3 pb-0.5 sm:ml-5">
          {tabs.map((item) => (
            <li key={item.id} className="shrink-0">
              <button
                onClick={() => setActiveTab(item)}
                className={cn(
                  `relative h-[27px] rounded-[6px] px-1.5 py-0.5 text-sm font-normal whitespace-nowrap select-none dark:bg-[#25242B] dark:text-white ${
                    activeTab.id === item.id
                      ? "bg-common-text dark:text-theme-success text-white"
                      : item.success
                        ? "text-theme-success bg-[#E5E5EA]"
                        : "text-common-text bg-[#E5E5EA]"
                  }`,
                )}
              >
                {item.label}

                {item.count && (
                  <span className="bg-theme-success absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-normal text-white dark:bg-[#8D6CC8]">
                    {item.count}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ul className="sm:mt-4">
        {filters.map((filter, index) => (
          <li key={index}>
            <MessageList {...filter} />
          </li>
        ))}
      </ul>
    </div>
  );
}
