"use client";
import { VideoPlay } from "@/components/icons";
import { SearchNormal } from "iconsax-reactjs";
import {
  Circle,
  Download,
  Mic,
  Settings,
  Video as VideoFileIcon,
} from "lucide-react";
import { useState } from "react";
export default function MediaGalleryContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Photo", "GIF", "Video", "Audio"];

  const mediaItems = [
    {
      id: 1,
      date: "Sep 7",
      price: "$69 Paid",
      views: 0,
      duration: null,
      type: "audio",
      badge: null,
    },
    {
      id: 2,
      date: "Jul 24",
      price: "$59 Paid",
      views: 0,
      duration: null,
      type: "image",
      badge: null,
    },
    {
      id: 3,
      date: "july 24",
      price: null,
      views: 107,
      duration: null,
      type: "video",
      badge: null,
    },
    {
      id: 4,
      date: "Sep 7",
      price: null,
      views: 698,
      duration: "0:08",
      type: "video",
      badge: "Preview, Popular",
    },
    {
      id: 5,
      date: "Sep 7",
      price: null,
      views: 0,
      duration: "0:08",
      type: "video",
      badge: null,
    },
    {
      id: 6,
      date: "Sep 7",
      price: null,
      views: 0,
      duration: null,
      type: "image",
      badge: "Free",
    },
    {
      id: 7,
      date: "Sep 7",
      price: null,
      views: 0,
      duration: null,
      type: "image",
      badge: null,
    },
    {
      id: 8,
      date: "Sep 7",
      price: "$100",
      views: 0,
      duration: "0:08",
      type: "video",
      badge: null,
    },
    {
      id: 9,
      date: "Sep 7",
      price: "$100",
      views: 0,
      duration: "0:08",
      type: "video",
      badge: null,
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto rounded-[20px] bg-[#E5E5EA] py-3">
      {/* Header */}
      <div className="px-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-common-text mb-2 text-base font-semibold">
            All Media
          </h2>
          <button>
            <SearchNormal variant="Broken" className="size-6 text-gray-400" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="mb-4 flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-2.5 py-[5px] text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-[#141414] text-white"
                  : "bg-[#AEAEB2] text-[#141414] hover:bg-[#AEAEB2]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Message Input */}
        <input
          type="text"
          placeholder="Type a message..."
          className="text-common-text w-full text-xs outline-none placeholder:text-[#9B9A9D]"
        />
      </div>

      {/* Processing Status */}
      <div className="bg-[#D1D1D6] px-6 py-3">
        <p className="text-common-text text-center text-xs">
          16 files processed...
        </p>
      </div>

      {/* Media Grid */}
      <div>
        <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item) => (
            <div key={item.id} className="group relative">
              {/* Media Card */}
              <div className="bg-paragraph relative h-[152px]">
                {/* Placeholder Image */}
                <img
                  src={`https://i.ibb.co.com/hRphDH64/image.png`}
                  alt={`Media ${item.id}`}
                  className="h-full w-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/50">
                  {/* Top Bar */}
                  <div className="absolute top-0 right-0 left-0 z-10 flex items-center justify-between p-3">
                    <span className="rounded-md bg-[#DEDDE63D] px-2.5 py-1 text-xs font-normal text-white">
                      {item.date}
                    </span>
                    <div className="flex items-center gap-1">
                      <button className="rounded p-1 text-white hover:bg-white/20">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="rounded p-1 text-white hover:bg-white/20">
                        <Settings className="h-4 w-4" />
                      </button>
                      <button className="rounded p-1 text-white hover:bg-white/20">
                        <Circle className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Center Play Button */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button>
                        <VideoPlay size={28} />
                      </button>
                    </div>
                  )}

                  {/* Bottom Info */}

                  <div className={`absolute right-0 bottom-0 left-0`}>
                    {item.badge && (
                      <span
                        className={`drop-filter-blur flex items-center justify-center px-3 py-1 text-center text-xs font-normal text-white`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {item.price && (
                      <span
                        className={`flex items-center justify-center px-3 py-1 text-center text-xs font-normal ${
                          item.price?.includes("Paid")
                            ? "bg-[#60B36ACC] text-white"
                            : "bg-[#FF151566] text-white"
                        }`}
                      >
                        {item.price}
                      </span>
                    )}
                  </div>
                  {/* File  */}
                  {(item.type === "video" || item.type === "audio") && (
                    <div className="absolute top-12 right-4 flex items-center gap-1 rounded-md bg-[#DEDDE63D] px-1.5 py-1 text-xs font-normal text-white">
                      {item.type === "video" && (
                        <VideoFileIcon className="size-4" />
                      )}
                      {item.type === "audio" && <Mic className="size-4" />}
                      <span>1:07</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
