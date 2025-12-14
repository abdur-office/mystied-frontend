import { ChartIcon } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import SelectYourRegion from "./SelectYourRegion";
import TimezoneDialog from "./TimeZoneDialog";
export default function FansOverview() {
  return (
    <div className="px-5 py-6">
      <TimezoneDialog />
      <div className="mb-5 flex items-center gap-1.5">
        <h4 className="text-common-text text-sm font-medium tracking-[0.168px] dark:text-white">
          Rizky Pang
        </h4>
        <SelectYourRegion />
      </div>
      <div className="mb-4 flex items-center gap-2">
        <p className="text-common-text inline-flex items-center rounded-[3px] bg-[#D1D1D6] px-[5px] py-0.5 text-xs font-normal tracking-[0.144px] dark:bg-[#35363B] dark:text-white">
          Location
        </p>
        <div className="text-common-text line-clamp-1 flex flex-1 items-center gap-2 text-xs tracking-[0.144px] whitespace-nowrap dark:text-white">
          <Image
            src="https://i.ibb.co.com/S70XKsY7/image-3085.png"
            alt="location"
            width={100}
            height={100}
            className="h-[11px] w-4"
          />
          <p>Taiwan</p>
          <span className="bg-paragraph h-[5px] w-[5px] shrink-0 rounded-full opacity-20"></span>
          <span>10:32 PM</span>
          <span>Thunder Storm</span>
        </div>
      </div>
      <div className="mb-4 flex items-center gap-2">
        <p className="text-common-text inline-flex items-center rounded-[3px] bg-[#D1D1D6] px-[5px] py-0.5 text-xs font-normal tracking-[0.144px] dark:bg-[#35363B] dark:text-white">
          Age
        </p>
        <div className="text-common-text line-clamp-1 flex flex-1 items-center gap-2.5 text-xs tracking-[0.144px] whitespace-nowrap dark:text-white">
          <p>43 y.o.</p>
          <span className="bg-paragraph h-[5px] w-[5px] shrink-0 rounded-full opacity-20"></span>
          <span>Jan 5</span>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-lg">
        {/* ================= Preferences ================= */}
        <div>
          {/* OUTSIDE TITLE */}
          <p className="text-common-text mb-[5px] text-xs font-normal tracking-[0.144px] dark:text-white">
            Preferences:
          </p>

          <AccordionItem value="preferences" className="border-none">
            {/* HEADER */}
            <AccordionTrigger className="rounded-lg border border-white/30 bg-[#D1D1D6] px-2.5 py-[7px] hover:no-underline dark:bg-[#35363B]">
              <p className="text-common-text text-xs font-normal tracking-[0.144px] dark:text-white">
                Select topics of actives fan likes
              </p>
            </AccordionTrigger>

            {/* CONTENT */}
            <AccordionContent className="pt-5">
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  ["Fan Since", "Sep 27, 2025"],
                  [
                    "Subscribed",
                    <>
                      <span className="text-[#42C842]">Yes</span>, 15 days
                    </>,
                  ],
                  ["Rebill", <span className="text-[#42C842]">On</span>],
                  [
                    "Last Online",
                    <span className="text-[#1E72C1]">Today</span>,
                  ],
                  ["Last response", "week ago"],
                  ["Last Read", "Sep 29, 2025"],
                ].map(([label, value], i) => (
                  <div key={i}>
                    <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50 dark:text-white/80">
                      {label}
                    </p>
                    <p className="text-common-text text-xs font-normal tracking-[0.144px] dark:text-white/80">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* ================= List ================= */}
        <div className="mt-5">
          {/* OUTSIDE TITLE */}
          <p className="text-common-text mb-[5px] text-xs font-normal tracking-[0.144px] dark:text-white">
            List:
          </p>

          <AccordionItem value="list" className="border-none">
            {/* HEADER */}
            <AccordionTrigger className="gap-2 rounded-lg border border-white/30 bg-[#D1D1D6] px-2.5 py-[7px] hover:no-underline dark:bg-[#35363B]">
              <div className="flex w-full items-center justify-between">
                <p className="text-common-text text-xs font-medium tracking-[0.144px] dark:text-white">
                  Buying power
                </p>

                <span className="text-common-text flex items-center gap-1 text-xs font-medium tracking-[0.144px] dark:text-white">
                  Creator
                </span>
              </div>
            </AccordionTrigger>

            {/* CONTENT */}
            <AccordionContent className="pt-5">
              <div className="mb-6 flex max-w-[282px] justify-between gap-2 text-center">
                {[
                  ["Spend", "$263"],
                  ["avg PPV", "$160"],
                  ["avg Tip", "0"],
                  ["Purchased", "Sep 29, 2025"],
                ].map(([label, value], i) => (
                  <div key={i}>
                    <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50 dark:text-white/80">
                      {label}
                    </p>
                    <p className="text-common-text text-xs font-normal tracking-[0.144px] dark:text-white/80">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mx-5 flex justify-between">
                <div className="flex items-center gap-1">
                  <ChartIcon size={24} className="stroke-[#2835EA]" />
                  <a
                    href="#"
                    className="text-common-text text-xs font-normal tracking-[0.144px] underline opacity-50 dark:text-white"
                  >
                    View PPV Timeline
                  </a>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-common-text text-xs font-normal tracking-[0.144px] opacity-50 dark:text-white">
                    Traffic Source:
                  </p>
                  <a
                    href="#"
                    className="text-common-text text-xs font-normal tracking-[0.144px] dark:text-white"
                  >
                    Select
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>

      <div className="mt-14 flex items-center gap-4">
        <p className="text-common-text text-xs font-normal tracking-[0.144px] dark:text-white">
          Fan Persona
        </p>
        <button className="unlock-btn-3">Generate AI Insight</button>
      </div>
    </div>
  );
}
