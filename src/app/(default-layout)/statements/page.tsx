import AppSearch from "@/components/layouts/dashboard/header/AppSearch";
import { ChartSquare } from "iconsax-reactjs";
import { Metadata } from "next";
import StatementsContent from "./_components/StatementsContent";

export const metadata: Metadata = {
  title: "Statements",
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
            Statements
          </h2>
        </div>

        <div className="hidden xl:block">
          <AppSearch />
        </div>
      </header>

      <StatementsContent />
    </div>
  );
};

export default Page;
