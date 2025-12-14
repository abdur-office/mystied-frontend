import { GridEraser } from "iconsax-reactjs";
import MessageLists from "./_components/MessageLists";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
        <div className="flex flex-col gap-[1.50%] md:flex-row">
          <div className="w-full space-y-4 rounded-[20px] bg-[#F0EEEE] pb-7 md:w-[33.50%] lg:w-[23.50%] dark:bg-[#1A1C1E] dark:shadow-[inset_0_0_4px_0_#3B3849]">
            <MessageLists />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
