"use client";

import CstCard from "@/components/ui/CstCard";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { parseAsStringEnum, useQueryState } from "nuqs";
import { useState, type ReactNode } from "react";
import ChargeBacks from "./ChargeBacks";
import EarningStatistics from "./EarningStatistics";
import Earnings from "./Earnings";
import PayoutRequest from "./PayoutRequest";
import Referral from "./Referral";
import TabList, { statementTabs, type StatementTabKey } from "./TabList";

const tabContent: Record<StatementTabKey, ReactNode> = {
  earning: <Earnings />,
  payout: <PayoutRequest />,
  statistics: <EarningStatistics />,
  "charge-backs": <ChargeBacks />,
  referral: <Referral />,
};

const parser = parseAsStringEnum(
  Object.keys(tabContent) as StatementTabKey[],
).withDefault("earning");

const StatementsContent = () => {
  const [activeTab, setActiveTab] = useQueryState("statements_tab", parser);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const currentTab = tabContent[activeTab];
  const currentLabel =
    statementTabs.find(({ key }) => key === activeTab)?.label ?? "Statements";

  const handleMobileChange = (tab: StatementTabKey) => {
    setActiveTab(tab);
    setIsDrawerOpen(false);
  };

  return (
    <div className="grid gap-[1.50%] sm:grid-cols-12 xl:flex">
      {/* Mobile drawer trigger */}
      <div className="col-span-12 sm:hidden">
        <Drawer
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
          direction="right"
        >
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              className="flex w-full items-center justify-between border-black/10 bg-black/5 text-left text-sm font-medium text-black hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <span>{currentLabel}</span>
              <span className="text-xs text-black/60 dark:text-white/60">
                Change
              </span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="border-t border-black/10 bg-[#131215] p-0 sm:max-w-lg dark:border-white/10 dark:bg-[#1A1C1E]">
            <DrawerHeader hidden>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <div className="max-h-svh overflow-y-auto">
              <TabList activeTab={activeTab} onChange={handleMobileChange} />
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop / tablet sidebar */}
      <div className="col-span-12 hidden w-full sm:col-span-5 sm:block xl:w-[36%]">
        <TabList activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <CstCard
        isHideGradient
        className="relative col-span-12 w-full overflow-hidden sm:col-span-7 xl:w-[62.5%]"
      >
        {currentTab}
      </CstCard>
    </div>
  );
};

export default StatementsContent;
