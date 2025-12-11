import { GridEraser } from "iconsax-reactjs";
import { Metadata } from "next";
import MessageLists from "./_components/MessageLists";
import MessageView from "./_components/MessageView";
export const metadata: Metadata = {
  title: "Messages",
};

const Page = () => {
  return (
    <div className="flex flex-col">
      <header className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GridEraser variant="Broken" className="text-black dark:text-white" />
          <h2 className="text-[23px] font-semibold text-black dark:text-white">
            Messages
          </h2>
        </div>

        {/* <AppSearch /> */}
      </header>
      <div>
        <div className="flex flex-col gap-[1.50%] sm:flex-row">
          <div className="w-full space-y-4 rounded-[20px] bg-[#F0EEEE] pb-7 sm:w-[23.50%]">
            <MessageLists />
          </div>
          <div className="mt-4 w-full space-y-4 sm:mt-0 sm:w-[75%]">
            <MessageView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
