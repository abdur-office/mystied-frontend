import { ImageIcon, XIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function MessageList({
  icon,
  name,
  badge,
  text,
  balance,
  time,
}: {
  icon: string;
  name: string;
  badge: string;
  text: string;
  balance: string;
  time: string;
}) {
  console.log(badge);
  return (
    <div className="tr group relative flex items-center gap-3 border-b border-[#C7C7CC] px-4 py-3 transition-all hover:bg-[#E5E5EA] dark:border-[#F6F6F81A] dark:hover:bg-[#39404F]">
      <span className="absolute top-1/2 left-0 h-[calc(100%-30px)] w-[3px] -translate-y-1/2 rounded-tr-[2px] rounded-br-[2px] bg-[#748398] transition-all group-hover:bg-[#719CD8]"></span>
      <div className="relative">
        <div className="size-10 overflow-hidden rounded-full bg-white">
          <Image
            src={icon}
            alt="1"
            width={500}
            height={500}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <span
          className={cn(
            "bg-theme-purple absolute -bottom-4 left-1/2 inline-flex h-5 -translate-x-1/2 items-center justify-center rounded-[30px] border border-[#E5E5EA] px-1.5 py-0.5 text-[10px] font-medium text-white",
            badge === "EXPIRED" ? "bg-[#ED7708]" : "bg-theme-purple",
          )}
        >
          ${balance}
          <span className="bg-theme-success absolute -top-1 right-0 inline-flex h-2.5 w-2.5 rounded-full border border-[#E5E5EA]"></span>
        </span>
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              `text-common-text inline-flex items-center justify-center rounded-[4px] border border-[#C7C7CC] px-1.5 py-0.5 pt-1 text-[8px] font-normal dark:border-[#4C4B4E] dark:text-white ${badge === "EXPIRED" ? "bg-[#E3030373]" : "bg-transparent"}`,
            )}
          >
            {badge}
          </span>
          <button>
            <XIcon size={12} className="stroke-paragraph text-paragraph" />
          </button>
        </div>
        <p className="text-common-text text-sm font-medium dark:text-white">
          {name}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <ImageIcon
              size={12}
              className="stroke-paragraph text-paragraph size-3"
            />
            <span className="bg-paragraph inline-flex h-1 w-1 rounded-full"></span>
            <p className="text-paragraph line-clamp-1 text-xs font-normal dark:text-[#9B9A9D]">
              {text}
            </p>
          </div>
          {/* <p className="text-paragraph dark:text-theme-success text-xs font-normal">
            {time}
          </p> */}
          <p className="text-paragraph text-xs font-normal whitespace-nowrap dark:text-[#9B9A9D]">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
}
