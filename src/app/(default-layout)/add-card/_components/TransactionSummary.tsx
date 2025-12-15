/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import CstCard from "@/components/ui/CstCard";
import { Switch } from "@/components/ui/switch";
import { Check, RotateRight, TagRight, TickCircle } from "iconsax-reactjs";

const TransactionSummary = () => {
  return (
    <CstCard className="px-3 pt-4">
      <div className="space-y-3.5">
        <div className="rounded-[10px] border border-black/20 px-3 py-5 dark:border-white/20">
          <div className="mb-2.5 space-y-2 border-b border-black/20 pb-2.5 dark:border-white/20">
            <h6 className="text-xl font-medium uppercase">$0</h6>
            <p className="text-foreground/60 text-sm font-medium">
              Wallet Credits
            </p>
          </div>
          <p className="mb-5 text-sm font-semibold uppercase">
            add funds to your wallet
          </p>

          <Button
            variant="outline"
            className="w-full rounded-full border-0 uppercase"
          >
            add a payment card
          </Button>

          <div className="mt-4 flex items-center justify-between gap-2 text-sm font-medium">
            <span>Make wallet primary method for rebills</span> <Switch />
          </div>
        </div>

        <div className="rounded-[10px] border border-black/20 px-3 py-5 dark:border-white/20">
          <div className="border-b border-black/20 pb-3.5 dark:border-white/20">
            <div className="flex items-center justify-between gap-1">
              <span className="text-sm font-semibold uppercase">
                latest transactions
              </span>
              <RotateRight variant="Broken" />
            </div>
            <div className="text-foreground/60 flex items-center justify-between gap-1 text-xs font-medium">
              <span>Date</span>
              <span>Amount</span>
            </div>
          </div>

          <div className="space-y-3.5 border-b border-black/20 py-2.5 dark:border-white/20">
            <div className="flex items-center justify-between gap-1 text-sm font-semibold">
              <span>Sept 20, 2022, 12:05 PM</span>
              <span>$21.39 (7% GST)</span>
            </div>
            <div className="text-foreground/60 flex items-center gap-2 text-xs font-medium">
              <span>
                <img src="/images/payment-methods/6.png" alt="mastercard" />
              </span>
              <span>.... ... ... 8488</span>
            </div>
          </div>

          <div className="mb-5 border-b border-black/20 py-2.5 dark:border-white/20">
            <div className="flex items-center justify-between gap-1 text-sm font-medium">
              <span>
                Subscription to{" "}
                <span className="text-[#00AFF0]">alluringaudrey</span>
              </span>
              <TickCircle className="text-primary" size={18} variant="Broken" />
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full rounded-full border-0 uppercase"
          >
            view more transactions
          </Button>
        </div>
      </div>
    </CstCard>
  );
};

export default TransactionSummary;
