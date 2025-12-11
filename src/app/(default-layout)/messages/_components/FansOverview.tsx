import { AngleUpIcon, ChartIcon } from "@/components/icons";
import { Edit2 } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";
export default function FansOverview() {
  return (
    <div className="px-5 py-6">
      <div className="mb-5 flex items-center gap-1.5">
        <h4 className="text-common-text text-sm font-medium tracking-[0.168px]">
          Rizky Pang
        </h4>
        <button>
          <Edit2 variant="Broken" className="size-4 text-[#7C797E]" />
        </button>
      </div>
      <div className="mb-4 flex items-center gap-2">
        <p className="text-common-text inline-flex items-center rounded-[3px] bg-[#D1D1D6] px-[5px] py-0.5 text-xs font-normal tracking-[0.144px]">
          Location
        </p>
        <div className="text-common-text line-clamp-1 flex flex-1 items-center gap-2 text-xs tracking-[0.144px] whitespace-nowrap">
          <Image
            src="https://i.ibb.co.com/S70XKsY7/image-3085.png"
            alt="location"
            width={100}
            height={100}
            className="h-[11px] w-4"
          />
          <p>Taiwan</p>
          <span className="bg-paragraph h-[5px] w-[5px] shrink-0 rounded-full opacity-20"></span>
          <span>10:32 PM</span>
          <span>Thunder Storm</span>
        </div>
      </div>
      <div className="mb-4 flex items-center gap-2">
        <p className="text-common-text inline-flex items-center rounded-[3px] bg-[#D1D1D6] px-[5px] py-0.5 text-xs font-normal tracking-[0.144px]">
          Age
        </p>
        <div className="text-common-text line-clamp-1 flex flex-1 items-center gap-2.5 text-xs tracking-[0.144px] whitespace-nowrap">
          <p>43 y.o.</p>
          <span className="bg-paragraph h-[5px] w-[5px] shrink-0 rounded-full opacity-20"></span>
          <span>Jan 5</span>
        </div>
      </div>

      <div>
        <p className="text-common-text mb-[5px] text-xs font-normal tracking-[0.144px]">
          Preferences:
        </p>
        <div>
          <div className="flex items-center justify-between gap-2 rounded-lg bg-[#D1D1D6] px-2.5 py-[7px]">
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              Select topics of actives fan likes
            </p>
            <AngleUpIcon
              size={16}
              className="stroke-common-text text-common-text"
            />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50">
              Fan Since
            </p>
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              Sep 27, 2025
            </p>
          </div>
          <div>
            <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50">
              Subscribed
            </p>
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              <span className="text-[#42C842]">Yes</span> , 15 days
            </p>
          </div>
          <div>
            <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50">
              Rebill
            </p>
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              <span className="text-[#42C842]">On</span>
            </p>
          </div>
          <div>
            <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50">
              Last Online
            </p>
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              <span className="text-[#1E72C1]">Todays</span>
            </p>
          </div>
          <div>
            <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50">
              Last response
            </p>
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              week ago
            </p>
          </div>
          <div>
            <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50">
              Last Read
            </p>
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              Sep 29, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-common-text mb-[5px] text-xs font-medium tracking-[0.144px]">
          List:
        </p>
        <div>
          <div className="flex items-center justify-between gap-2 rounded-lg bg-[#D1D1D6] px-2.5 py-[7px]">
            <p className="text-common-text text-xs font-medium tracking-[0.144px]">
              Bying power
            </p>
            <button className="flex items-center gap-1">
              <span className="text-common-text text-xs font-medium tracking-[0.144px]">
                Creator
              </span>
              <AngleUpIcon
                size={16}
                className="stroke-common-text text-common-text"
              />
            </button>
          </div>
        </div>
        <div className="mt-5 mb-6 flex max-w-[282px] justify-between gap-2 text-center">
          <div>
            <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50">
              Spend
            </p>
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              $263
            </p>
          </div>
          <div>
            <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50">
              avg PPv
            </p>
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              $160
            </p>
          </div>
          <div>
            <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50">
              avg Tip
            </p>
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              0
            </p>
          </div>
          <div>
            <p className="text-common-text mb-0.5 text-xs font-normal tracking-[0.144px] opacity-50">
              Purchased
            </p>
            <p className="text-common-text text-xs font-normal tracking-[0.144px]">
              Sep 29, 2025
            </p>
          </div>
        </div>
        <div className="mx-5 flex justify-between">
          <div className="flex items-center gap-1">
            <ChartIcon size={24} className="stroke-[#2835EA]" />
            <Link
              href="#"
              className="text-common-text text-xs font-normal tracking-[0.144px] underline opacity-50"
            >
              View PPV Timeline
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-common-text text-xs font-normal tracking-[0.144px] opacity-50">
              Traffic Source:
            </p>
            <Link
              href="#"
              className="text-common-text text-xs font-normal tracking-[0.144px]"
            >
              Select
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 flex items-center gap-4">
        <p className="text-common-text text-xs font-normal tracking-[0.144px]">
          Fan Persona
        </p>
        <button className="rounded-[3px] bg-[#7877CC] px-1.5 py-1 text-xs font-normal tracking-[0.144px] text-white">
          Generate AI Insight
        </button>
      </div>
    </div>
  );
}
