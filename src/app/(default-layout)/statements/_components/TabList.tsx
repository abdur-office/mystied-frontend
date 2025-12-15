"use client";

import { Accordion } from "@/components/ui/accordion";
import CstCard from "@/components/ui/CstCard";
import { Chart, Coin1, HomeHashtag, ProfileCircle } from "iconsax-reactjs";
import { ArrowLeft } from "lucide-react";
import CurrentBalance from "./CurrentBalance";
import CurrentReferralEarnings from "./CurrentReferralEarnings";

export type StatementTabKey = (typeof statementTabs)[number]["key"];

type TabListProps = {
  activeTab: StatementTabKey;
  onChange: (key: StatementTabKey) => void;
};

export const statementTabs = [
  {
    key: "earning",
    label: "Earning",
    icon: Coin1,
  },
  {
    key: "payout",
    label: "Payout request",
    icon: HomeHashtag,
  },
  {
    key: "statistics",
    label: "Earning statistics",
    icon: Chart,
  },
  {
    key: "charge-backs",
    label: "Charge backs",
    icon: Coin1,
  },
  {
    key: "referral",
    label: "Referral",
    icon: ProfileCircle,
  },
] as const;

export default function TabList({ activeTab, onChange }: TabListProps) {
  return (
    <CstCard isHideGradient className="relative space-y-4 overflow-hidden pb-7">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/10 px-[18px] py-2 dark:border-white/10">
        <div className="flex items-center gap-3.5">
          <button className="rounded-lg p-1 transition-colors hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 text-black dark:text-white" />
          </button>
          <h1 className="text-lg font-medium tracking-wide text-black uppercase dark:text-white">
            statements
          </h1>
        </div>
      </div>

      <div className="py-2.5">
        <Accordion
          type="single"
          collapsible
          className="mb-2 w-full space-y-2 px-3"
        >
          {/* Current Balance */}
          <CurrentBalance />

          {/* Current Referral Earnings */}
          <CurrentReferralEarnings />
        </Accordion>

        <ul>
          {statementTabs.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.key;

            return (
              <li
                key={item.key}
                className="border-b border-black/10 px-3 py-2 lg:px-[18px] lg:py-3 dark:border-white/10"
              >
                <button
                  onClick={() => onChange(item.key)}
                  className={`relative inline-flex items-center gap-1.5 text-left transition-colors duration-300 before:absolute before:-bottom-4 before:-left-4 before:h-0.5 before:w-full before:transition-all ${
                    isActive
                      ? "text-black before:bg-black dark:text-white dark:before:bg-white"
                      : "relative text-black/50 hover:text-black/80 dark:text-white/40 dark:hover:text-white/80"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon variant="Broken" className="size-4" />
                  <span className="font-primary text-xs lg:text-base">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </CstCard>
  );
}
