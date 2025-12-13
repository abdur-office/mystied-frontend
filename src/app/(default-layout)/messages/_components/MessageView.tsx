import { Edit2 } from "iconsax-reactjs";
import MessageDetails from "./MessageDetails";
import MessageHeader from "./MessageHeader";
import MessageSend from "./MessageSend";
import MessageText from "./MessageText";

export default function MessageView() {
  return (
    <div className="flex h-full gap-[1.50%]">
      <div className="w-[98.50%] rounded-[22px] bg-[#F0EEEE] xl:w-[64%] dark:bg-[#1A1C1E]">
        {/* Message Header  */}
        <MessageHeader />

        <div className="flex h-12 items-center justify-between rounded-lg bg-[#4F794D] px-3 py-0.5">
          <p className="text-common-text text-[13px] font-normal tracking-[0.156px] dark:text-white">
            White Whale. he does IT job. He prefers to speak in Mandarin.
          </p>
          <button>
            <Edit2
              variant="Broken"
              className="size-[18px] text-[#FFFFFF] dark:text-[#FFFFFF]"
            />
          </button>
        </div>

        <div className="px-3 py-4">
          {/* separator */}
          <div className="relative mt-10 mb-5 border-b border-[#9B9A9D]">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F0EEEE] px-2 py-1 text-[8px] font-medium text-[#9B9A9D] dark:bg-[#1A1C1E]">
              Today
            </span>
          </div>

          {/* message list start */}
          <MessageText />

          {/* message input start */}
          <MessageSend />
        </div>
      </div>
      {/* Message Details  */}
      <MessageDetails />
    </div>
  );
}
