import AppSearch from "@/components/layouts/dashboard/header/AppSearch";
import { Calendar2 } from "iconsax-reactjs";
import { Metadata } from "next";

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
            Payment Cards
          </h2>
        </div>

        <div className="hidden xl:block">
          <AppSearch />
        </div>
      </header>

      <div className="grid grid-cols-12">
        <div>daf</div>
        <div>asfdf</div>
      </div>
    </div>
  );
};

export default Page;
