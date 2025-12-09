import AppSearch from "@/components/layouts/dashboard/header/AppSearch";
import { HomeHashtag } from "iconsax-reactjs";
import { Metadata } from "next";
import SlideStatus from "./_components/HomeSlider";
import PostCard from "./_components/PostCard";
import UserActivity from "./_components/UserActivity";
import { activityData } from "./_components/activity-data";
export const metadata: Metadata = {
  title: "Dashboard",
};

const Page = () => {
  return (
    <div>
      {/* Header  */}
      <header className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HomeHashtag
            variant="Broken"
            className="text-black dark:text-white"
          />
          <h2 className="text-[23px] font-semibold text-black dark:text-white">
            Home
          </h2>
        </div>

        <AppSearch />
      </header>
      <div className="flex flex-col gap-[1.50%] sm:flex-row">
        <div className="w-full space-y-4 sm:w-[63%]">
          {/* Home Slider */}
          <SlideStatus />
          <PostCard />
        </div>
        <div className="mt-4 w-full space-y-4 sm:mt-0 sm:w-[35.5%]">
          {activityData.map((activity) => (
            <UserActivity key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
