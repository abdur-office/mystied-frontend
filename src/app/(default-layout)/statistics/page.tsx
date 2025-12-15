import AppSearch from "@/components/layouts/dashboard/header/AppSearch";
import { ChartSquare } from "iconsax-reactjs";
import { Metadata } from "next";
import StatisticsContent from "./_components/StatisticsContent";

export const metadata: Metadata = {
  title: "Statistics",
};

const Page = () => {
  return (
    <div>
      {/* Header  */}
      <header className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChartSquare
            variant="Broken"
            className="text-black dark:text-white"
          />
          <h2 className="text-[23px] font-semibold text-black dark:text-white">
            Statistics
          </h2>
        </div>

        <div className="hidden xl:block">
          <AppSearch />
        </div>
      </header>

      <StatisticsContent />
    </div>
  );
};

export default Page;
