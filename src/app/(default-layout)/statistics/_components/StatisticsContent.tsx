import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger2,
} from "@/components/ui/accordion";
import CstCard from "@/components/ui/CstCard";
import { ArrowLeft, InfoCircle } from "iconsax-reactjs";

export default function StatisticsContent() {
  return (
    <div className="grid grid-cols-12 gap-4 md:min-h-[500px]">
      <CstCard
        isHideGradient
        className="relative col-span-12 space-y-4 overflow-hidden pb-7 sm:col-span-6 lg:col-span-8"
      >
        {/* Header */}
        <div className="mb-2.5 flex items-center justify-between border-b border-black/10 px-[18px] py-2 dark:border-white/10">
          <div className="flex items-center gap-3.5">
            <button className="rounded-lg p-1 transition-colors hover:bg-white/10">
              <ArrowLeft className="h-4 w-4 text-black dark:text-white" />
            </button>
            <h1 className="text-lg font-medium tracking-wide text-black uppercase dark:text-white">
              statements
            </h1>
          </div>
        </div>
        <ul className="flex items-center justify-between">
          {["statements", "overview", "engagement", "Reach", "fans"].map(
            (item) => (
              <li key={item} className="w-full">
                <button className="font-primary w-full border-b border-black/10 p-2.5 pb-2 text-base text-black/50 uppercase hover:text-black/80 dark:border-white/10 dark:text-white/60 dark:hover:text-white/80">
                  {item}
                </button>
              </li>
            ),
          )}
        </ul>
        <div className="px-[18px]">
          <ul className="mt-7 flex items-center gap-2">
            {["Earnings", "Payout requests", "Charge backs", "Referrals"].map(
              (item) => (
                <li key={item}>
                  <button className="font-primary rounded-md bg-black/5 px-1.5 py-1 text-sm hover:bg-black/10 dark:bg-[#25242B] dark:text-white dark:hover:bg-[#393741]">
                    {item}
                  </button>
                </li>
              ),
            )}
          </ul>

          <div>
            <Accordion
              type="single"
              collapsible
              className="my-4 w-full max-w-full"
            >
              <AccordionItem value="earnings">
                <AccordionTrigger2
                  className="rounded-none border-b border-black/10 py-3 dark:border-white/20"
                  arrowClassName="text-black/80 dark:text-white/60"
                >
                  <div>
                    <h2 className="font-primary text-xs font-medium text-black/80 dark:text-white">
                      Last 30 days
                    </h2>
                    <p className="font-primary text-xs text-black/80 dark:text-white/60">
                      Sep 26, 2025 - Oct 26, 2025
                    </p>
                  </div>
                </AccordionTrigger2>
                <AccordionContent className="px-2 pt-2">
                  Earnings contents
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <ul className="mt-1 flex items-center gap-2">
            {[
              "All",
              "Subscriptions",
              "Tips",
              "Posts",
              "Messages",
              "Streams",
            ].map((item) => (
              <li key={item}>
                <button className="font-primary rounded-md bg-black/5 px-1.5 py-1 text-sm hover:bg-black/10 dark:bg-[#25242B] dark:text-white dark:hover:bg-[#393741]">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </CstCard>
      <CstCard
        isHideGradient
        className="relative col-span-12 space-y-4 overflow-hidden pb-7 sm:col-span-6 lg:col-span-4"
      >
        <div className="space-y-4 px-3 py-4">
          <div className="rounded-[10px] border border-black/10 dark:border-white/20">
            <div className="grid grid-cols-2">
              <div className="space-y-1 border-b border-black/10 px-2 py-5 dark:border-white/20">
                <h4 className="font-primary text-xl font-medium text-black dark:text-white">
                  $0.86
                </h4>
                <p className="font-primary text-sm text-black dark:text-white">
                  Current balance
                </p>
              </div>
              <div className="space-y-1 border-b border-l border-black/10 py-5 ps-4 dark:border-white/20">
                <h4 className="font-primary text-xl font-medium text-black dark:text-white/60">
                  $0.00
                </h4>
                <p className="font-primary flex items-center gap-1 text-sm text-black dark:text-white/60">
                  Pending balance
                  <InfoCircle variant="Broken" className="size-4" />
                </p>
              </div>
            </div>

            <div className="px-4">
              <Accordion
                type="single"
                collapsible
                className="w-full max-w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger2 arrowClassName="text-black/80 dark:text-white/60 lg:size-4">
                    <div>
                      <h4 className="mb-1 text-xs text-black/80 capitalize dark:text-white">
                        Manual payouts
                      </h4>
                      <p className="font-primary text-xs text-black/80 dark:text-white/60">
                        minimum withdrawal amount $50
                      </p>
                    </div>
                  </AccordionTrigger2>
                  <AccordionContent className="flex justify-end">
                    <button className="font-primary line-clamp-1 h-10 rounded-full bg-[#292C2F]/80 px-2 py-1 text-[11px] font-medium text-white/80 uppercase lg:px-6 lg:py-2.5">
                      request withdrawal
                    </button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="space-y-9 rounded-[10px] border border-black/10 px-4 py-5 dark:border-white/20">
            <h3 className="text-xs font-semibold text-black/80 capitalize dark:text-white">
              Earnings
            </h3>
            <p className="font-primary text-xs text-black/80 dark:text-white/60">
              No earnings for this period
            </p>
          </div>
        </div>
      </CstCard>
    </div>
  );
}
