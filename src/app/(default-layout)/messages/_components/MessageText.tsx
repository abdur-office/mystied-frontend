import { CheckBox, MessageUpIcon, VoiceIcon } from "@/components/icons";
import { Heart2Icon } from "@/components/icons/Heart2";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import MediaGallery from "./MediaGallery";
export default function MessageText() {
  return (
    <ul>
      <li>
        <div className="relative ms-auto w-fit">
          <button className="absolute bottom-0 -left-4">
            <EllipsisVertical className="size-[10px] text-[#777777]" />
          </button>
          <p className="text-common-text mb-1.5 rounded-[10px] rounded-br-none bg-[#E5E5EA] px-2.5 py-3 text-sm font-normal dark:bg-[#25242B] dark:text-white">
            Tha’ts nice that you got work after grad
          </p>
          <div className="flex items-center justify-end gap-1">
            <p className="text-right text-[9px] font-normal text-[#9B9A9D]">
              10:46 pm
              <span className="mx-1 inline-flex h-1 w-1 rounded-full bg-[#9B9A9D]"></span>
              Sent by Ginalhie Jove
            </p>
            <button>
              <CheckBox size={10} />
            </button>
          </div>
        </div>
      </li>
      <li>
        <div className="w-fit">
          <div className="mb-1 flex items-end gap-3">
            <div className="relative">
              <p className="text-common-text rounded-[10px] rounded-bl-none bg-[#E5E5EA] px-2.5 py-3 text-sm font-normal dark:bg-[#25242B] dark:text-white">
                Mm lucky i guess!
              </p>
            </div>
            <div className="flex items-center">
              <button className="-me-0.5">
                <EllipsisVertical className="size-[14px] text-[#777777]" />
              </button>
              <button>
                <Heart2Icon size={16} />
              </button>
              <button className="ms-0.5">
                <MessageUpIcon size={16} />
              </button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="w-fit">
          <div className="mb-1.5 flex items-end gap-3">
            <div className="relative">
              <button className="absolute right-0 -bottom-1.5">
                <VoiceIcon />
              </button>
              <p className="text-common-text rounded-[10px] rounded-bl-none bg-[#E5E5EA] px-2.5 py-3 text-sm font-normal dark:bg-[#25242B] dark:text-white">
                Nothing much haha just winding down
              </p>
            </div>
            <div className="flex items-center">
              <button className="-me-0.5">
                <EllipsisVertical className="size-[14px] text-[#777777] dark:text-[#9B9A9D]" />
              </button>
              <button>
                <Heart2Icon size={16} />
              </button>
              <button className="ms-0.5">
                <MessageUpIcon size={16} />
              </button>
            </div>
          </div>
          <div>
            <div className="relative h-[173px] w-[310px] overflow-hidden rounded-t-[10px] select-none">
              <Image
                src="/images/texture.png"
                alt="1"
                width={500}
                height={500}
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
              <Image
                src="https://i.ibb.co.com/mFqm29rd/Frame-2147227924.png"
                alt="1"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
              {/* <button className="unlock-btn-2 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                Unlock for $102
              </button> */}
              <MediaGallery />
            </div>
            <div className="rounded-br-[10px] bg-[#E5E5EA] px-2 py-2.5 dark:bg-[#24282C]">
              <p className="text-common-text text-sm dark:text-white">
                THE XXX-OF CHALLENGE
              </p>
              <p className="text-common-text text-sm dark:text-white">
                (XXX) Hello meow meow words hello
              </p>
            </div>
          </div>
          <p className="text-[9px] font-normal text-[#9B9A9D]">10:45 pm</p>
        </div>
      </li>
    </ul>
  );
}
