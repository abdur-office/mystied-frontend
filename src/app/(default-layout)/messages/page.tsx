import { Metadata } from "next";
import MessageView from "./_components/MessageView";
export const metadata: Metadata = {
  title: "Messages",
};

const Page = () => {
  return (
    <div className="mt-4 hidden w-full space-y-4 sm:mt-0 md:block md:w-[65.50%] lg:w-[75%]">
      <MessageView />
    </div>
  );
};

export default Page;
