import { BellIcon, ImageIcon, PinMessage, StarIcon } from "@/components/icons";
import { Edit2, More, NoteRemove, SearchNormal } from "iconsax-reactjs";
import Image from "next/image";
export default function MessageHeader() {
  return (
    <div className="user-activity-card-gradient flex cursor-pointer items-center justify-between gap-2 rounded-2xl border border-[#d1d1d1] bg-[#E1E3E9] px-1.5 py-1 lg:rounded-[22px] lg:px-[10px] lg:py-1.5 dark:border-[#413F47] dark:bg-[#282A2F]">
      <div className="flex items-center gap-2">
        <div className="h-[58px] w-[58px] overflow-hidden rounded-full border border-[#828282]">
          <Image
            src="https://i.ibb.co.com/d0r9sHMQ/Group-1437254166.png"
            alt="1"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="mb-1 flex items-center gap-1">
            <h3 className="text-common-text text-[17px] font-semibold tracking-[0.204px] dark:text-white">
              Rizky Pang
            </h3>
            <button>
              <Edit2
                variant="Broken"
                className="size-[18px] text-[#777777] dark:text-[#9B9A9D]"
              />
            </button>
            <p className="ms-1 mt-1 text-[10px] font-normal text-[#777777] dark:text-[#9B9A9D]">
              (User's Original name)
            </p>
          </div>
          <div className="flex items-center text-[10px] font-normal text-[#777777] dark:text-[#9B9A9D]">
            <p className="pe-3">Seen 6m ago</p>

            <span className="h-[12px] w-px bg-[#D0D0D0]"></span>

            <button className="px-2">
              <StarIcon
                size={10}
                className="fill-[#9D80CF] dark:fill-[#719CD8]"
              />
            </button>

            <span className="h-[12px] w-px bg-[#D0D0D0]"></span>

            <button className="px-2">
              <BellIcon
                size={10}
                className="fill-[#9D80CF] dark:fill-[#719CD8]"
              />
            </button>

            <span className="h-[12px] w-px bg-[#D0D0D0]"></span>

            <button className="px-2">
              <NoteRemove
                variant="Broken"
                className="size-[10px] text-[#777777]"
              />
            </button>

            <span className="h-[12px] w-px bg-[#D0D0D0]"></span>

            <button className="flex items-center gap-1 px-2">
              <ImageIcon size={10} />
              Gallery
            </button>

            <span className="h-[12px] w-px bg-[#D0D0D0]"></span>

            <button className="flex items-center gap-1 px-2">
              <PinMessage size={10} />
              Pin Msg
            </button>

            <span className="h-[12px] w-px bg-[#D0D0D0]"></span>

            <button className="flex items-center gap-1 px-2">
              <SearchNormal
                variant="Broken"
                className="size-[10px] text-[#777777]"
              />
              <span>Find</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <button>
          <More
            variant="Linear"
            className="size-[18px] rotate-90 text-[#777777]"
          />
        </button>
      </div>
    </div>
  );
}
