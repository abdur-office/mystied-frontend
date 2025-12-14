import AppSearch from "@/components/layouts/dashboard/header/AppSearch";
import { Calendar2 } from "iconsax-reactjs";
import { Metadata } from "next";
import QueueCalendarSection from "./_components/QueueCalendarSection";

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
            Queue
          </h2>
        </div>

        <div className="hidden xl:block">
          <AppSearch />
        </div>
      </header>

      <QueueCalendarSection />
    </div>
  );
};

export default Page;
