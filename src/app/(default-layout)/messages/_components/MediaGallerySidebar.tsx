"use client";
import { GifIcon, MediaIcon, VideoMd } from "@/components/icons";
import { cn } from "@/lib/utils";
import { DocumentFilter, SearchNormal } from "iconsax-reactjs";
import { Mic } from "lucide-react";
export default function MediaGallerySidebar() {
  return (
    <div className="w-full rounded-[20px] bg-[#E5E5EA] md:w-72 dark:bg-[#1A1C1E]">
      <div className="border-b border-[#C7C7CC] px-4 pt-3 pb-1 dark:border-[#F6F6F81A]">
        <div className="flex items-center justify-between">
          <h2 className="text-common-text mb-2 text-base font-semibold dark:text-white">
            Newest First
          </h2>
          <button>
            <SearchNormal variant="Broken" className="size-6 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center justify-between px-4 py-3">
        <h3 className="mb-2 text-base font-semibold text-[#9B9A9D]">Custom</h3>
        <button>
          <DocumentFilter variant="Broken" className="size-6 text-gray-400" />
        </button>
      </div>

      <div className="border-b border-[#E5E5EA] px-4 pb-3 dark:border-[#F6F6F81A]">
        {/* All Media Section */}
        <h4 className="text-common-text mb-1.5 text-sm font-semibold dark:text-white">
          All Media
        </h4>
        {/* Media Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <MediaIcon className="h-3 w-3" />
            <span>857</span>
            <span className="h-1 w-1 rounded-full bg-[#9B9A9D]"></span>
          </div>
          <div className="flex items-center gap-1">
            <VideoMd className="h-3 w-3 fill-[#9B9A9D]" />
            <span>857</span>
            <span className="h-1 w-1 rounded-full bg-[#9B9A9D]"></span>
          </div>
          <div className="flex items-center gap-1">
            <GifIcon className="h-3 w-3 fill-[#9B9A9D]" />
            <span>...</span>
          </div>
          <div className="ms-auto flex">
            <span className="h-7 w-7 rounded-[5px] border border-[#343337] bg-[#413E3D]"></span>
            <span className="-ml-3.5 h-7 w-7 rounded-[5px] border border-[#343337] bg-[#615A56]"></span>
            <span className="-ml-3.5 h-7 w-7 rounded-[5px] border border-[#343337] bg-[#615C56] opacity-50"></span>
          </div>
        </div>
      </div>

      <div className=" ">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#E5E5EA] px-4 py-2 dark:border-[#F6F6F81A]"
          >
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-flex h-3 w-3 rounded-full",
                    item.status === "red" ? "bg-[#CD372C]" : "bg-[#9055FF]",
                  )}
                ></span>
                <h3 className="text-common-text line-clamp-1 text-sm font-medium dark:text-white">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <MediaIcon className="h-3 w-3" />
                  <span>857</span>
                  <span className="h-1 w-1 rounded-full bg-[#9B9A9D]"></span>
                </div>
                <div className="flex items-center gap-1">
                  <VideoMd className="h-3 w-3 fill-[#9B9A9D]" />
                  <span>857</span>
                  <span className="h-1 w-1 rounded-full bg-[#9B9A9D]"></span>
                </div>
                <div className="flex items-center gap-1">
                  <GifIcon className="h-3 w-3 fill-[#9B9A9D]" />
                  <span>...</span>
                </div>
                <div className="relative ms-auto flex">
                  <span className="h-7 w-7 rounded-[5px] border border-[#343337] bg-[#413E3D]"></span>
                  <span className="-ml-3.5 h-7 w-7 rounded-[5px] border border-[#343337] bg-[#615A56]"></span>
                  <span className="-ml-3.5 h-7 w-7 rounded-[5px] border border-[#343337] bg-[#615C56] opacity-50"></span>
                  <Mic className="absolute top-1/2 right-3 z-10 size-3 -translate-y-1/2 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const sidebarItems = [
  {
    title: "$38 Bree X Gracia..",
    count: 857,
    hasVideo: true,
    hasImage: true,
    status: "red",
  },
  {
    title: "$38 Bree X Gracia..",
    count: 857,
    hasVideo: true,
    hasImage: true,
    status: "purple",
  },
  {
    title: "$38 Bree X Gracia..",
    count: 857,
    hasVideo: true,
    hasImage: true,
    status: "red",
  },
  {
    title: "$38 Bree X Gracia..",
    count: 857,
    hasVideo: true,
    hasImage: true,
    status: "red",
  },
  {
    title: "$38 Bree X Gracia..",
    count: 857,
    hasVideo: true,
    hasImage: true,
    status: "red",
  },
  {
    title: "$38 Bree X Gracia..",
    count: 857,
    hasVideo: true,
    hasImage: true,
    status: "red",
  },
];
