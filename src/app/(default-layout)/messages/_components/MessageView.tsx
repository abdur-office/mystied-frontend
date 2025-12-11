import MessageDetails from "./MessageDetails";
import MessageHeader from "./MessageHeader";
import MessageSend from "./MessageSend";
import MessageText from "./MessageText";

export default function MessageView() {
  return (
    <div className="flex h-full gap-[1.50%]">
      <div className="w-[64%] rounded-[22px] bg-[#F0EEEE]">
        {/* Message Header  */}
        <MessageHeader />

        <div className="px-3 py-4">
          {/* separator */}
          <div className="relative mt-24 mb-5 border-b border-[#9B9A9D]">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F0EEEE] px-2 py-1 text-[8px] font-medium text-[#9B9A9D]">
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
