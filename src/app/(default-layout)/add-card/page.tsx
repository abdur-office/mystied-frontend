import AppSearch from "@/components/layouts/dashboard/header/AppSearch";
import { Calendar2 } from "iconsax-reactjs";
import { Metadata } from "next";
import PaymentCards from "./_components/PaymentCards";
import TransactionSummary from "./_components/TransactionSummary";

export const metadata: Metadata = {
  title: "Queue",
};

const Page = () => {
  return (
    <div>
      {/* Header  */}
      <header className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar2 variant="Broken" className="text-black dark:text-white" />
          <h2 className="text-[23px] font-semibold text-black dark:text-white">
            Payment Methods
          </h2>
        </div>

        <div className="hidden xl:block">
          <AppSearch />
        </div>
      </header>

      <div className="grid grid-cols-12 gap-4">
        {/* Left side */}
        <div className="col-span-12 lg:col-span-8">
          <PaymentCards />
        </div>
        {/* Right side */}
        <div className="col-span-12 lg:col-span-4">
          <TransactionSummary />
        </div>
      </div>
    </div>
  );
};

export default Page;
