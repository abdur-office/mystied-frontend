import { FilterIcon } from "@/components/icons";
import MessageList from "./MessageList";

export default function MessageLists() {
  const filters = [
    {
      icon: "https://i.ibb.co.com/DP8gSR64/1.png",
      name: "James",
      badge: "Rebill on",
      text: "preview text last text here",
      balance: "100",
      time: "10:45 pm",
    },
    {
      icon: "https://i.ibb.co.com/1YRPqNZM/2.png",
      name: "John",
      badge: "EXPIRED",
      text: "Hi how arey ou blah blah",
      balance: "100",
      time: "10:45 pm",
    },
    {
      icon: "https://i.ibb.co.com/XQTsjjp/3.png",
      name: "Jane",
      badge: "Rebill on",
      text: "test time blah blah",
      balance: "100",
      time: "10:45 pm",
    },
    {
      icon: "https://i.ibb.co.com/RGB4VDM2/1.png",
      name: "James",
      badge: "Rebill on",
      text: "Here how are you ??",
      balance: "100",
      time: "10:45 pm",
    },
  ];
  {
    /* /*
<a href="https://ibb.co.com/RGB4VDM2"><img src="https://i.ibb.co.com/DP8gSR64/1.png" alt="1" border="0"></a>
<a href="https://ibb.co.com/1YRPqNZM"><img src="https://i.ibb.co.com/bjNCBV1F/2.png" alt="2" border="0"></a>
<a href="https://ibb.co.com/XQTsjjp"><img src="https://i.ibb.co.com/KPHqbb7/3.png" alt="3" border="0"></a>
<a href="https://ibb.co.com/RGB4VDM2"><img src="https://i.ibb.co.com/DP8gSR64/1.png" alt="1" border="0"></a>
*/
  }

  return (
    <div>
      <div className="flex items-center justify-between border-b border-[#c7c7ccd2] px-[18px] py-2.5">
        <h2 className="text-base font-semibold text-black dark:text-white">
          Newest First
        </h2>
        <FilterIcon className="text-black dark:text-white" />
      </div>
      <div className="pe-5">
        <ul className="cst-scrollbar-3 mt-1 ml-5 flex flex-nowrap gap-2 overflow-x-auto pt-3 pb-0.5">
          <li>
            <button className="bg-common-text h-[27px] rounded-[6px] px-1.5 py-0.5 text-sm font-normal whitespace-nowrap text-white">
              Queue
            </button>
          </li>
          <li>
            <button className="text-common-text relative h-[27px] rounded-[6px] bg-[#E5E5EA] px-1.5 py-0.5 text-sm font-normal whitespace-nowrap">
              Pinned{" "}
              <span className="bg-theme-success absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-xs text-[8px] font-normal text-white">
                5
              </span>
            </button>
          </li>
          <li>
            <button className="text-theme-success h-[27px] rounded-[6px] bg-[#E5E5EA] px-1.5 py-0.5 text-sm font-normal whitespace-nowrap">
              Online now
            </button>
          </li>
          <li>
            <button className="text-common-text h-[27px] rounded-[6px] bg-[#E5E5EA] px-1.5 py-0.5 text-sm font-normal whitespace-nowrap">
              New Message
            </button>
          </li>
        </ul>
      </div>

      <ul className="mt-4">
        {filters.map((filter, index) => (
          <li key={index}>
            <MessageList {...filter} />
          </li>
        ))}
      </ul>
    </div>
  );
}
