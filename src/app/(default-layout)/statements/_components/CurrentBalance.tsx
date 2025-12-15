import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger2,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger2,
  SelectValue,
} from "@/components/ui/select";
import { InfoCircle } from "iconsax-reactjs";

export default function CurrentBalance() {
  return (
    <AccordionItem
      value="current-balance"
      className="rounded-b-[10px] border border-black/20 last:border-b data-[state=closed]:rounded-b-none dark:border-white/20"
    >
      <AccordionTrigger2 className="flex items-center justify-between rounded-none border-none bg-black/5 px-2 py-3.5 lg:px-[18px] dark:bg-[#2F2E37]">
        <div className="flex items-center gap-2">
          <h4 className="font-primary line-clamp-1 text-xs font-normal text-black/80 uppercase lg:text-sm dark:text-white">
            Current Balance
          </h4>
          <span className="ml-auto text-[10px] font-medium text-black lg:text-sm dark:text-white">
            $0.86
          </span>
        </div>
      </AccordionTrigger2>
      <AccordionContent className="px-3 pt-4 pb-8">
        <div className="mb-2.5 flex items-center justify-between border-b border-white/20 pb-2.5">
          <p className="font-primary flex items-center gap-2.5 text-black/80 dark:text-white/60">
            <span className="text-sm uppercase"> Current Balance</span>
            <span className="inline-flex">
              <InfoCircle variant="Broken" className="size-4" />
            </span>
          </p>
          <p className="text-sm text-black dark:text-white/60">$0.86</p>
        </div>
        <div>
          <Select defaultValue="one">
            <SelectTrigger2 className="font-primary w-full rounded-lg border-white/20 bg-black/5! text-sm uppercase lg:h-11! dark:bg-transparent!">
              <SelectValue placeholder="Select Statement" />
            </SelectTrigger2>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value="one"
                  className="text-black/80 dark:text-white/60"
                >
                  Manual payouts
                </SelectItem>
                <SelectItem
                  value="two"
                  className="text-black/80 dark:text-white/60"
                >
                  Direct payouts{" "}
                </SelectItem>
                <SelectItem
                  value="three"
                  className="text-black/80 dark:text-white/60"
                >
                  Other expenses
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="font-primary mt-1 ml-2 text-xs text-black dark:text-white/50">
            Minimum withdrawal amount is $50
          </p>

          <div className="mt-5 flex justify-end">
            <button className="font-primary line-clamp-1 rounded-full bg-[#292C2F]/80 px-2 py-1 text-[11px] font-medium text-white/80 uppercase lg:px-6 lg:py-2.5">
              request withdrawal
            </button>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
