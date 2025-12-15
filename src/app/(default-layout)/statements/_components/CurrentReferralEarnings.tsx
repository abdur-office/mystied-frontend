import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger2,
} from "@/components/ui/accordion";

export default function CurrentReferralEarnings() {
  return (
    <AccordionItem
      value="current-ref"
      className="rounded-b-[10px] border border-black/20 last:border-b data-[state=closed]:rounded-b-none dark:border-white/20"
    >
      <AccordionTrigger2 className="rounded-none border-none bg-black/5 px-2 py-3.5 lg:px-[18px] dark:bg-[#2F2E37]">
        <div className="relative flex w-full items-baseline justify-between">
          <div className="">
            <h4 className="font-primary mb-2.5 line-clamp-1 pr-4 text-xs font-normal text-black/80 uppercase lg:text-sm dark:text-white">
              Current referral earnings
            </h4>
            <p className="font-primary text-xs font-light text-black/80 dark:text-white/50">
              Please note, if you do not reach the minimum payout ($50), your
              earnings will roll over to the next monthly payout.
            </p>
          </div>
          <span className="absolute top-0 right-0 ml-auto text-[10px] font-medium text-black/80 lg:text-sm dark:text-white">
            $0.86
          </span>
        </div>
      </AccordionTrigger2>
      <AccordionContent className="px-3 pt-4 pb-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-primary text-sm text-black/80 uppercase dark:text-white/60">
            your personal referral url
          </p>
          <button className="text-theme-purple font-primary text-sm">
            Copy link
          </button>
        </div>
        <p className="font-primary text-xs text-black/80 dark:text-white/60">
          https://onlyfans.com?ref=126279947
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}
